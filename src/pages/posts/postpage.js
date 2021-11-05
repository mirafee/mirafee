import { useState } from 'react';
import styled from 'styled-components';
import {LeftSection} from '../../components/Hero/HeroStyles'
import {Container , Div1 , Div2 , Section, Button} from '../../components/Header/HeaderStyles'


 
export default function PostPage() {
    
    const [ posts , setPosts ] = useState([])
    const [ post , setPost ] = useState()
    
    //1-Fetching Posts
    const fetchPosts = async () => {
        const response = await fetch('/api/posts')
        const data = await response.json()
        setPosts(data)
        return { posts : data }
    } 
    
    const subPost = async () => {
        const response = await fetch('/api/posts' , {
            method: 'POST',
            body: JSON.stringify({ post }),
            headers: {
                'content-type': 'application/json'
            }
        })
        const data = await response.json()
        fetchPosts();
    }

    const delPost = async postId => {
        const response = await fetch(`/api/posts/${postId}` , {
            method: 'DELETE'
        })
        const data = await response.json()
        fetchPosts()
    } 
        
    return(
        <Container>
        <Div1>
            <Button onClick={fetchPosts}>Load Posts</Button>
        </Div1>
        <Div2>
            <input type="text" value={post} onChange={e => setPost(e.target.value)} />
            <Button onClick={subPost}>Submit Posts</Button>
        </Div2>
            {posts.map((post) => (
                <div key={post.id}>
                {post.id} {post.text}
                <Button onClick={() => delPost(post.id)}>Delete Posts</Button>
                </div>
            ))}
        </Container>
        );
    };
    
