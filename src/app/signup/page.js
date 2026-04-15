import { createUser } from '@/data/users'
import { initDatabase } from '@/db/init'
import { Signup } from '@/components/Signup'

async function signupAction(prevState, formData) {
  'use server'
  try {
    await initDatabase()
    await createUser({
      username: formData.get('username'),
      password: formData.get('password'),
    })
    return { success: true }
  } catch (err) {
    return { error: err.message }
  }
}

export default function SignupPage() {
  return <Signup signupAction={signupAction} />
}
