// Import required modules
import mongoose from 'mongoose';


// Connect to MongoDB database
mongoose.connect('mongodb+srv://Navneet:UmX45eXznXYiOSWK@mongodb.rrrlk32.mongodb.net/').then(() => {
    console.log('Connected to MongoDB');
}).catch((error:any) => {
    console.error('Error connecting to MongoDB:', error);
});

// Define schema for user sign up
const signUpSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create User model
export const User = mongoose.model('User', signUpSchema);

