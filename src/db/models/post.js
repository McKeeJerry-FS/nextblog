import 'server-only'
import mongoose, { Schema } from 'mongoose'

const postSchema = new Schema({
    title: { type: String, required: true },
    author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    contents: String,
},
{
    timestamps: true,
})

export const Post = mongoose.models.Post || mongoose.model('Post', postSchema)