import express from 'express';
import { listUsers, createUser } from '../controllers/userController.js';
import {body} from 'express-validator';
import User from '../models/User.js';
import { validate, validateFullUserRules } from '../middleware/validator.js';
const router = express.Router();

router.get('/', listUsers);

/* router.post('/create', body('email').custom(async value => {
    console.log("the value is ", value);
    //either user document if not exists null
    const existingUser = await User.findOne({email:value});

    if(existingUser){
      throw new Error("A user already exists with this email address");
    }

}),createUser);
 */
router.post('/create',validateFullUserRules,validate,createUser);

export default router;