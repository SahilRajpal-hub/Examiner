import express from 'express'
import {
  authUser,
  createStudent,
  loginStudent,
} from '../controllers/studentController.js'

const router = express.Router()

router.route('/').post(createStudent)
router.route('/login').post(loginStudent)

export default router
