---
title: Cyber Admitted
url: https://cyberadmitted-demo.earlman.me
customScreenshot: ./images/cyber-admitted-screenshot.png
urlGithub: https://github.com/foundations-design/BDI-Global-LLC/tree/main/packages/quotes-specialty-cyber
urlGithubPrivate: true
repo:
  owner: foundations-design
  repo: bdi-global-llc
password: NETHER-rustle-flea
dateCompleted: ongoing
sort: 3
# tags: 
#   - featured
overview: "Developed a client portal for Cyber Admitted, facilitating the management of substantial monthly written insurance premiums. The project involved creating a secure authentication system with Vue and Firebase, and planning integrations with several other platforms."
---

# Cyber Admitted

Full-Stack Webapp Build

## Summary

Big Data Insure (BDI) was looking for a tool to help support the complicated process for underwriting cyber insurance. This has been developed over the course of the last 6 months. We're currently in the process of rolling this out internally (as an in-house tool for BDI).

## Features

- Allows brokers to calculate cyber insurance quotes
- Authentication system - Custom Vue components, fully integrated with Vuex & Vue-Router, adhering to my understanding of best-practices
- [{% indieAvatar "https://router.vuejs.org" %}Vuex Route Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html) - Uses firebase rules to limit user queries
- Analytics - Uses [{% indieAvatar "https://www.amcharts.com/" %}amCharts](https://www.amcharts.com/) and Vuex getters to process quotes data
- Airtable Integration - This is the tool BDI uses to calculate & log their quotes. We leverage Airtable's API to calculate rates using data from our app. It's a temporary solution while we test the tool internally, since we're eventually going to run into Airtable's Rate Limits. An intermediate solution we have available is to use use [{% indieAvatar "https://docs.netlify.com" %}Netlify Functions](https://docs.netlify.com/functions/overview/) as a (serverless) rate-limiter to avoid hitting the limits from Airtable.

## Tech

- Vue, Vue Router, Vuex
- [{% indieAvatar "https://buefy.org/" %}Buefy](https://buefy.org/) - Vue components based on Bulma
- Firebase - Database & Authentication
- [{% indieAvatar "https://www.netlify.com/" %}Netlify]({% indieAvatar "https://www.netlify.com/" %})
- [{% indieAvatar "https://www.amcharts.com/" %}amCharts](https://www.amcharts.com/)
- [{% indieAvatar "https://github.com/" %}ShipwrightCSS](https://github.com/foundations-design/shipwright) - My personal CSS/SASS methodology

---

My work with Big Data Insure, LLC consisted of several different projects that culminated in the development of Cyber Admitted, an internal quoting tool built in Vue that integrated BDI's proprietary quoting algorithm. It used Airtable as a database and featured a live dashboard, custom business logic, Firebase Authentication, and Vuex state management.

### Systems Design

At the beginning of my work here, BDI already had many automations in place. They used [CognitoForms](https://www.cognitoforms.com/) and its [Document Merging](https://www.cognitoforms.com/support/5/document-merging) feature to collect data and generate quotes to send out to users. They were also using [Airtable](https://www.airtable.com/) to track data and build out dashboards for internal use. Generally, they were looking to improve on these systems and build out something more user-friendly.

From 2020-2021, we worked on several POCs to improve the general workflow between BDI and their clients. They had many ideas they wanted to try including white-labelled websites to let their biggest clients submit data, an internal dashboard to track their "Total Written Premiums", and a tool to help them with generating quoting.  

The process they used for underwriting insurance was a complicated one. It involved many back and forth emails between the brokers (BDI's clients) and BDI. There was a lot of information that had to be exchanged, and there wasn't an organized system to keep track of it all. 

We were looking to improve on that process in several ways.  Ambitiously, in the fall of 2021, we set out to build out a web app that could:
1) Allow insurance brokers to submit information on their customers and receive realtime quotes based using BDI's underwriting algorithm. (They wanted to be able to modify this algorithm without making changes to the codebase)
2) Give administrators the ability to track their clients' information and make manual changes upon request
3) Allow brokers to see their data
4) Integrate the dashboard we had previously built as POC

This is an illustration of the business logic that needed to be integrated into the app.
{% image "src/client-work/images/screenshot-2023-07-27-at-3.38.04-am.png"  ""%}

We wanted to keep the development work as streamlined as possible. There was a competing project at BDI working another vendor to build out a more traditional solution using SQL databases and PHP frontends. It was clear to me, though, that a faster solution could be built at a fraction of the cost.

We decided to build the app with Vue, using Google Firebase as a backend and Netlify as our hosting service. BDI had implemented their quoting algorithm in Airtable using Airtable formulas and we could use that as an API to avoid exposing the algorithm on the frontend. 

*You might be wondering at this point why somebody with no experience expected they could take on a project this enormous as the only developer. I'm wondering too.*

## Development

At this point, I had learned from several projects with BDI that was all to easy to let things fall through the cracks and lose all momentum, so project management was a top priority for me. 

Unfortunately, the work fizzled out near the end of 2022 due to culture differences. I wasn't able to keep up with the pace of development work that would be needed to maintain their webapp and they were working with many other parties on similar projects and weren't able to give Cyber Admitted the attention it needed. 

---

## Additional Info - Major Refactoring Sprint

The code on this app was a mess and I was looking to better understand the data flows within the app. This motivated an in-depth audit of every component and the data flows between them and the Vuex data store. I don't expect to do this with many work, but it seemed was important in this case—both for my education and to ensure we can implement the upcoming features without further tangling up the code. Some obvious problems I was aware of prior:

- The entire Firebase database was being loaded into the state every time the app was loaded. It was used as a shortcut to streamline the initial development and give us some time to better understand our needs on the backend (but still l-o-l).
- We lacked clarity on when to pull data from the store or pass it in via props.
- There was no clear way to manage user-specific data.

The process basically involved going through each component and taking a look at:

1. How it's communicating with the store
2. What it's Parent & Child components are
3. What logic it's implementing

It took about a week to do this. This provided insight not only on where refactors should be made, but how to best move forward with new features. Here's a short list of the refactoring work that was done:

- Implement [{% indieAvatar "https://github.com/" %}Vuex naming conventions](https://github.com/vuestorefront/vue-storefront/issues/2069)
- Remove unnecessary data calls
- Standardize how/which components access the Vuex store
- Ensure data is loaded prior to loading views (or load a skeleton component instead)
- Build strategy to securily access data from Firebase
  - Add [{% indieAvatar "https://firebase.google.com/" %}Security Rules](https://firebase.google.com/docs/rules)
- Fix outstanding bugs

Although the app and development experience _feels_ notably better, I don't currently have decent metrics for the changes. This is something I'll definitely consider when doing refactors in the future.

We were also looking to split up the store into submodules, to make further development easier—however, we were running short on time and I realized that that refactor didn't block the development of other features. It was moved to a later date.
