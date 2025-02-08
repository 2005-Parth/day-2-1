import mongoose from 'mongoose';

const connectionString = process.env.MONGO_URI || "";
console.log(connectionString);
const connectDB = async () => {
	try {
		await mongoose.connect(connectionString);
		console.log('MongoDB connected');
	} catch (err) {
		console.error(err);
	}
};

export default connectDB;