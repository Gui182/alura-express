import mongoose from "mongoose";

mongoose.connect("mongodb+srv://guilhermeoliveira182:pass@cluster");

let db = mongoose.connection;

export default db;