module.exports = function (data) {
   return {
      permalink: "work/bdi/",
      title: "BDI Global LLC",
      url: "https://cyberadmitted-demo.earlman.me",
      urlGithub: "https://github.com/foundations-design/BDI-Global-LLC/tree/main/packages/quotes-specialty-cyber",
      urlGithubPrivate: true,
      repo: {
         owner: "foundations-design",
         repo: "bdi-global-llc",
      },
      password: "NETHER-rustle-flea",
      dateCompleted: "March 2022",
      dateStarted: "August 2019",
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
         {
            name: "Vue, Vue Router, Vuex",
            url: "https://v2.vuejs.org/v2/guide/",
         },
         {
            name: "Buefy",
            url: "https://buefy.org/",
         },
         {
            name: "Firebase Database",
            url: "https://firebase.google.com/docs/database",
         },
         {
            name: "Firebase Authentication",
            url: "https://firebase.google.com/docs/auth",
         },
         {
            name: "Netlify",
            url: "https://www.netlify.com/",
         },
         {
            name: "amCharts",
            url: "https://www.amcharts.com/",
         },
         {
            name: "ShipwrightCSS",
            url: "https://github.com/foundations-design/shipwright",
         },
      ],
      tasks: [
         "Developed a client portal for BDI Global, LLC, to support management of over $400,000 in monthly written insurance premiums",
         "Planned and built integrations with Google Firebase, Airtable, Zapier, Cognitoforms, & Flipsnack",
         "Completed over 500 hours of work for the company over the course of 3 years, including dashboards creation, online forms, and database infrastructure design",
         "Helped serve 75+ regular users, brokers and clients of BDI Global",
         "Created authentication system with Vue using Firebase",
      ],
   };
};
