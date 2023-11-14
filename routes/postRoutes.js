import express from 'express';
import { getPostRoot } from '../controllers/postController.js';


const router = express.Router();

router.get('/', getPostRoot);


export default router;