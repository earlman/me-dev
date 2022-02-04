module.exports = (eleventyConfig) => {
   eleventyConfig.addWatchTarget("./styles/");

   //copy /images to dist/images
   // eleventyConfig.addPassthroughCopy("./src/images");

   return {
      // markdownTemplateEngine: "njk",
      // dataTemplateEngine: "njk",
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
