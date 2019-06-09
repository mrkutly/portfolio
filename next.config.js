const withImages = require("next-images");
const exp = withImages();
exp.target = "serverless";
module.exports = exp;
