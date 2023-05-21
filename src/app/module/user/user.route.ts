import express from 'express'
import { createUser, getUser, getUserByID } from './user.controller'
const router = express.Router()

router.get('/', getUser)
router.get('/:id', getUserByID)
router.post('/create-user', createUser)

export default router;