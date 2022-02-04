module.exports = (config) => {
   //copy /images to dist/images
   // config.addPassthroughCopy("./src/images");

   return {
      // markdownTemplateEngine: "njk",
      // dataTemplateEngine: "njk",
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
