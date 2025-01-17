import mongoose from "mongoose"

const Schema  = mongoose.Schema;


const userSchema  =  new Schema({
    email: String,
    number: {type: Number, default: 0},
    walletid: String,
    name: String,
    password: {type: String, default: ""},
    gprovider: Boolean,
    transactions: {type: [], default: []},
    balance: {type: Number, default: 0},
    contacts: {type: [], default: []},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model("users", userSchema);