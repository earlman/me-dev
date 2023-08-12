const eleventyImage = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, sizes = "(min-width: 1024px) 100vw, 50vw") {
   let metadata = await eleventyImage(src, {
      widths: [300, 900, 1500],
      formats: ["jpeg", "webp"],
      outputDir: "./_dist/img/",
   });

   let imageAttributes = {
      alt,
      sizes,
      loading: "lazy",
      decoding: "async",
   };

   console.log(src + " was processed");
   // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
   return eleventyImage.generateHTML(metadata, imageAttributes);
}

module.exports = function (eleventyConfig) {
   eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
   eleventyConfig.addLiquidShortcode("image", imageShortcode);
   eleventyConfig.addJavaScriptFunction("image", imageShortcode);
};
