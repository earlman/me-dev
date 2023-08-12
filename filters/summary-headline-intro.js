const cheerio = require("cheerio");

module.exports = function (eleventyConfig) {
   eleventyConfig.addFilter("getSummary", function (value) {
      const $ = cheerio.load(value);
      const summary = $("h2")
         .filter(function () {
            return $(this).text().trim() === "Summary";
         })
         .next()
         .text();
      return summary;
   });
   eleventyConfig.addFilter("getHeadline", function (value) {
      const $ = cheerio.load(value);
      const headline = $("h1").next().text();
      return headline;
   });
   eleventyConfig.addFilter("getIntro", function (value) {
      const $ = cheerio.load(value);
      const intro = $("h1").next().text();
      return intro;
   });
};
