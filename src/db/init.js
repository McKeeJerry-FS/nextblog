import 'server-only'
import mongoose from 'mongoose'

const globalForMongoose = globalThis

if (!globalForMongoose.__mongooseCache) {
  globalForMongoose.__mongooseCache = {
    conn: null,
    promise: null,
  }
}

export async function initDatabase() {
  const mongoUri = process.env.MONGODB_URI ?? process.env.DATABASE_URL

  if (!mongoUri) {
    throw new Error(
      'Missing MongoDB connection string. Set MONGODB_URI or DATABASE_URL in your environment variables.',
    )
  }

  const cached = globalForMongoose.__mongooseCache

  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(mongoUri, {
      serverSelectionTimeoutMS: 5000,
      connectTimeoutMS: 10000,
    })
  }

  try {
    cached.conn = await cached.promise
    return cached.conn
  } catch (error) {
    cached.promise = null
    throw new Error(`MongoDB connection failed: ${error.message}`)
  }
}
