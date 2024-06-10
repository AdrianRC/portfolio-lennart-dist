<template>
  <div v-editable="blok">
    <div class="justify-between lg:flex">
      <h1
        class="text-2xl leading-normal text-dark md:text-3xl lg:text-4xl lg:leading-snug"
      >
        {{ blok.title }}
      </h1>
      <div
        class="mt-2 text-base leading-normal lg:leading-9 text-dark md:text-2xl md:w-4/5 lg:w-1/2 lg:m-0 lg:text-2xl"
        v-html="description"
      ></div>
    </div>
    <g-image
      :alt="`${blok.title} screenshot`"
      :src="image"
      class="w-full mt-8 md:mt-12 lg:mt-16"
      :class="{ 'object-cover object-left-top h-20 md:h-40': cropped }"
    />
  </div>
</template>

<script>
import formatImg from "~/utils/formatImg.js";
export default {
  props: {
    blok: {
      type: Object,
      required: true
    },
    cropped: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  computed: {
    description() {
      return this.blok.description
        ? this.$storyapi.richTextResolver.render(this.blok.description)
        : "";
    },
    image() {
      return formatImg(this.blok.image);
    }
  }
};
</script>