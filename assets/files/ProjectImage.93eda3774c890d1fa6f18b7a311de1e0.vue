<template>
  <div v-editable="blok">
    <g-image
      alt="Project screenshot"
      :src="image"
      class="w-full mt-12 md:mt-16 lg:mt-40"
    />
  </div>
</template>

<script>
import formatImg from "~/utils/formatImg.js";
export default {
  props: ["blok"],
  computed: {
    image() {
      return formatImg(this.blok.image);
    }
  }
};
</script>