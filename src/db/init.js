import 'server-only'
import mongoose from 'mongoose'

export async function initDatabase() {
    const mongoUri = process.env.MONGODB_URI ?? process.env.DATABASE_URL

    if (!mongoUri) {
        throw new Error(
            'Missing MongoDB connection string. Set MONGODB_URI or DATABASE_URL in your environment variables.'
        )
    }

    const connection = await mongoose.connect(mongoUri)
    return connection
}