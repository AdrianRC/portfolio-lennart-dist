<template>
  <div class="flex justify-center w-full py-40 align-center md:py-56 lg:py-64">
    <div class="text-center">
      <div
        class="w-full text-2xl leading-normal text-dark md:text-3xl"
      >
        <slot name="heading"></slot>
      </div>
      <g-link
        :to="`${linkBase}${to}`"
        class="inline-block px-6 py-2 mx-auto mt-8 text-xl leading-normal transition duration-150 bg-white border-2 border-dark text-dark rounded-xl hover:bg-black hover:text-white"
      >
        <span><slot name="button-text"></slot></span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="inline ml-2 fill-current">
<path fill-rule="evenodd" clip-rule="evenodd" d="M6.70711 0.292893C6.31658 -0.0976311 5.68342 -0.0976311 5.29289 0.292893C4.90237 0.683418 4.90237 1.31658 5.29289 1.70711L8.58579 5H1C0.447715 5 0 5.44772 0 6C0 6.55228 0.447715 7 1 7H8.58579L5.29289 10.2929C4.90237 10.6834 4.90237 11.3166 5.29289 11.7071C5.68342 12.0976 6.31658 12.0976 6.70711 11.7071L11.7071 6.70711C12.0976 6.31658 12.0976 5.68342 11.7071 5.29289L6.70711 0.292893Z"></path>

</svg>
      </g-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["to"],
  computed: {
    linkBase() {
      if (this.$route.fullPath.startsWith("/de")) {
        return "/de/";
      }
      return "/";
    }
  }
};
</script>