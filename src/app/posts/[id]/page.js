import { notFound } from 'next/navigation'
import { getPostById } from '@/data/posts'
import { initDatabase } from '@/db/init'
import { FullPost } from '@/components/FullPost'



export default function ViewPostPage({ params }) {
    const post = {
        title: `Hello, Next.js (${params.id})`,
        content: 'This post will be fetched from the DB later.',
        author: { username: 'Jerry McKee'},
    }

    if(!post) notFound()
        
    return (
        <FullPost 
            title={post.title} 
            contents={post.content} 
            author={post.author} 
        />
    )
}