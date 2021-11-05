import {PrismaClient} from '@prisma/client'
const prisma = new PrismaClient();


export default async ( req , res ) => {
		const data = JSON.parse(req.body)
		const createOpose = await prisma.contact.create({
			data
		})
		res.json(createOpose)
	}


