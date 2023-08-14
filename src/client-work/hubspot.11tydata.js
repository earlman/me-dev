module.exports = function (data) {
   return {
      permalink: "work/hubspot/",
      tech: [
         {
            name: "R-Markdown",
            url: "https://rmarkdown.rstudio.com/",
         },
         {
            name: "Puppeteer",
            url: "https://pptr.dev/",
         },
      ],
      tasks: [
         "Redesigned PDF reports to improve consistency, accessibility, and overall aesthetics",
         "Built reports with semantic HTML and the latest CSS features such as native nesting, container queries, & parent selectors",
         "Updated & simplified the report building process using Puppeteer: 1) An R-Markdown template is built into 1,042 HTML files using user data and CSS stylesheets 2) The HTML files are each processed into PDF files using a NodeJS script",
         "Developed a flexible small-scale design system to allow the redesigned markdown templates to be applied to future reports.",
      ],
      title: "Hubspot",
      overview:
         "Redesigned and improved the PDF reporting system at HubSpot through the use of modern CSS features and semantic HTML. This involved the creation of an efficient report building process with Puppeteer, enabling a smooth conversion of a large volume of HTML files into PDFs.",
      sort: 1,
      layout: "layouts/work-item.njk",
      tags: ["featured"],
      dateCompleted: "Jun 2023",
      dateStarted: "Apr 2023",
   };
};
