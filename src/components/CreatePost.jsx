'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import PropTypes from 'prop-types'
import { useFormState } from 'react-dom'

export function CreatePost({ createPostAction }) {
  const [state, formAction] = useFormState(createPostAction, {})
  const router = useRouter()

  useEffect(() => {
    if (state && state.success) {
      router.push('/')
    }
  }, [state, router])

  return (
    <form action={formAction}>
      <div>
        <label htmlFor='title'>Title:</label>
        <input type='text' id='title' name='title' required />
      </div>
      <br />
      <div>
        <label htmlFor='contents'>Contents:</label>
        <textarea id='contents' name='contents' />
      </div>
      <br />
      <hr />
      <br />
      <input type='submit' value='Create' />
      {state?.error ? (
        <strong>Error creating post: {state.error}</strong>
      ) : null}
    </form>
  )
}

CreatePost.propTypes = {
  createPostAction: PropTypes.func.isRequired,
}
