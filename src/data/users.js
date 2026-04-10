import 'server-only'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../db/models'

export async function createUser({ username, password }) {
    const hashedPassword = await bcrypt.hash(password, 10)
    const user = new User({ username, password: hashedPassword })
    return await user.save()
}

export async function loginUser({ username, password }) {
    const user = await User.findOne({ username })
    if (!user) {
        throw new Error('Invalid username or password')
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password)
    if (!isPasswordCorrect) {
        throw new Error('Invalid username or password')
    }
    const token = jwt.sign({ sub: user._id}, process.env.JWT_SECRET, { expiresIn: '1h' })
    return token
}

export async function getUserById(userId) {
    const user = await User.findById(userId)
    if (!user) throw new Error('User not found')
    return { username: user.username }
}

export async function getUserIdFromToken(token) {
    if (!token) return null
    const decodedToken = jwt.verify(token, process.env.JWT_SECRET)
    return decodedToken.sub
}

export async function getUserInfoFromToken(token) {
    const userId = await getUserIdFromToken(token)
    if (!userId) return null
    const user = await getUserById(userId)
    return user
}