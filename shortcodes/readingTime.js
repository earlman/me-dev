// Usage:
// {% readingTime page %}

// If there's less than 100 words, set reading time to 2 minutes

module.exports = function (eleventyConfig) {
   eleventyConfig.addShortcode("readingTime", function (content) {
      function countWordsOnPage() {
         const bodyText = content;
         const words = bodyText.split(/\s+/).filter((word) => word.length > 0);
         return words.length;
      }

      function calculateReadingTime(wordCount) {
         const wordsPerMinute = 150;
         return Math.ceil(wordCount / wordsPerMinute);
      }

      function countImagesOnPage() {
         return "";
         // return document.querySelectorAll("img").length;
      }

      if (content) {
         const wordCount = countWordsOnPage();
         const readingTime = calculateReadingTime(wordCount);
         const imageCount = countImagesOnPage();

         return `reading time: ${readingTime} min <wbr/>(${wordCount} words & ${imageCount} images)`;
      } else {
         return `reading time: 2 min`;
      }

      // if (readingTimeElement) {
      //    readingTimeElement.innerHTML = `reading time: ${readingTime} min <wbr/>(${wordCount} words & ${imageCount} images)`;
      // } else {
      //    console.error("Element with ID 'reading-time' not found!");

      // }

      // console.log(countWordsOnPage());
      // // Count the number of image tags
      // const imageCount = (content.match(/<img /g) || []).length;

      // // Count the number of words in the content
      // const text = content.replace(/<[^>]*>/g, ""); // Strip HTML tags
      // const wordCount = text.split(/\s+/).filter(Boolean).length; // Split by whitespace and filter out empty strings

      // return `This page has ${imageCount} images and ${wordCount} words.`;
   });
};
