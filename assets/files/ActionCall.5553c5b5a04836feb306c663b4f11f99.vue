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
        class="inline-block px-6 py-2 mx-auto mt-8 text-xl font-semibold leading-normal transition duration-150 bg-white border-2 border-dark text-dark rounded-xl hover:bg-black hover:text-white"
      >
        <span><slot name="button-text"></slot></span>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          class="inline ml-2 fill-current"
        >
          <path d="M8.90945 14.06L15.9563 7.0356L8.90945 0L7.22897 1.66927L11.419 5.85927H1V8.18953H11.419L7.22897 12.3795L8.90945 14.06Z"/>

</svg>

         
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