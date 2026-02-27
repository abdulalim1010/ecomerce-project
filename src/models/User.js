import clientPromise from '@/lib/mongodb';

export async function getDb() {
  const client = await clientPromise;
  return client.db('ecommerce');
}

export async function getUsersCollection() {
  const db = await getDb();
  return db.collection('users');
}

// User Schema (for reference - MongoDB is schema-less)
export const userSchema = {
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: false },
  googleId: { type: String, required: false },
  avatar: { type: String, required: false },
  role: { type: String, default: 'user' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
};

// Create indexes (call this once during setup)
export async function createUserIndexes() {
  try {
    const collection = await getUsersCollection();
    await collection.createIndex({ email: 1 }, { unique: true });
    await collection.createIndex({ googleId: 1 }, { unique: true });
    console.log('User indexes created successfully');
  } catch (error) {
    console.error('Error creating user indexes:', error);
  }
}
