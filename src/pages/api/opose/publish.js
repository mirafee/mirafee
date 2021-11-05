import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle( req, res ) {
  if (req.method === 'GET') {
    const post = await prisma.contact.findMany();
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    )
  }
}