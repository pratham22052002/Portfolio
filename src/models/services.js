const mongoose = require("mongoose");
const ServicesData = mongoose.Schema([{
    iconClass:String,
    heading:String,
    description:String,
    linkUrl:String,
    linkText:String,
},])

module.exports = mongoose.model("serviceData",ServicesData);