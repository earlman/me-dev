module.exports = (eleventyConfig) => {
   eleventyConfig.addWatchTarget("./styles/");

   //copy /images to dist/images
   // eleventyConfig.addPassthroughCopy("./src/images");

   eleventyConfig.addPassthroughCopy({
      "node_modules/@fontsource/open-sans/files": "css/fonts",
      "node_modules/@fontsource/merriweather/files": "css/fonts",
   });

   return {
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
