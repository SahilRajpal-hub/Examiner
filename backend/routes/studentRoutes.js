import express from 'express'
import { authUser } from '../controllers/studentController'

const router = express.Router()

router.route('/').post(authUser)

export default router
