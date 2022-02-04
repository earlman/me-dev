module.exports = (eleventyConfig) => {
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

   return {
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
