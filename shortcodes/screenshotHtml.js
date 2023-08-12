// Dependent on two repos:
// https://www.11ty.dev/docs/plugins/image/
// https://github.com/earlman/me-dev-11ty-screenshot-plugin
//
// Valid style values: small, medium, large, opengraph

const eleventyImage = require("@11ty/eleventy-img");

module.exports = function (eleventyConfig) {
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
};
