---
title: Cyber Admitted
url: https://deploy-preview-39--bdi-quote-tool.netlify.app/
urlGithub: https://github.com/foundations-design/BDI-Global-LLC/tree/main/packages/quotes-specialty-cyber
urlGithubPrivate: true
repo:
  owner: foundations-design
  repo: bdi-global-llc
password: NETHER-rustle-flea
date-completed: ongoing
tags:
  - featured
---

# Cyber Admitted

Full-Stack Webapp Build

## Summary

Big Data Insure (BDI) was looking for a tool to help support the complicated process for underwriting cyber insurance. This has been developed over the course of the last 6 months. We're currently in the process of rolling this out internally (as an in-house tool for BDI).

## Features

- Allows brokers to calculate cyber insurance quotes
- Authentication system - Custom Vue components, fully integrated with Vuex & Vue-Router, adhering to my understanding of best-practices
- [Vuex Route Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html) - Uses firebase rules to limit user queries
- Analytics - Uses [amCharts](https://www.amcharts.com/) and Vuex getters to process quotes data
- Airtable Integration - This is the tool BDI uses to calculate & log their quotes. We leverage Airtable's API to calculate rates using data from our app. It's a temporary solution while we test the tool internally, since we're eventually going to run into Airtable's Rate Limits. An intermediate solution we have available is to use use [Netlify Functions](https://docs.netlify.com/functions/overview/) as a (serverless) rate-limiter to avoid hitting the limits from Airtable.

## Tech

- Vue, Vue Router, Vuex
- [Buefy](https://buefy.org/) - Vue components based on Bulma
- Firebase - Database & Authentication
- Netlify
- [amCharts](https://www.amcharts.com/)
- [ShipwrightCSS](https://github.com/foundations-design/shipwright) - My personal CSS/SASS methodology

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

- Implement [Vuex naming conventions](https://github.com/vuestorefront/vue-storefront/issues/2069)
- Remove unnecessary data calls
- Standardize how/which components access the Vuex store
- Ensure data is loaded prior to loading views (or load a skeleton component instead)
- Build strategy to securily access data from Firebase
  - Add [Security Rules](https://firebase.google.com/docs/rules)
- Fix outstanding bugs

Although the app and development experience _feels_ notably better, I don't currently have decent metrics for the changes. This is something I'll definitely consider when doing refactors in the future.

We were also looking to split up the store into submodules, to make further development easier—however, we were running short on time and I realized that that refactor didn't block the development of other features. It was moved to a later date.
