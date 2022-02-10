module.exports = function (configData) {
   if (configData.eleventy.env.source === "cli") {
      return "I am on the command line";
   }
   console.log(configData);

   return "I am running programmatically via a script";
};
