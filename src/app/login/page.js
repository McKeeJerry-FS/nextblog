import { cookies } from 'next/headers'
import { loginUser } from '@/data/users'
import { initDatabase } from '@/db/init'
import { Login } from '@/components/Login'

async function loginAction(prevState, formData) {
  'use server'
  let token
  const username = formData.get('username')
  const password = formData.get('password')

  if (!username || !password) {
    return { error: 'Username and password are required' }
  }

  try {
    await initDatabase()
    token = await loginUser({ username, password })

    if (!token) {
      return { error: 'Failed to generate authentication token' }
    }
  } catch (err) {
    return { error: err.message }
  }

  try {
    cookies().set({
      name: 'AUTH_TOKEN',
      value: token,
      path: '/',
      maxAge: 60 * 60 * 24,
      secure: process.env.NODE_ENV === 'production',
      httpOnly: true,
    })
  } catch (err) {
    return { error: 'Failed to set authentication cookie: ' + err.message }
  }

  return { success: true }
}

export default function LoginPage() {
  return <Login loginAction={loginAction} />
}
