<template>
  <div class="flex flex-col w-screen h-screen mx-auto">
    <header class="flex-grow-0">
      <navbar />
    </header>
    <main
      class="flex-grow w-full px-4 pt-8 mx-auto md:px-8 md:pt-12 lg:px-30 lg:pt-24"
      style="max-width: 1560px"
    >
      <slot />
    </main>
    <div class="flex-grow-0" v-if="footer">
      <l-footer />
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar.vue";
import Footer from "~/components/Footer.vue";

export default {
  metaInfo() {
    return {
      htmlAttrs: {
        lang: this.language
      }
    };
  },
  props: {
    footer: {
      type: Boolean,
      default: true
    }
  },
  components: {
    Navbar,
    LFooter: Footer
  },
  computed: {
    language() {
      if (this.$route.fullPath.startsWith("/de")) {
        return "de";
      }
      return "en";
    }
  }
};
</script>
