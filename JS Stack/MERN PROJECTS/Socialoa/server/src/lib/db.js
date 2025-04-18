import mongoose from 'mongoose'

export const connectdb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Mongodb Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Connection Error: ${error.message}`);
    }
}