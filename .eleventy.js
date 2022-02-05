const cheerio = require("cheerio");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
var md = require("markdown-it")();

module.exports = (eleventyConfig) => {
   eleventyConfig.addPlugin(EleventyRenderPlugin);

   eleventyConfig.addWatchTarget("./styles/");

   // copy /images to dist/images
   // eleventyConfig.addPassthroughCopy("./src/images");

   eleventyConfig.addPassthroughCopy({
      // "node_modules/@fontsource/open-sans/files": "css/fonts",
      // "node_modules/@fontsource/merriweather/files": "css/fonts",

      // Only copying the specific .woff2 files I need because the hot-reloading is taking a while
      "node_modules/@fontsource/open-sans/files/open-sans-latin-ext-variable-full-normal.woff2": "css/fonts/open-sans-latin-ext-variable-full-normal.woff2",
      "node_modules/@fontsource/open-sans/files/open-sans-latin-variable-full-normal.woff2": "css/fonts/open-sans-latin-variable-full-normal.woff2",
      "node_modules/@fontsource/merriweather/files/merriweather-latin-ext-400-normal.woff2": "css/fonts/merriweather-latin-ext-400-normal.woff2",
      "node_modules/@fontsource/merriweather/files/merriweather-latin-400-normal.woff2": "css/fonts/merriweather-latin-400-normal.woff2",
   });

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
   eleventyConfig.addCollection("sortByPath", function (collectionApi) {
      return collectionApi.getAll().sort(function (a, b) {
         //return a.date - b.date; // sort by date - ascending
         // return b.date - a.date; // sort by date - descending
         return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
         //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
   });

   return {
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
