/* THIS FILTER IS UNTESTED - 8/22/23 */

const moment = require("moment");

function dateFilter(value) {
   const dateObject = moment(value);
   return `${dateObject.format("Do")} of ${dateObject.format("MMMM YYYY")}`;
}

module.exports = function (eleventyConfig) {
   eleventyConfig.addFilter("dateFilter", dateFilter);
};
