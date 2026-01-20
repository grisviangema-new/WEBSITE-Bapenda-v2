import express from 'express'
import { registerUser, loginUser, getProfile } from '../controllers/userController.js'
import authUser from '../middlewares/authUser.js'


const userRouter = express.Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)

// Jalur ini DIJAGA oleh authUser. Hanya yang punya token yang bisa masuk.
userRouter.get('/get-profile', authUser, getProfile)

export default userRouter