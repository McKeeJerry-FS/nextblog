'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import PropTypes from 'prop-types'

export function Login({ loginAction }) {
  const [state, formAction] = useFormState(loginAction, {})
  const router = useRouter()

  useEffect(() => {
    if (state && state.success) {
      router.push('/')
    }
  }, [state, router])

  return (
    <form action={formAction}>
      <div>
        <label htmlFor='username'>Username:</label>
        <input type='text' id='username' name='username' />
      </div>
      <br />
      <div>
        <label htmlFor='password'>Password:</label>
        <input type='password' id='password' name='password' />
      </div>
      <br />
      <hr />
      <br />
      <input type='submit' value='Login' />
      {state.error ? <strong>Error logging in: {state.error}</strong> : null}
    </form>
  )
}
