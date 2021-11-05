import {PrismaClient} from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle( req, res ) {
  const postId = req.query.oposeId;
  if (req.method === 'DELETE') {
    const post = await prisma.contact.delete({
      where: { id: Number(postId) },
    });
    res.json(post);
  } else {
    throw new Error(
      `The HTTP ${req.method} method is not supported at this route.`,
    )
  }
}

