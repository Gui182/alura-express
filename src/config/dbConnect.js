import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guilhermeoliveira182:7846@cluster0.h4050rq.mongodb.net/alura-node");

let db = mongoose.connection;

export default db;