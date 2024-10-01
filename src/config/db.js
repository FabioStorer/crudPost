import mongoose from 'mongoose';

(async () => {
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log('Successfully connected to database');
    } catch (error) {
        console.log(error);
    }
})();