---
url: https://quotes.specialtycyber.com/
url-github: https://github.com/foundations-design/BDI-Global-LLC/tree/main/packages/quotes-specialty-cyber
url-github-private: true
password: NETHER-rustle-flea
date-completed: ongoing
---

# Cyber Admitted
Full-Stack Webapp Build

## Summary
Big Data Insure (BDI) was looking for a tool to help support the complicated process for underwriting cyber insurance. This has been developed over the course of the last 6 months. We're currently in the process of rolling this out internally (as an in-house tool for BDI).

## Features
- Allows brokers to calculate cyber insurance quotes
- Authentication system 
	- Custom Vue components, fully integrated with Vuex & Vue-Router, adhering to my understanding of best-practices 
	- [Vuex Route Guards](https://router.vuejs.org/guide/advanced/navigation-guards.html)
	- Uses firebase rules to limit user queries
- Analytics - 
- Airtable Integration - This is the tool BDI uses to calculate & log their quotes. We leverage Airtable's API to calculate rates using data from our app. It's a temporary solution while we test the tool internally, since we're eventually going to run into Airtable's Rate Limits. An intermediate solution we have available is to use use [Netlify Functions](https://docs.netlify.com/functions/overview/) as a (serverless) rate-limiter to avoid hitting the limits from Airtable. 

## Tech & Dependencies
### Major
- Vue, Vue Router, Vuex
- [Buefy](https://buefy.org/) - Vue components based on Bulma
- Firebase - Database & Authentication

### Minor
-  [Shipwright CSS](https://github.com/foundations-design/shipwright) - My personal CSS/SASS methodology


## Additional Info - Major Refactoring Sprint
The code on this app was a mess and I was looking to better understand the data flows within the app. This motivated an in-depth audit of every component and the data flows between them and the Vuex data store. I don't expect to do this with many projects, but this seemed like something that was important to do for my own education. Some obvious problems I was aware of prior:

- The entire Firebase database was being loaded into the state every time the app was loaded. It was used as a shortcut to streamline the initial development and give us some time to better understand our needs on the backend (but still l-o-l).
- We lacked clarity on when to pull data from the store or pass it in via props.
- There was no clear way to manage user-specific data.

It's not worth going into too much detail right now of the process I went through, but I'll share some pictures.

==Insert Pictures of Audit Process==

It took about a week, and provided insight on how to best move forward with new features. A lot of the work we decided to do in the refactor is included in the images above, but here's a short list:

- 

Although the app and development experience *feels* notably better, I don't currently have decent metrics for the changes. This is something I'll definitely consider when doing refactors in the future. 

We were also looking to split up the store into submodules, to make further development easier—however, we were running short on time and I realized that that refactor didn't block the development of other features. It was moved to a later date.