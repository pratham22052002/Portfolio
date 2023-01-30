const mongoose = require("mongoose");
const ContactData = mongoose.Schema({
  emailIconClass: String,
  email: String,
  phoneIconClass: String,
  phoneNumber: String,
  socialContact: [{ 
    name: String, 
    iconClass: String, 
    linkUrl: String 
}],
  cvPdfUrl: String,
  btnText: String,
  copyright: String,
});

module.exports = mongoose.model("contactData", ContactData);
