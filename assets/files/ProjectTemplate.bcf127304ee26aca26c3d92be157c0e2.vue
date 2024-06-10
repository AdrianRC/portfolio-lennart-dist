<template>
  <Layout :footer="false">
    <project
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
    />
    <template v-if="nextHeader">
      <g-link :to="$page.next.full_slug" class="ml-8">
        <hr class="mt-12 border-light md:mt-16 lg:mt-40" />
        <h3 class="py-6 text-base leading-normal text-mid md:pb-8 lg:pb-24">
          {{ language === "de" ? "Nächstes Projekt" : "Next project" }}
        </h3>
        <project_header cropped :blok="nextHeader" />
      </g-link>
    </template>
  </Layout>
</template>

<page-query>
query StoryblokEntry ($id: ID, $nextId: ID) {
  storyblokEntry (id: $id) {
    id
    full_slug
    content
  }
  next: storyblokEntry (id: $nextId) {
    id
    full_slug
    content
  }
}
</page-query>

<script>
import Project from "~/components/Project.vue";
export default {
  metaInfo() {
    return {
      title: this.story.content.body[0].title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.story.content.body[0].title
        }
      ]
    };
  },
  components: {
    Project
  },
  computed: {
    story() {
      return this.$page.storyblokEntry;
    },
    nextHeader() {
      if (!this.$page.next) return;
      return this.$page.next.content.body.find(
        blok => blok.component === "project_header"
      );
    },
    language() {
      if (this.$route.fullPath.startsWith("/de")) {
        return "de";
      }
      return "en";
    }
  }
};
</script>