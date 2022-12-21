import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    author: {type: String},
    conteudo: {type: String}
},{timestamps: true, collection: 'users'})