## Systems Design

At the beginning of my work here, BDI already had many automations in place. They used [CognitoForms](https://www.cognitoforms.com/) and its [Document Merging](https://www.cognitoforms.com/support/5/document-merging) feature to collect data and generate quotes to send out to users. They were using [Airtable](https://www.airtable.com/) to track data and build out dashboards for internal use. Generally, they hired me to help improve these systems and build out something more user-friendly.

<div class="image_group" style="height: 400px; overflow:hidden;">
<figcaption>Some of the early POCs</figcaption>
{% image "src/client-work/images/img1.png"  ""%}
{% image "src/client-work/images/img6.png"  ""%}
</div>

From 2020-2021, we worked on several POCs to improve the general workflow between BDI and their clients. They had many ideas they wanted to try including white-labelled websites to let their biggest clients submit data quickly, an internal dashboard to track their "Total Written Premiums", and a tool to help them calculate and provide quotes.

The process they used for underwriting insurance was a complicated one. It involved many back and forth emails between the brokers (BDI's clients) and BDI. There was a lot of information that had to be exchanged, and there wasn't an organized system to keep track of it all. 

We were looking to improve on that process in several ways.  Ambitiously, in the fall of 2021, we set out to build out a web app that could:
1) Allow insurance brokers to submit information on their customers and receive realtime quotes based using BDI's underwriting algorithm. (They wanted to be able to modify this algorithm without making changes to the codebase)
2) Give administrators the ability to track their clients' information and make manual changes upon request
3) Allow brokers to see their data
4) Integrate the dashboard we had previously built as POC

<figcaption>
This is an illustration of the business logic that was to be integrated into the app.
</figcaption>
<div style="max-width: 900px">
{% image "src/client-work/images/screenshot-2023-07-27-at-3.38.04-am.png"  ""%}
</div>

We wanted to keep the development work as streamlined as possible. There was a competing project at BDI working another vendor to build out a more traditional solution using SQL databases and PHP frontends. It was clear to me, though, that a faster solution could be built at a fraction of the cost.

We decided to build the app with Vue, using Google Firebase as a backend and Netlify as our hosting service. BDI had already implemented their quoting algorithm in Airtable using Airtable formulas, which we could use that as an API. This would let us avoid exposing the proprietary algorithm on the frontend. 

## Development

BDI put together some wireframes at the beginning to guide the project. They didn't want to spend any resources on design work for this project, so we chose to use a Vue component library called [Buefy](https://buefy.org/)

<div class="image_group" style="max-height:600px; overflow:hidden;">
{% image "src/client-work/images/Screenshot 2023-07-28 at 1.24.34 AM 1.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-28 at 11.15.55 PM.png"  ""%}
</div>

At this point, I had learned from several projects that it was all to easy to let things fall through the cracks and lose momentum, so project management was a top priority for me. BDI had some concerns that these projects weren't delivering on expectations. I thought that this was a communication issue and not because of the work itself, so my colleague and I committed to biweekly meetings and I compiled biweekly progress reports to keep everybody on the same page.

While I was making these reports I was starting to notice how much we were getting distracted by different third party software, so I opted to create these reports as an HTML document and host them online. It wasn't the easiest format to work with, but it kept me focused and was maximally flexible.

<div class="image_group">
{% image "src/client-work/images/Screenshot 2023-07-28 at 1.52.23 AM.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-28 at 1.53.31 AM.png"  ""%}
</div>


One interesting aspect of the project was setting up rules on the Firebase backend. This is something that's become much easier in recent years, allowing people to build full-fledged applications without the overhead and rigidity of setting up a server and building an API on top of it. A lot of older industries work with that type of legacy set up and just eat the cost. I didn't see any reason to go down that route.

<div style="max-width:800px">
<figcaption>Example of the Firebase rules</figcaption>
{% image "src/client-work/images/img4.png"  ""%}
</div>

The plan we laid out at the beginning of the project was a strong foundation and got us through 7 months of steady work building out the project. We completed all the features we were trying to build and everything was working very smoothly. We were pulling the data from both Firebase and Airtable, processing them using the user's local storage and got the complicated business logic to work seamlessly.

If you'd like to see the demo, shoot me a message on LinkedIn. Otherwise, here's some screenshots.

<div class="image_group scroll">
{% image "src/client-work/images/sc1.png"  ""%}
{% image "src/client-work/images/sc2.png"  ""%}
{% image "src/client-work/images/sc3.png"  ""%}
{% image "src/client-work/images/sc4.png"  ""%}
{% image "src/client-work/images/sc5.png"  ""%}
</div>

Unfortunately, the product never widely used. We had over 200 regular users on one of the previous POCs that we had built, but didn't have a plan in place to get them moved over. I was also starting to get burned out between BDI and my other clients at the time.

The work fizzled out near the end of 2021. I wasn't able to keep up with the pace of development that would be needed to maintain their web apps and they were working on many concurrent projects and weren't able to give Specialty Cyber the attention it needed. Definitely happy to have this experience, though. BDI played a huge role in giving me the confidence that I could build a career in this industry and I'm immensely grateful for that. 

---

For those curious, these are screenshots from Cyber Admitted, which  had over 200 users. It was still using an embedded CognitoForm to grab the user data. It was a headache to manage on the backend, but definitely didn't seem to detract from the users' experience.

<div class="image_group" style="max-height:800px;">
{% image "src/client-work/images/ca1.png"  ""%}
{% image "src/client-work/images/ca2.png"  ""%}
{% image "src/client-work/images/ca3.png"  ""%}
{% image "src/client-work/images/ca4.png"  ""%}
</div>

---
