module.exports = function (data) {
   return {
      permalink: "work/metal/",
      title: "Metal Law Group",
      url: "https://mlg.foundations.design",
      urlGithub: "https://github.com/earlman/Metal-Law-Group-Redesign",
      repo: {
         owner: "earlman",
         repo: "metal-law-group-redesign",
      },
      sort: 5,
      overview:
         "Metal Law Group was looking to redesign their website. It was slow, and out-of-style. I redesigned their site and used their using their existing content to build it out. The partners of the law firm disbanded in early 2021, so I'm self-hosting this site for my portfolio.",
      dateStarted: "Feb 2019",
      dateCompleted: "Apr 2020",
      content: {
         title: "Metal Law Group",
         subTitle: "Website Frontend Redesign",
         summary: "",
         features: [
            "Uses their existing Wordpress site as a REST API backend (headless CMS, if you like, to rebuild website as a static site",
            "Allowed for the updating of Employees list via Wordpress Admin interface",
            "Modern & unique design",
         ],
         tech: [
            {
               name: "Gridsome",
               url: "https://gridsome.org/",
            },
         ],
      },
      tasks: [
         "Redesigned & rebuilt existing website for a modern look and improved performance",
         "Utilized old Wordpress site as a REST API backend to rebuild website as a static site",
      ],
   };
};
