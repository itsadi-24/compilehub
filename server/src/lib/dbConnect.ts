import mongoose from 'mongoose';

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: 'compile-hub',
    });
    console.log('connection to MONGODb established');
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
};
