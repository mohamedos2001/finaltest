import { Schema,model } from "mongoose";

const courses=new Schema({
    course:{
        type:String,
        required:true,
    },
},{timestamps:true})
export default model('course',courses)