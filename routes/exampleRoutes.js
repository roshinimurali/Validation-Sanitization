import express from 'express'
import {body} from 'express-validator'
import { getExampleRoot } from '../controllers/exampleController.js';
import { filterBadWords, upperCaseFirstLetter } from '../helpers/sanitizationHelpers.js';
import { hasBadWords } from '../helpers/validationHelper.js';
import { validate,validateUserRules,validateFullUserRules } from '../middleware/validator.js';
const router=express.Router();
router.post('/checkmobilephone',body('phone').isMobilePhone('de-DE'),validate,getExampleRoot)

router.post('/validateuser',validateUserRules,validate,getExampleRoot)

/* router.post('/validateuser',body('email').trim().normalizeEmail().isEmail(),body('password').isStrongPassword().withMessage('password contains uppercase'),getExampleRoot)
 */router.post('/validatefirstname',body('firstname').isAlpha(),validate,getExampleRoot)
router.post('/create-comment',body('comment').escape(),validate,getExampleRoot)
router.post('/register',body('firstName').customSanitizer(value=>upperCaseFirstLetter(value)),validate,getExampleRoot)
/* router.post('/create-post',body('content').customSanitizer(value=>filterBadWords(value)),getExampleRoot)
 */router.post('/create-post',body('content')/* custom(value=>!hasBadWords(value)) */.customSanitizer(value=>filterBadWords(value)),validate,getExampleRoot)

export default router;