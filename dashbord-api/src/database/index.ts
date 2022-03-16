import mongoose from 'mongoose';
import "dotenv/config";

// Connect to MongoDB
mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));
