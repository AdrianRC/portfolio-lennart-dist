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
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 1.29289C8.31658 0.902369 7.68342 0.902369 7.29289 1.29289C6.90237 1.68342 6.90237 2.31658 7.29289 2.70711L10.5858 6H3C2.44772 6 2 6.44772 2 7C2 7.55228 2.44772 8 3 8H10.5858L7.29289 11.2929C6.90237 11.6834 6.90237 12.3166 7.29289 12.7071C7.68342 13.0976 8.31658 13.0976 8.70711 12.7071L13.7071 7.70711C14.0976 7.31658 14.0976 6.68342 13.7071 6.29289L8.70711 1.29289Z"/>
</svg>

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