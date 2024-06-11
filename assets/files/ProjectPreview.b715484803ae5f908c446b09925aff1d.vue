<template>
  <g-link :to="path" v-fade-in>
    <div class="transition duration-700 ease-out group hover:opacity-75">
      <div class="w-full">
        <g-image :alt="header.title" :src="image" class="w-full" />
        <div class="w-full pt-4 md:pt-6 md:flex lg:block lg:w-3/4">
          <h2
            class="w-full text-xl leading-normal md:text-2xl md:font-normal text-dark md:w-1/2 lg:w-full"
          >
            {{ header.title }}
          </h2>
          <div
            v-html="description"
            class="w-full pt-2 text-base leading-normal opacity-75 text-dark md:pt-0 md:w-1/2 md:ml-4 lg:pt-2 lg:w-full lg:ml-0"
          ></div>
        </div>
      </div>
    </div>
  </g-link>
</template>

<script>
import formatImg from "~/utils/formatImg.js";
export default {
  props: ["body", "path"],
  computed: {
    header() {
      return this.body.find((blok) => blok.component === "project_header");
    },
    description() {
      return this.header.description
        ? this.$storyapi.richTextResolver.render(this.header.description)
        : "";
    },
    image() {
      return formatImg(this.header.image);
    },
  },
};
</script>
