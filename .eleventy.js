const cheerio = require("cheerio");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const eleventyImage = require("@11ty/eleventy-img");
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
      "node_modules/@fontsource/merriweather/files/merriweather-latin-ext-400-italic.woff2": "css/fonts/merriweather-latin-ext-400-italic.woff2",
      "node_modules/@fontsource/merriweather/files/merriweather-latin-400-italic.woff2": "css/fonts/merriweather-latin-400-italic.woff2",
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

   // Sort work by "sort" variable in frontmatter
   // Item moves to end if data.order is undefined
   eleventyConfig.addCollection("sortedWork", function (collectionApi) {
      return collectionApi
         .getFilteredByGlob("src/work/*.md")
         .filter((item) => {
            return !item.data.tags.includes("featured");
         })
         .sort(function (a, b) {
            if (!a.data.sort) {
               return 1;
            } else if (!b.data.sort) {
               return -1;
            } else {
               return a.data.sort - b.data.sort;
            }
         });
   });

   eleventyConfig.addCollection("sortByPath", function (collectionApi) {
      return collectionApi.getAll().sort(function (a, b) {
         //return a.date - b.date; // sort by date - ascending
         // return b.date - a.date; // sort by date - descending
         return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
         //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
   });

   // Dependent on two repos:
   // https://www.11ty.dev/docs/plugins/image/
   // https://github.com/earlman/me-dev-11ty-screenshot-plugin
   //
   // Valid style values: small, medium, large, opengraph
   // https://github.com/earlman/me-dev-11ty-screenshot-plugin

   eleventyConfig.addShortcode("getScreenshotHtml", function (siteUrl) {
      // Feed url into screenshot-generator-api (hosted separately)
      let screenshotUrl = `https://screenshot-generator-api.foundations.design/${encodeURIComponent(siteUrl)}/opengraph/`;

      let viewport = {
         width: 1200,
         height: 630,
      };

      let options = {
         formats: ["jpeg"],
         widths: [1100],
         urlFormat: function () {
            return screenshotUrl;
         },
      };

      let stats = eleventyImage.statsByDimensionsSync(screenshotUrl, viewport.width, viewport.height, options);

      return eleventyImage.generateHTML(stats, {
         alt: `Screenshot of ${siteUrl}`,
         loading: "lazy",
         decoding: "async",
         // sizes: "(min-width: 22em) 30vw, 100vw",
         class: "sites-screenshot",
      });
   });

   return {
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
