import mongoose from "mongoose";

export const UserSchema = new mongoose.Schema({
    nome: {type: String},
},{timestamps: true, collection: 'users'})