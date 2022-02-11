const { Octokit } = require("@octokit/core");

// Gets Github language data from api
// Requires frontmatter to be set:
// - repo.repo
// - repo.owner
async function getGithubData(frontmatterInput) {
   const octokit = new Octokit({ auth: process.env.GITHUB_KEY });

   if (!frontmatterInput) {
      return null;
   }

   return octokit
      .request("GET /repos/{owner}/{repo}/languages", {
         owner: frontmatterInput.owner,
         repo: frontmatterInput.repo,
      })
      .then((r) => {
         return JSON.stringify(r.data);
      });
}

module.exports = {
   eleventyComputed: {
      githubData: async ({ repo }) => await getGithubData(repo),
   },
   layout: "layouts/work.njk",
   tags: "project",
};
