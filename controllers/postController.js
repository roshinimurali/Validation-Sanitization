import { StatusCodes } from "http-status-codes";

/**
 * This is the root controller method for the posts
 * @param {*} req 
 * @param {*} res 
 */
export const getPostRoot = (req,res) => {
    return res.status(StatusCodes.OK).send("Welcome to the post routes");
}
