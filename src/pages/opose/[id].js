import Head from 'next/head';
import { Container, Div1, Div2, Div3 ,Button , Input ,Label } from '../../components/Header/HeaderStyles';
import {useState} from 'react';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default function Details({data}) {

	const delPost = async (oposeId) => {
        const response = await fetch(`/api/opose/${oposeId}` , {
            method: 'DELETE'
        })
        const data = await response.json()
        return 'Deleted'
    }

	return (
			<div>
				<li>
					<Div2 key={data.id}>
						<p> {data.id} {data.text} </p> 
					</Div2>
				</li>
			</div>
		)
}

export async function getServerSideProps(context) {
	const { id } = context.query 
	const data = await prisma.contact.findFirst({
		where: {
			id: Number(id)
		}
	})

	return{
		props:{ data } }
}












