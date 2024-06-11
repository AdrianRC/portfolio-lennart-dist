<template>
  <Layout>
    <div
      class="w-full mb-8 text-base leading-7 imprint text-dark md:mb-12 lg:mb-24"
      v-html="description"
    ></div>
  </Layout>
</template>

<page-query>
query StoryblokEntry ($id: ID) {
  data: storyblokEntry (id: $id) {
    id
    full_slug
    content
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.title
        }
      ]
    };
  },
  computed: {
    title() {
      return this.$route.fullPath.startsWith("/de") ? "Impressum" : "Imprint";
    },
    content() {
      return this.$page.data.content.body.content;
    },
    description() {
      return this.content
        ? this.content
            .map(content => {
              let prepend = "";
              let append = "";
              if (content.type === "heading") {
                prepend =
                  '<h2 class="text-2xl leading-normal text-dark">';
                append = "</h2>";
              }
              if (content.type === "paragraph") {
                prepend = "<p>";
                append = "</p>";
              }
              return (
                prepend +
                this.$storyapi.richTextResolver.render(content) +
                append
              );
            })
            .join("<br/>")
        : "";
    }
  }
};
</script>

<style lang="postcss">
.imprint h2:first-of-type {
  @apply text-2xl leading-normal text-dark;
}

@screen md {
  .imprint h2:first-of-type {
    @apply text-3xl;
  }
}

@screen lg {
  .imprint h2:first-of-type {
    @apply text-4xl leading-snug;
  }
}

.imprint a {
  @apply border-b border-black;
}
</style>