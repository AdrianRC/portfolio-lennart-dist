<template>
  <div
    class="mt-12 md:mt-16 lg:mt-40 xl:flex xl:items-center xl:space-x-16"
    :class="{ 'xl:flex-row-reverse xl:space-x-reverse': blok.reverse }"
    v-editable="blok"
    v-fade-in
  >
    <video
      v-if="video"
      :src="video"
      :alt="blok.headline"
      autoplay
      loop
      muted
      playsinline
      class="w-full"
      :class="{
        'xl:w-2/3': !blok.split_equally,
        'xl:w-1/2': blok.split_equally,
      }"
    ></video>
    <g-image
      v-else
      :src="image"
      :alt="blok.headline"
      class="w-full"
      :class="{
        'xl:w-2/3': !blok.split_equally,
        'xl:w-1/2': blok.split_equally,
      }"
    />
    <div
      :class="{
        'md:w-4/5': blok.headline,
        'xl:w-1/3': !blok.split_equally,
        'xl:w-1/2': blok.split_equally,
      }"
    >
      <h3
        v-if="blok.headline"
        class="mt-4 text-xl font-semibold leading-normal md:text-2xl text-dark"
      >
        {{ blok.headline }}
      </h3>
      <div
        class="text-base leading-7 text-dark"
        :class="{
          'mt-2': blok.headline,
          'mt-4 md:mt-6 xl:m-0': !blok.headline,
        }"
        v-html="description"
      ></div>
    </div>
  </div>
</template>

<script>
import formatImg from "~/utils/formatImg.js";
export default {
  props: ["blok"],
  computed: {
    description() {
      return this.blok.description
        ? this.$storyapi.richTextResolver.render(this.blok.description)
        : "";
    },
    video() {
      return this.blok.video ? this.blok.video.filename : "";
    },
    image() {
      return formatImg(this.blok.image);
    },
  },
};
</script>
