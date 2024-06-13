import express from 'express';
import { UserController } from '../controller/UserController';

const router = express.Router();
const userController = new UserController();

// GET all users
router.get('/', (req, res) => {
    userController.getAllUsers(req, res);
});

// GET user by ID
router.get('/:id', (req, res) => {
    userController.getUserById(req, res);
});

// POST create a new user
// router.post('/', (req, res) => {
//     userController.createUser(req, res);
// });

export default router;
