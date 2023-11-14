import { StatusCodes } from "http-status-codes"
import { validationResult } from "express-validator"
import User from "../models/User.js";
import { upperCaseFirstLetter } from "../helpers/sanitizationHelpers.js";
import { hasBadWords } from "../helpers/validationHelper.js";import {body} from 'express-validator'

/**
 * Validation rules for validating users
 */
export const validateUserRules = [
    body('email')
    .trim()
    .normalizeEmail()
    .isEmail(),
    body('password')
    .isStrongPassword()
    .withMessage('Password needs to contain at least 8 characters, minimum one lower case character, minimum one uppercase character, minimum one number and minimum one symbol.')
];

/**
 * Validation of users registering to our app
 */
export const validateFullUserRules = [
    body('email')
    .trim()
    .normalizeEmail({gmail_remove_subaddress: true})
    .isEmail()
    .custom(async value => {
        console.log("the value is ", value);
        //either user document if not exists null
        const existingUser = await User.findOne({email:value});
    
        if(existingUser){
          throw new Error("A user already exists with this email address");
        }
    
    }),
    body(['firstName', 'lastName'])
    .trim()
    .isAlpha()
    .customSanitizer(value => upperCaseFirstLetter(value)),
    body('userName')
    .isAlphanumeric()
    .custom(value => !hasBadWords(value))
]



/**
 * middleware that catches our errors(moved from example routes)
 */
export const validate = (req, res, next) => {
    //extract the validation errors from the request object
    const errors = validationResult(req);
    //if there are errors 
    if(!errors.isEmpty()){
        //response code 400
        return res.status(StatusCodes.BAD_REQUEST).json({errors:errors.array()})
    }

    next();}