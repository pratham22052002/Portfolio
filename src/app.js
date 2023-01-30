require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const hbs = require("hbs");
const mongoose = require("mongoose");
const routes = require("./routers/main");
const port = process.env.PORT || 5556;
const Header = require("./models/header");
const About = require("./models/about");
const Services = require("./models/services");
const Portfolio = require("./models/portfolio");
const Contact = require("./models/contact");




app.use(cors());
app.use("/static", express.static("public"));
app.use("", routes);
//template engine
app.set("view engine", "hbs");
app.set("views", "views");
hbs.registerPartials("views/partials");



//db connection
mongoose.connect(process.env.MDBURL,() => {
    console.log("DB connected");
  }
);

app.listen(port, () => {
  console.log(`server is started at http://localhost:${port}`);
});
