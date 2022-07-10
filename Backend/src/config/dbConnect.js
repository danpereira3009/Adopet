import mongoose from "mongoose"

mongoose.connect("mongodb+srv://Daniel:123@cluster0.uaf8ooe.mongodb.net/Adopet");

let db = mongoose.connection

export default db;