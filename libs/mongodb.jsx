import mongoose from "mongoose";

const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log('DB Connected Successfully');
    } catch (error) {
        console.log("Failed to connect with DB: ", error);
    }
};

export default connectMongoDB;