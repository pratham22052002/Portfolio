const express = require("express");
const routes = express.Router();
const HeaderData = require("../models/header")
const AboutData = require("../models/about")
const ServicesData = require("../models/services")
const PortfolioData = require("../models/portfolio")
const ContactData = require("../models/contact")


routes.get("/", async (req,res)=>{
    const headerData = await HeaderData.findOne({_id:"63d4c574a3ccc126b97971a7"})
    const aboutData = await AboutData.findOne({_id:"63d4cbf80b09e63af188802b"})
    const servicesData = await ServicesData.find()
    const portfolioData = await PortfolioData.findOne({_id:"63d4e821b408f182c59e8e80"})
    const contactData = await ContactData.findOne({_id:"63d53d18ed2c66c75a23e3e9"})
    // console.log(headerData)
    // console.log(aboutData)
    res.render("index",{
        headerData : headerData,
        aboutData : aboutData,
        servicesData : servicesData,
        portfolioData : portfolioData,
        contactData : contactData,
    })
})

module.exports = routes;