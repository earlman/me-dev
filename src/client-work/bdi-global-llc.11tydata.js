module.exports = function (data) {
   return {
      permalink: "/bdi",
      title: "BDI Global LLC",
      url: "https://cyberadmitted-demo.earlman.me",
      customScreenshot: "./images/cyber-admitted-screenshot.png",
      urlGithub: "https://github.com/foundations-design/BDI-Global-LLC/tree/main/packages/quotes-specialty-cyber",
      urlGithubPrivate: true,
      repo: {
         owner: "foundations-design",
         repo: "bdi-global-llc",
      },
      password: "NETHER-rustle-flea",
      dateCompleted: "Mar 2022",
      dateStarted: "Aug 2019",
      sort: 2,
      tags: ["featured"],
      overview:
         "My work with Big Data Insure, LLC consisted of several different projects that culminated in the development of Cyber Admitted, an internal quoting tool built in Vue that integrated facilitated the management of their cyber insurance product. It implemented BDI's proprietary quoting algorithm and featured a live dashboard, custom business logic, Firebase Authentication, and Vuex state management.",
      tagline: "Full-Stack Webapp Build",
      features: [
         "Allows brokers to calculate cyber insurance quotes",
         "Authentication system - Custom Vue components, fully integrated with Vuex & Vue-Router, adhering to my understanding of best-practices",
         "Vuex Route Guards - Uses firebase rules to limit user queries",
         "Analytics - Uses amCharts and Vuex getters to process quotes data",
         "Airtable Integration - This is the tool BDI uses to calculate & log their quotes. We leverage Airtable's API to calculate rates using data from our app. It's a temporary solution while we test the tool internally, since we're eventually going to run into Airtable's Rate Limits. An intermediate solution we have available is to use use Netlify Functions as a (serverless) rate-limiter to avoid hitting the limits from Airtable.",
      ],
      tech: [
         "Vue, Vue Router, Vuex",
         {
            indieAvatar: "https://buefy.org/",
            name: "Buefy",
            url: "https://buefy.org/",
         },
         "Firebase - Database & Authentication",
         {
            indieAvatar: "https://www.netlify.com/",
            name: "Netlify",
            url: "https://www.netlify.com/",
         },
         {
            indieAvatar: "https://www.amcharts.com/",
            name: "amCharts",
            url: "https://www.amcharts.com/",
         },
         {
            indieAvatar: "https://github.com/",
            name: "ShipwrightCSS",
            url: "https://github.com/foundations-design/shipwright",
         },
      ],
      tasks: [
         "Designed & deployed a client-facing website for a startup labor & employment firm, based in San Francisco",
         "Achieved 85+ Google Lighthouse scores, with a 97 accessibility score",
         "Implemented a markdown-based content management solution, stored on Github, with the ability to easily add an admin interface in the future",
         "Implemented internationalization to support Spanish speakers",
      ],
   };
};
