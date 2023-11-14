import {Schema, model} from 'mongoose';

//schema is the structure of our document
const userSchema = new Schema({
    dateCreated:{type:Date, default:Date.now},
    firstName:{type:String, required:true},
    lastName:{type:String, required:true},
    userName:{type:String, required:true},
    email:{type:String, required:true}
});

//create the model based on the schema
const User = model('user', userSchema);

//export this model to the rest of our application
export default User;