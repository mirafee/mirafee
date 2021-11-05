import Head from 'next/head'
import Link from 'next/link'
import { Container, Div1, Div2, Div3 ,Button ,Label, Section, formContainer ,Input} from '../../components/Header/HeaderStyles';
import {PrismaClient} from '@prisma/client'
import {useState} from 'react'
import {formButton} from '../../components/Projects/ProjectsStyles'

const prisma = new PrismaClient()

export default function Opose({data ,user}) {

	const [formData, setFormData] = useState({})
	const [ opose , setOpose ] = useState(data)


	const fetchPosts = async () => {
        const response = await fetch('/api/opose/publish')
        const data = await response.json()
        setOpose(data)
        return { posts : data }
    }

	async function saveOpose (e) {
		e.preventDefault()
		setOpose([...opose , formData])
		const response = await fetch('/api/opose' , {
			method: 'POST',
			body: JSON.stringify(formData)
		})


		return await response.json()
	}
	
	const delPost = async (oposeId) => {
        const response = await fetch(`/api/opose/${oposeId}` , {
            method: 'DELETE'
        })
        const data = await response.json()
       	fetchPosts()
    }

	return (
			<>			
			<Section>
				<Head>
					<title>Wish to Rafi</title>
				</Head>
				<formContainer>
				<formInputs>
				<form onSubmit={saveOpose}>
					<Input type="number" placeholder="your/wish importance" name="id" onChange={e => setFormData({ ...formData, id: +e.target.value })}/>
                    <Input type="text" placeholder="your wish" name="text" onChange={e => setFormData({ ...formData, text: e.target.value })}/>
                    <Button type="submit">Add</Button>
                </form>
                </formInputs>
				</formContainer>
			</Section>
			<Div2>
				{opose.map((post) => (
				<span key={post.id}>
				<p> {post.text} </p>
					<Link as={`/opose/${encodeURIComponent(post.id)}`}  href={`/opose/${encodeURIComponent(post.id)}`} passHref >
						<p> {post.id} </p>
					</Link>
					<Button onClick={() => delPost(post.id)}>Delete</Button>
				</span>
				))}
			</Div2>
			</>
		)
}

export async function getServerSideProps() {

	const posts = await prisma.contact.findMany()

	return{props:{data: posts}}
}

