const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const HeaderData = mongoose.Schema({
    logoUrl:String,
    expertise:String,
    firstName:String,
    lastName:String,
    country:String,
    bgUrl:String,
    ph_bgUrl:String,
})

module.exports = mongoose.model("headerData",HeaderData);