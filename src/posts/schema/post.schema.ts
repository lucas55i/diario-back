import mongoose from "mongoose";

export const PostSchema = new mongoose.Schema({
    author: {type: String},
    conteudo: {type: String}
},{timestamps: true, collection: 'posts'})