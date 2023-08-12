// Usage:
// - {% indieAvatar "https://github.com/" %}
// - Markdown: [{% indieAvatar "https://github.com/" %}Vuex naming conventions](https://github.com/vuestorefront/vue-storefront/issues/2069)
// - {% techAvatar item.url %}

// https://github.com/11ty/api-indieweb-avatar
//github.com/zachleat/zachleat.com/blob/f9c0c9b7f5159e8e0204e956a8dcc68401a0a384/_includes/imageAvatarPlugin.js

module.exports = function (eleventyConfig) {
   eleventyConfig.addShortcode("indieAvatar", function indieAvatarHtml(url = "", classes = "z-avatar") {
      let screenshotUrl = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(url)}/`;
      return `<img alt="IndieWeb Avatar for ${url}" class="${classes}" loading="lazy" decoding="async" 
      style="width: 1rem;height: 1rem;border-radius: 15%;vertical-align: baseline;	margin: 0 .25em; display: inline;"
      src="${screenshotUrl}" width="60" height="60">`;
   });

   eleventyConfig.addShortcode("techAvatar", function indieAvatarHtml(url = "", classes = "t-avatar") {
      let screenshotUrl = `https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(url)}/`;
      return `<img alt="IndieWeb Avatar for ${url}" class="${classes}"loading="lazy" decoding="async" 
      src="${screenshotUrl}" width="50" height="50">`;
   });
};
