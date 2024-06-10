<template>
  <div
    class="grid grid-cols-1 gap-12 pt-8 md:pt-16 md:gap-16 lg:grid-cols-2 lg:col-gap-16 lg:row-gap-24 lg:pt-40"
  >
    <project
      v-for="project in projects"
      :key="project.node.full_slug"
      :body="project.node.content.body"
      :path="project.node.full_slug"
    />
  </div>
</template>

<script>
import Project from "~/components/ProjectPreview.vue";
export default {
  props: ["projects"],
  components: {
    Project
  }
};
</script>