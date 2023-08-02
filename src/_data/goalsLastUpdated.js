const { Octokit } = require("@octokit/rest");

const octokit = new Octokit();

async function getLastUpdatedDate(owner, repo, filePath) {
   try {
      const { data: commits } = await octokit.repos.listCommits({
         owner,
         repo,
         path: filePath,
         per_page: 1,
      });

      if (commits.length > 0) {
         return commits[0].commit.committer.date;
      }
   } catch (error) {
      console.error(error);
   }

   return null;
}

function reformatDate(dateString) {
   const date = new Date(dateString);
   const options = { year: "numeric", month: "long", day: "numeric" };
   return date.toLocaleDateString("en-US", options);
}

const owner = "earlman";
const repo = "me-dev";
const filePath = "src/_includes/components/career-goals.md";

module.exports = async function () {
   return process.env.DevEnv
      ? await getLastUpdatedDate(owner, repo, filePath).then((r) => {
           return process.env.DevEnv;
        })
      : "This is a Developer Environment";
};

// module.exports = {
//    eleventyComputed: {
//       githubData: async ({ repo }) => await getGithubData(repo),

//       test: "response",
//       // githubData: async (data) => await getLastUpdatedDate("earlman", "me-dev", "src/_includes/components/career-goals.md"),
//       //  .then((lastUpdatedDate) => {
//       //     if (lastUpdatedDate) {
//       //        console.log(`✅The last update date for the file is: ${lastUpdatedDate}`);
//       //     } else {
//       //        console.log("❌Failed to retrieve the last update date.");
//       //     }
//       //  }),
//    },
// };
