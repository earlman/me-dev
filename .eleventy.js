require("dotenv").config();
const cheerio = require("cheerio");

const Collections = require("./collections.js");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const eleventyImage = require("@11ty/eleventy-img");
var md = require("markdown-it")();

async function imageShortcode(src, alt, sizes = "(min-width: 1024px) 100vw, 50vw") {
   let metadata = await eleventyImage(src, {
      widths: [300, 900, 1500],
      formats: ["avif", "jpeg"],
      outputDir: "./_dist/img/",
   });

   let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
   };

   console.log(src);
   // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
   return eleventyImage.generateHTML(metadata, imageAttributes);
}

module.exports = (eleventyConfig) => {
   eleventyConfig.addPlugin(Collections);
   eleventyConfig.addPlugin(EleventyRenderPlugin);

   eleventyConfig.addWatchTarget("./styles/");

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

   // Dependent on two repos:
   // https://www.11ty.dev/docs/plugins/image/
   // https://github.com/earlman/me-dev-11ty-screenshot-plugin
   //
   // Valid style values: small, medium, large, opengraph

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
         class: "screenshot",
      });
   });

   // https://github.com/11ty/api-indieweb-avatar
   //github.com/zachleat/zachleat.com/blob/f9c0c9b7f5159e8e0204e956a8dcc68401a0a384/_includes/imageAvatarPlugin.js
   function indieAvatarHtml(url = "", classes = "z-avatar") {
      let screenshotUrl = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(url)}/`;
      return `<img alt="IndieWeb Avatar for ${url}" class="${classes}" loading="lazy" decoding="async" 
      style="width: 1rem;height: 1rem;border-radius: 15%;vertical-align: baseline;	margin: 0 .25em; display: inline;"
      src="${screenshotUrl}" width="60" height="60">`;
   }

   eleventyConfig.addShortcode("indieAvatar", indieAvatarHtml);
   eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
   eleventyConfig.addLiquidShortcode("image", imageShortcode);
   eleventyConfig.addJavaScriptFunction("image", imageShortcode);

   https: return {
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
