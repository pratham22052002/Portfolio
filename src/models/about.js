const mongoose = require("mongoose");
const aboutData = mongoose.Schema({
    imageUrl:String,
    description:String,
    skills:[{heading:String,shortLine:String},],
    exprience:[{heading:String,shortLine:String},],
    education:[{heading:String,shortLine:String},],
})

module.exports = mongoose.model("aboutData",aboutData);