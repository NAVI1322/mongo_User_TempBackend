
import express, { Router } from 'express'
import {User} from "../services/db"
import jwt from "jsonwebtoken"

const router = Router()
const app = express();


// Route to handle user sign up
router.post('/signup', async (req, res) => {
    try {
        const body = req.body;

        const user = await User.create(body)

        const token = jwt.sign({UserId:user._id}, "Navi")

      
        res.status(201).json({ 
            message: 'User created successfully',
            token:token
   
         });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'An error occurred while signing up' });
    }
});

// Route to handle user sign in
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const userExist = await User.findOne({ email });
        if (!userExist) {
            return res.status(404).json({ error: 'User not found' });
        }

        const user = await User.findOne({
            email:email,
            password:password
        })

        if(!user){
            return res.status(404).json({ error: 'user / password is incorrect' });
        }

        const token = jwt.sign({UserId:user._id}, "Navi")

        res.status(201).json({ 
            message: 'Sign In successfully',
            token:token
   
         });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).json({ error: 'An error occurred while signing in' });
    }
});


export default router;