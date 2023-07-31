module.exports = function (eleventyConfig) {
   // Sort work by "sort" variable in frontmatter
   // Item moves to end if data.order is undefined
   eleventyConfig.addCollection("sortedWork", function (collectionApi) {
      return (
         collectionApi
            .getFilteredByGlob("src/client-work/*.md")
            // .filter((item) => { // removes "featured" items
            //    return !item.data?.tags?.includes("featured");
            // })
            .sort(function (a, b) {
               if (!a.data.sort) {
                  return 1;
               } else if (!b.data.sort) {
                  return -1;
               } else {
                  return a.data.sort - b.data.sort;
               }
            })
      );
   });

   eleventyConfig.addCollection("sortByPath", function (collectionApi) {
      return collectionApi.getAll().sort(function (a, b) {
         //return a.date - b.date; // sort by date - ascending
         // return b.date - a.date; // sort by date - descending
         return a.inputPath.localeCompare(b.inputPath); // sort by path - ascending
         //return b.inputPath.localeCompare(a.inputPath); // sort by path - descending
      });
   });
};
