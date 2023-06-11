import mongoose, { Schema, model } from "mongoose";


const ChatSchema = new mongoose.Schema(
    {
        members: {
            type: Array,
        }
    },
    {
        timestamps: true
    }
);

const ChatModel = model("Chat", ChatSchema);
export default ChatModel;