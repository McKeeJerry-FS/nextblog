import { PostList } from '@/components/PostList'

export default function HomePage() {
    const posts = [
        { _id: 1, title: 'First Post', content: 'This is the first post.', author: { username: 'Jerry McKee' } },
        { _id: 2, title: 'Second Post', content: 'This is the second post.', author: { username: 'Jerry McKee' } },
    ]
    return <PostList posts={posts} />
}