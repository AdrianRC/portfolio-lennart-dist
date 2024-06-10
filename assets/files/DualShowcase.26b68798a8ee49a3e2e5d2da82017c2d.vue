<template>
  <div
    class="mt-12 md:mt-16 lg:mt-40 lg:flex lg:space-x-16"
    v-editable="blok"
    v-fade-in>
    <div class="lg:w-1/2">
      <g-image alt="Project screenshot" :src="image1" class="w-full" />
      <div
        class="mt-4 text-base leading-7 text-dark md:mt-6 md:w-4/5 lg:w-full"
        v-html="description1"
      ></div>
    </div>
    <div class="mt-12 md:mt-16 lg:mt-0 lg:w-1/2">
      <g-image alt="Project screenshot" :src="image2" class="w-full" />
      <div
        class="mt-4 text-base leading-7 text-dark md:mt-6 md:w-4/5 lg:w-full"
        v-html="description2"
      ></div>
    </div>
  </div>
</template>

<script>
import formatImg from "~/utils/formatImg.js";
export default {
  props: ["blok"],
  computed: {
    description1() {
      return this.blok.description1
        ? this.$storyapi.richTextResolver.render(this.blok.description1)
        : "";
    },
    description2() {
      return this.blok.description2
        ? this.$storyapi.richTextResolver.render(this.blok.description2)
        : "";
    },
    image1() {
      return formatImg(this.blok.image1);
    },
    image2() {
      return formatImg(this.blok.image2);
    },
  },
};
</script>
