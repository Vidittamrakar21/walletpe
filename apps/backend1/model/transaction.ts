import mongoose from "mongoose"

const Schema  = mongoose.Schema;


const TransSchema  =  new Schema({
    uid: String,
    amount: Number,
    status: String,
    type: String,
    payto: String,
    payfrom: String,
    date: {type: Date, default: Date.now}

   
})

module.exports = mongoose.model("transactions", TransSchema);