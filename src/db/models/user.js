import 'server-only'
import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
})

export const User = mongoose.models.User || mongoose.model('User', userSchema)