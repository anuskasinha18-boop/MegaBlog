import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div style={{width: '100%', padding: '2rem 0', textAlign: 'center'}}>
                <Container>
                    <h1 style={{fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--text-secondary)'}}>
                        Login to read posts
                    </h1>
                </Container>
            </div>
        )
    }
    return (
        <div style={{width: '100%', padding: '2rem 0'}}>
            <Container>
                <div style={{display: 'flex', flexWrap: 'wrap', gap: '1.5rem', justifyContent: 'center'}}>
                    {posts.map((post) => (
                        <div key={post.$id} style={{width: 'calc(25% - 1.5rem)', minWidth: '250px'}}>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home