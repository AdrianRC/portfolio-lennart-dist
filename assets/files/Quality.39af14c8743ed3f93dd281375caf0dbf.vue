<template>
  <div v-editable="quality">
    <h3 class="text-xl sm:font-normal leading-normal md:text-2xl text-dark">
      {{ quality.title }}
    </h3>
    <div
      class="mt-2 text-base leading-7 text-dark md:w-4/5 lg:w-full xl:w-3/4"
      v-html="description"
    ></div>
  </div>
</template>

<script>
export default {
  props: ["quality"],
  computed: {
    description() {
      return this.quality.description
        ? this.$storyapi.richTextResolver.render(this.quality.description)
        : "";
    },
  },
};
</script>