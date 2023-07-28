---
title: Hubspot
overview: "Redesigned and improved the PDF reporting system at HubSpot through the use of contemporary CSS features and semantic HTML. This involved the creation of an efficient report building process with Puppeteer, enabling a smooth conversion of a large volume of HTML files into PDFs."
# url: https://cyberadmitted-demo.earlman.me
# customScreenshot: ./images/cyber-admitted-screenshot.png
# urlGithub: https://github.com/foundations-design/BDI-Global-LLC/tree/main/packages/quotes-specialty-cyber
# urlGithubPrivate: true
# repo:
  # owner: foundations-design
  # repo: bdi-global-llc
# password: NETHER-rustle-flea
# date-completed: ongoing
sort: 1
layout: layouts/work-item.njk
---

From the first interview, Hubspot had a goal in mind. Level up the aesthetics of their reports to compete with enterprise software.

<figcaption>TLDR</figcaption>
<div style="max-width: 800px">
{% image "src/client-work/images/20230726215152.png" "" %}
</div>

## Research
For the type of work that I do, research works a little bit differently than in normal web design. While UI/UX research focuses on the end user, the things I build primarily focus on the client (keeping the user in mind, of course). 

I focus on building systems that make it *easier* for my client to achieve *their goals*. After all, my client understands their users better than I do. My job is to make my client's work as easy as possible.

On this project, Hubspot already generated and built the reports that were sent out to the company. This is great. Some clients haven't delivered a final product yet, so there's nothing to iterate on. Not in this case.


<div class="image_group">
{% image "src/client-work/images/Slide 16_9 - 13.png" "" %}
{% image "src/client-work/images/Slide 16_9 - 14.png"  ""%}
<figcaption>This was the starting point—A report from the previous quarter</figcaption>
</div>

I've been starting to see a lot of beautiful reports in the last couple years, so I started compiling those for inspiration, too.

<div class="image_group">
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.11.07 PM.png"  "" "400px"%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.15.37 PM.png"  """400px"%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.40.53 PM.png"  """400px"%}
</div>
<div class="image_group">
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.40.18 PM.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.40.38 PM.png"  ""%}
</div>

Building on past work meant that there were already processes in place to get the job done. These weren't articulated, though, which is common for fast-moving teams. The first step of the work was to figure what those processes were.

I don't like working on things that never get published, so it's important that my work fits into the work that people are already doing. I spent much of the first couple weeks getting to know everybody involved in the reports. These are the types of questions I asked:
- How are you coming up with the content? How far before the due date? What does the brainstorming/ideation process look like?
- Who are these reports being sent to? Have you received any feedback so far?
- What tools are you using?
- Are there any assets that already exist that would be helpful for this project?
- How can I write code that fits into your work without breaking anything?

These are generalized versions, but details really do matter here. One oversite—a broken plugin, for example—can derail an entire project.

## Systems Design
<div class="image_group">
<div style="max-width: 800px">
{% image "src/client-work/images/Screenshot 2023-07-26 at 8.57.32 PM.png"  ""%}
</div>
<figcaption>An early concept of what their design system might look like. None of the people on this team has really worked with design systems or CSS packages before, so I was trying to figure out what they would need in terms of documentation.</figcaption>
</div>

A lot of this work in the Design Phase is about managing expectations, and I don't think this topic that is discussed enough in the world of frontend development. It's a topic of increasing importance as the "Designer/Developer" role becomes more prominent.

Here's the issue: I want my work to be useful after I leave, but the internet is so filled with beautiful UIs that designers are expected to crank out mockups quickly. A mockup of a webpage represents maybe 20% of the information/decision-making that's needed when properly implementing a new design, so if the team is particularly enthusiastic, they may keep asking for new design deliverables without budgeting the proper amount of time to build them. On top of that, coming up with beautiful designs and getting into the weeds of HTML/CSS architecture require totally different mindsets. Trying to do both every single day is a recipe for burnout.

**How does a mockup represent so little of the information?**
A web app (or PDF builder, in this case) is much closer to a piece of furniture than a magazine or painting. A poorly designed section of a chair or cabinet will bother you *every single day*. With a magazine, all you have to do is turn the page.

The folks on this project really loved seeing regular design deliverables, so that was something I wanted to be sympathetic of, but I didn't want to get to the end of my contract without leaving anything useful for the team. It's a mistake I've made before, and one I won't repeat again.

I managed this by breaking up and spreading out the design work as I was building the code. I tried to communicate the details of all the design decisions and considerations being made. It's a time-consuming process which stakeholders aren't always too interested in, but this gave me extra time to properly set up and iterate on the codebase where the designs would be implemented. 

### Technical Specifics
- The HTML version of the reports were built in R-Markdown, using [RStudio](https://posit.co/download/rstudio-desktop/). I haven't used R at that point, but I didn't expect it to be a problem. It wasn't.
- Some cover pages were designed with [Canva](https://www.canva.com/)
- [WKhtmltopdf](https://wkhtmltopdf.org/) was used to generate the final PDFs from HTML. This uses a browser version from 2012, which would make it near impossible to build "enterprise-level" designs. 
- Data came from Snowflake, which I didn't have to touch. The team provided me an alternate build script to generate the reports using a CSV.

## Visual Design
Working on the actual aesthetics of the report was a fluid process. Like I mentioned, I spread the work out and figured out the architecture of the code as I went along. This involved taking a look of all the reports that were generated in the past and finding the common patterns. 

Those patterns informed the components that would be needed, leading to wireframes. From there, I applied some of the design language of Hubspot's existing assets, along with the inspiration I gathered before to come up with some final mockups. 

**Before we get there, some comments on my approach:**

One way I could have done this was to *focus on making the perfect design for one report and iterate from there*. That was the initial suggestion and a common practice in software development, but there are some problems doing it this way:

1) This was an old report, so that particular design wouldn't even be used directly.
2) My manager was hoping to get that design approved by other stakeholders, so it could set false expectations
3) Building reusable CSS requires deep understanding of the *various states* of a product, something this approach didn't deliver

This would be like buying the paint & building the furniture without knowing the shape of the house—harmless, but inefficient. 

Rather than getting into the design details too early, I started by identifying the page and layout templates we would need. From there I moved on to the basic design elements (color, spacing, typography), *then* delivered a full design of the report. 

<div class="image_group scroll">
{% image "src/client-work/images/Slide 16_9 - 11.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 16.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 38.png"  ""%}
</div>
- - -
These were the final designs of that first report:
{% image "src/client-work/images/Slide 16_9 - 17.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 18.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 19.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 20.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 21.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 34.png"  ""%}


%%You can see an HTML version here.%%

## Development

I'm incredibly comfortable with HTML, CSS and Markdown, so the dev work on this project wasn't too difficult from a technical standpoint. Of course, there were still a couple challenges:

### 1) wkhtmltopdf is an *archaic* piece of software
This is something that really should have been addressed at the outset. What had ended up happening was I built the entire CSS codebase using the latest CSS features (custom properties, parent selectors, nesting) and threw the team into a slight panic when we realized the established software didn't support these features. The only way we could actually use these styles was if we opened the HTML reports on Chrome and manually clicked "Save to PDF". *There were 1,046 reports* 😬

I built a [Node.js](https://nodejs.org/en) script using [Puppeteer's PDF method](https://pptr.dev/#what-can-i-do) to generate the reports. My colleague told me it built all 1,046 reports on the first try. *Ridiculous, I know*

### 2) I didn't know R-Markdown
I graduated as a Chemical Engineering major, so my entire career was built on Youtube tutorials, good documentation, and the amazing open-source community. Now, especially with ChatGPT,  unfamiliar syntax isn't really a problem for me. It was easy enough to figure out how to apply the new styles to the already-existing R-Scripts, and I had friendly teammates willing to help if I had any questions.

- - -
Here's a general overview of how the codebase/Design System worked:
- A base layer of CSS was stored `/styles/`. This contained the following stylesheets where the meat of my work was done:
	- `/styles/utilities.css`
	- `/styles/reset.css`
	- `/styles/color.css`
	- `/styles/typography.css`
	- `/styles/spacing.css`
- `example_report.Rmd` contained all our content and linked the stylesheets
- `staging.R` was the script we used to compile the reports to HTML. (The PDF compiler didn't work that well).
	- Here we also set up themes for the R plots. CSS didn't work for those
- `/page.css` was a *blank stylesheet* the Design System provided. This would let the team add styles on top of the base layer. Because of how the CSS Cascade works, this means they could mess around with things and have the important styles neatly tucked away out of reach.

**The system could be applied by adding a CSS Class to the Markdown section. This allows the team to generate nice looking reports without even having to touch the CSS. It provided 4 layouts along with documentation to give some flexibility and the organized stylesheets made it easy to make broad adjustments to the whole report just by changing a single CSS custom property.**

- - -

Special thanks to [Matthew Corritore](https://www.linkedin.com/in/matthewcorritore/), [Rita Seabrook](https://www.linkedin.com/in/ritaseabrook/) , and [Yuan Hou](https://www.linkedin.com/in/yuan-hou-phd-he-him-54197514/) for the support in all of this work.