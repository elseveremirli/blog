import mongoose from "mongoose"

const connectDB = async () => {
    await mongoose.connect(`${process.env.CONNECTION_URL}`)
}

export default connectDB