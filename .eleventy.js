require("dotenv").config();
const eleventyImage = require("@11ty/eleventy-img");
const Collections = require("./collections.js");
var md = require("markdown-it")();
const eleventyVue = require("@11ty/eleventy-plugin-vue");
const pluginWebc = require("@11ty/eleventy-plugin-webc");
const { EleventyRenderPlugin } = require("@11ty/eleventy");
const sass = require("sass");
const path = require("node:path");
const browserslist = require("browserslist");
const { transform, browserslistToTargets } = require("lightningcss");

const imageShortcode = require("./shortcodes/image");
const screenshotHtmlShortcode = require("./shortcodes/screenshotHtml.js");
const avatarShortcode = require("./shortcodes/avatar.js");
const shiFilter = require("./filters/summary-headline-intro");

module.exports = (eleventyConfig) => {
   // Shortcodes
   imageShortcode(eleventyConfig);
   screenshotHtmlShortcode(eleventyConfig);
   avatarShortcode(eleventyConfig);

   // Filters
   shiFilter(eleventyConfig);

   // Plugins
   eleventyConfig.addPlugin(Collections);
   eleventyConfig.addPlugin(eleventyVue);
   eleventyConfig.addPlugin(pluginWebc, {
      components: "src/_includes/components/**/*.webc",
   });
   eleventyConfig.addPlugin(EleventyRenderPlugin);

   eleventyConfig.addWatchTarget("./styles/");

   eleventyConfig.addPassthroughCopy({
      "src/_data": "data", // Web components are using local data files (skillstable.webc)
      "src/_includes/favicons": "/",
      libraries: "libraries/",

      // Only copying the specific .woff2 files I need because the hot-reloading is taking a while
      "node_modules/@fontsource-variable/fraunces": "assets/fonts/fraunces",
      "node_modules/@fontsource/alegreya-sans": "assets/fonts/alegreya-sans",
   });

   // Recognize Sass as a "template languages"
   eleventyConfig.addTemplateFormats("sass");

   // Compile Sass
   eleventyConfig.addExtension("sass", {
      outputFileExtension: "css",
      compile: async function (inputContent, inputPath) {
         // Skip files like _fileName.scss
         let parsed = path.parse(inputPath);
         if (parsed.name.startsWith("_")) {
            return;
         }

         // Run file content through Sass
         let result = sass.compileString(inputContent, {
            loadPaths: [parsed.dir || "."],
            sourceMap: false, // or true, your choice!,
            syntax: "indented", // ! .SASS files don't work without this line
         });

         // Allow included files from @use or @import to
         // trigger rebuilds when using --incremental
         this.addDependencies(inputPath, result.loadedUrls);

         let targets = browserslistToTargets(browserslist("defaults"));

         return async () => {
            let { code } = await transform({
               code: Buffer.from(result.css),
               minify: true,
               sourceMap: true,
               targets,
            });
            return code;
         };
      },
   });

   https: return {
      dir: {
         input: "src",
         output: "_dist",
      },
   };
};
