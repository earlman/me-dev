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

TLDR
{% image "src/client-work/images/20230726215152.png" "" %}


## Research
```on-research
For the type of work that I do, research works a little bit differently than in normal web design. While UI/UX research focuses on the end user, the things I build primarily focus on the client (keeping the user in mind, of course). 

I focus on building systems that make it *easier* for my client to achieve *their goals*. After all, my client understands their users better than I do. My job is to make my client's work as easy as possible.
```

On this project, Hubspot already generated and built the reports that were sent out to the company. This is great. Some clients haven't delivered a final product yet, so there's nothing to iterate on. Not in this case.


```caption
This was my starting point:
```

{% image "src/client-work/images/Slide 16_9 - 13.png" ""%}
{% image "src/client-work/images/Slide 16_9 - 14.png"  ""%}

I've been starting to see a lot of beautiful reports in the last couple years, so I started compiling those for inspiration, too.


%%3 images in a row%%
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.11.07 PM.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.15.37 PM.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.40.53 PM.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.40.18 PM.png"  ""%}
{% image "src/client-work/images/Screenshot 2023-07-26 at 9.40.38 PM.png"  ""%}


Since Hubspot has generated reports in the past, it meant that there were already processes in place to get the job done. They weren't articulated, though (which is common for fast-moving teams), so the first step of the work was to figure what those processes were.

I don't like working on things that never get published, so it was important that my work fit into the work that people were already doing. I spent the first couple weeks talking to everybody involved in the reports. These are the types of questions I asked:
- How are you coming up with the content? How far before the due date?
- Who are these reports being sent to? Have you received any feedback so far?
- What tools are you using?
- Are there any assets that already exist that would be helpful for this project?
- How can I write code that fits into your work without breaking anything?

These are generalized versions, but he details really do matter here. One oversite—a broken plugin, for example—can derail an entire project.

## Systems Design

```caption
An early concept of what their design system might look 
```
{% image "src/client-work/images/Screenshot 2023-07-26 at 8.57.32 PM.png"  ""%}

In the design process, I took a step back from all the process-stuff to look for a visual identity for the reports. This would be the start of a small "Design System" that I knew would be necessary. Hubspot wanted to be able to use my work to continuously generate new reports, not yet knowing what the content will be. Thankfully, I had access to all the UI/UX assets created by Hubspot's amazing design team, as well as their documentation. I'm still working on improving my visual design skills, so this info was invaluable for both the project and my career.

A lot of this work in this phase was about managing expectations. Again, I wanted my work to continue to be useful after I left. If I show everybody stellar designs without considering how I would build them, I could easily get to the end of my contract without leaving anything useful for the team. This is a mistake I've made before, and one I'm trying to avoid.

The folks on this particular project really loved seeing regular design deliverables, so that was something I had to be sympathetic of, knowing that things would slow way down when it came to coding them. 

I managed this by really spreading out the design phase and giving the team a look into every aspect of the process. This gave me extra time to set up the codebase and start iterating on the code as the report was being designed.

### Technical Specifics
- The HTML version of the reports were built in R-Markdown, using [RStudio](https://posit.co/download/rstudio-desktop/). I haven't used R at that point, but I didn't expect it to be a problem. It wasn't.
- Some cover pages were designed with [Canva](https://www.canva.com/)
- [WKhtmltopdf](https://wkhtmltopdf.org/) was used to generate the final PDFs from HTML. This uses a browser version from 2012, which would make it near impossible to build "enterprise-level" designs. 
- Data came from Snowflake, which I didn't have to touch. The team provided me an alternate build script to generate the reports using a CSV.

## Visual Design
Getting to the actual aesthetics of the report was a fluid process. It involved taking a look of all the reports that have been generated in the past and finding the common patterns. We started with design language from the existing Hubspot assets and considered how they could be recycled for our purposes

### Notes on My Approach
One way I could have done this was to *focus on making the perfect design for one report and iterate from there*. That was the initial suggestion and a common practice in software development, but there are some problems doing it this way:

1) This was an old report, so that particular design wouldn't even be used directly.
2) My manager was hoping to get that design approved by other stakeholders, so it could set false expectations
3) Building reusable CSS requires deep understanding of the *various states* of a product, something this approach didn't deliver

This would be like buying the paint & building the furniture without knowing the shape of the house—harmless, but inefficient. 

Rather than getting into the design details too early, I started by identifying the page and layout templates we would need. From there I moved on to the basic design elements (color, spacing, typography), *then* delivered a full design of the report. 

{% image "src/client-work/images/Slide 16_9 - 11.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 16.png"  ""%}
{% image "src/client-work/images/Slide 16_9 - 38.png"  ""%}


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




## Turn Over


Special thanks to [Matthew Corritore](https://www.linkedin.com/in/matthewcorritore/), [Rita Seabrook](https://www.linkedin.com/in/ritaseabrook/) , and [Yuan Hou](https://www.linkedin.com/in/yuan-hou-phd-he-him-54197514/)
for the support in all of this work.

%% How did I go above and beyond> %%