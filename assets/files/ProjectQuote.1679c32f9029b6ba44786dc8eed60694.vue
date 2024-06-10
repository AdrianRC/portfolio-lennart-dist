<template>
  <div
    class="px-4 mt-12 text-center md:mt-16 lg:mt-40 md:p-0 lg:w-2/3 lg:mx-auto"
    v-editable="blok"
  >
    <div
      class="text-lg leading-normal text-dark md:text-2xl lg:text-3xl"
      v-html="quote"
    ></div>
    <p class="mt-4 text-base leading-normal text-mid lg:mt-6">
      {{ blok.author }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["blok"],
  computed: {
    quote() {
      return this.blok.quote
        ? this.$storyapi.richTextResolver.render(this.blok.quote)
        : "";
    },
  },
};
</script>
