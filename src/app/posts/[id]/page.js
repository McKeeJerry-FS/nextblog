import { FullPost } from '@/components/FullPost'

export default function ViewPostPage({ params }) {
    const post = {
        title: `Hello, Next.js (${params.id})`,
        content: 'This post will be fetched from the DB later.',
        author: { username: 'Jerry McKee'},
    }

    return (
        <FullPost 
            title={post.title} 
            contents={post.content} 
            author={post.author} 
        />
    )
}