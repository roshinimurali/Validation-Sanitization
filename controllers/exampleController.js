import { StatusCodes } from "http-status-codes"
import { validationResult } from "express-validator"

/**default controller function */

export const getExampleRoot=(req, res) =>{
//extract validation error
/* moved to middleware
const errors=validationResult(req);
if(!errors.isEmpty()){
    return res.status(StatusCodes.BAD_REQUEST).json({errors:errors.array()})
} */
return res.status(StatusCodes.OK).json({
    message:'you got through',bodySent:req.body
})

}