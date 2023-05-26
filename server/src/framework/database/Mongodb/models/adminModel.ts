import mongoose, { Schema, model } from "mongoose";

const adminSchema = new Schema(
    {
        name:{
            type:String,
            default: 'CONNECTIFY-ADMIN'
        },
        email: {
            require: true,
            type: String
        },
        password: {
            require:true,
            type: String
        }
    }
)

 const Admin = model('admin', adminSchema);

 export default Admin