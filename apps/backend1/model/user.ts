import mongoose from "mongoose"

const Schema  = mongoose.Schema;


const userSchema  =  new Schema({
    email: String,
    number: Number,
    walletid: String,
    name: String,
    password: {type: String, default: ""},
    gprovider: Boolean,
    transactions: {type: [], default: []},
    balance: {type: Number, default: 0}
})

module.exports = mongoose.model("users", userSchema);