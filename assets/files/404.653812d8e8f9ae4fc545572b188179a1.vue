<template>
  <Layout>
    <div
      class="flex justify-center w-full pt-4 pb-12 align-center md:pt-40 lg:pb-40 lg:pt-16"
    >
      <div class="text-center">
        <div
          class="w-full text-2xl leading-normal text-dark md:text-3xl"
        >
          Whoops! Page not found.
        </div>
        <g-link
          to="/"
          class="inline-block px-6 py-2 mx-auto mt-8 text-xl leading-normal transition duration-150 bg-white border-2 border-dark text-dark rounded-xl hover:bg-black hover:text-white"
        >
          <span>Homepage</span>
          <svg
            width="11"
            height="10"
            viewBox="0 0 11 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="inline ml-5 fill-current"
          >
            <path
              d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
            />
          </svg>
        </g-link>
      </div>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo() {
    return {
      meta: [
        {
          key: "description",
          name: "description",
          content: "Page not found!",
        },
      ],
      titleTemplate: "404 - Lennart Basler",
    };
  },
};
</script>