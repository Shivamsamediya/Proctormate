import express from 'express';
import { signupAdmin, loginAdmin } from '../controllers/auth.controllers.js';

const router = express.Router();

router.post('/signup', signupAdmin);
router.post('/login', loginAdmin);


export default router;

