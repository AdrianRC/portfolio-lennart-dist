<template>
  <Layout>
    <div
      class="w-full text-2xl leading-normal text-dark md:text-3xl lg:text-4xl lg:leading-snug"
      v-html="headline"
    ></div>
    <projects :projects="$page.project.edges" />
    <action-call to="about/">
      <template v-slot:heading>
        <div v-html="ctaDesc"></div>
      </template>
      <template v-slot:button-text>
        {{ callToAction.button_text }}
      </template>
    </action-call>
  </Layout>
</template>

<page-query>
query {
  project: allStoryblokEntry(sortBy: "first_published_at", order: ASC, filter: { full_slug: { regex: "^(?!de\/|homepage|about|contact|imprint).*" }}) {
    edges {
      node {
        content
        full_slug
      }
    }
  }
  homepage: storyblokEntry(id: "story-12877914-default") {
    content
  }
}
</page-query>

<script>
import Projects from "~/components/Projects.vue";
import ActionCall from "~/components/ActionCall.vue";

export default {
  metaInfo() {
    return {
      meta: [
        {
          key: "description",
          name: "description",
          content: this.headline,
        },
      ],
      titleTemplate: "Lennart Basler",
    };
  },
  components: {
    Projects,
    ActionCall,
  },
  computed: {
    content() {
      return this.$page.homepage.content;
    },
    headline() {
      return this.content.headline
        ? this.$storyapi.richTextResolver.render(this.content.headline)
        : "";
    },
    callToAction() {
      return this.content.call_to_action[0];
    },
    ctaDesc() {
      return this.callToAction.description
        ? this.$storyapi.richTextResolver.render(this.callToAction.description)
        : "";
    },
  },
};
</script>
