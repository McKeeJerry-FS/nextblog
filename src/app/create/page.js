import { cookies } from 'next/headers'
import { createPost } from '@/data/posts'
import { initDatabase } from '@/db/init'
import { getUserInfoFromToken } from '@/data/users'
import { CreatePost } from '@/components/CreatePost'

export default function CreatePostPage() {
  async function createPostAction(prevState, formData) {
    'use server'
    const token = cookies().get('AUTH_TOKEN')?.value
    if (!token) {
      return { error: 'You must be logged in to create a post.' }
    }

    try {
      await initDatabase()
      const user = await getUserInfoFromToken(token)
      if (!user) {
        return { error: 'Invalid or expired token.' }
      }

      const post = await createPost(user._id, {
        title: formData.get('title'),
        contents: formData.get('contents'),
      })
      return { success: true, postId: String(post._id) }
    } catch (err) {
      return { error: err.message }
    }
  }

  return <CreatePost createPostAction={createPostAction} />
}
