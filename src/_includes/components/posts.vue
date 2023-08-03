<template>
  <div id="posts">
    <div v-for="(link, i) in links" :key="i">
      <a :href="link.url" target="_blank">
        {{ link.title }}
      </a>
      <ul class="tags">
        <li v-for="(tag, j) in link.tags" :key="j">
          {{ tag }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "Welcome to Vue!",
      links: [
        {
          title: "Small Wins: A Seamless Bug Fix",
          url: "https://hashnode.com/post/small-wins-a-seamless-bug-fix-cl0cx6kg700dhm9nv3lo9h5he",
          tags: ["Vuejs", "Buefy"],
        },
        {
          title: "Playing with Pixelsorting",
          url: "https://www.reddit.com/r/pixelsorting/comments/t916f8/something_a_bit_different/",
        },
        {
          title: "Building a Reader for Tao Te Ching",
          url: "https://www.reddit.com/r/taoism/comments/fs3dji/hi_im_a_web_designer_with_a_lot_of_interest_in/",
        },
        {
          title: "Found a CSS Grid Bug in Firefox (and the Solution, Too)",
          url: "https://www.reddit.com/r/webdev/comments/d3anf0/has_anybody_seen_this_bug_before/",
        },
        {
          title:
            "Had a WordPress Project and Wanted to Get Some Critiques on My Development Workflow",
          url: "https://www.reddit.com/r/webdev/comments/azb02n/critiques_on_my_wordpress_development_workflow/",
        },
      ],
    };
  },
  methods: {
    doSomething() {
      alert("Hello!");
    },
  },
};
</script>

<style>
#posts {
  --space-md: 1.5rem;
}

#posts .tags {
  display: flex;
  gap: var(--space-md);
}

#posts li {
  text-decoration: none;
}
</style>
