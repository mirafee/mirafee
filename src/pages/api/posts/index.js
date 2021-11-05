import { posts } from "../../../../data/posts";
    
export default function handler( req , res ) {
    if(req.method === 'GET' ){
        res.status(200).json(posts)
    } else if(req.method === 'POST') {
    const post = req.body.post
    const newPost = {
        id: Math.floor(Math.random() * 10),
        text: post
    }
        posts.push(newPost)
        res.status(201).json(newPost)
    }
        
}