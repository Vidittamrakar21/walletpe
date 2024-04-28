import mongoose from "mongoose"

const Schema  = mongoose.Schema;


const userSchema  =  new Schema({
    email: String,
    number: Number,
    name: String,
    password: {type: String, default: ""},
    gprovider: Boolean,
    transactions: {type: [], default: []},
    balance: String
})

module.exports = mongoose.model("users", userSchema);