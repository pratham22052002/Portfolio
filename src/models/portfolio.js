const mongoose = require("mongoose");
const PortfolioData = mongoose.Schema({
  work: [
    {
      imgUrl: String,
      heading: String,
      description: String,
      linkUrl: String,
      linkiconClass: String,
    },
  ],
  moreLinkUrl: String,
  moreLinkText: String,
});

module.exports = mongoose.model("portfolioData", PortfolioData);
