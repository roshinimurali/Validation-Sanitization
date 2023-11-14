import {Schema, model} from 'mongoose';

const postSchema = new Schema({
    title: {type:String,required:true },
    content:{type:String, required:true},
    dateCreated:{type:Date, default:Date.now},
    postLocation:{type:String, required:true, enum:{
        values:['FRONTPAGE', 'SUBSCRIBERPAGE'],
        message:'{VALUE} is not supported'
    }}
});

const Post = model("post", postSchema);

export default Post;