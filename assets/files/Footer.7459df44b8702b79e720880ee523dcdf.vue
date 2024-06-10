<template>
  <footer class="w-full bg-black">
    <div
      class="px-4 pt-6 pb-8 mx-auto md:px-8 md:pt-8 lg:py-12 lg:px-30"
      style="max-width: 1560px;"
    >
      <div class="md:flex">
        <div class="md:w-56 lg:flex-grow">
          <h2 class="text-2xl leading-normal text-white">
            {{ language === "de" ? "Adresse" : "Address" }}
          </h2>
          <address
            class="mt-2 text-base not-italic leading-loose text-light md:mt-4"
          >
            <p>Lerchenstraße 28</p>
            <p>22767 Hamburg</p>
          </address>
        </div>
        <div
          class="mt-8 md:m-0 md:flex-grow lg:w-64 md:ml-12 lg:flex-grow"
        >
          <h2 class="text-2xl leading-normal text-white">
            {{ language === "de" ? "Netzwerke" : "Connect" }}
          </h2>
          <nav class="mt-2 text-base leading-loose text-light md:mt-4">
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/lennartbasler/"
                  target="_blank"
                  rel="noopener"
                  class="pb-px border-b border-black hover:border-white"
                  >LinkedIn</a
                >
              </li>
              <li>
                <a
                  href="https://www.xing.com/profile/Lennart_Basler/"
                  target="_blank"
                  rel="noopener"
                  class="pb-px mt-2 border-b border-black hover:border-white"
                  >Xing</a
                >
              </li>
            </ul>
          </nav>
        </div>
        <div class="mt-8 md:m-0 md:w-56 lg:flex-grow">
          <h2 class="text-2xl leading-normal text-white">
            {{ language === "de" ? "Kontakt" : "Contact" }}
          </h2>
          <address
            class="mt-2 text-base not-italic leading-loose text-light md:mt-4"
          >
            <p>Lennart Basler</p>
            <a
              href="mailto:hello@lennartbasler.com"
              class="pb-px mt-2 border-b border-black hover:border-white"
              >hello@lennartbasler.com</a
            ><br />
            <a
              href="tel:+4904022821475"
              class="pb-px mt-1 border-b border-black hover:border-white"
              >+49 (0) 40 228 214 75</a
            >
          </address>
        </div>
      </div>
      <nav
        class="inline-flex mt-8 text-base leading-normal text-mid md:mt-12 lg:mt-16"
      >
        <!-- to the same route but in the opposite language -->
        <!-- text of the opposite language -->
        <g-link
          :to="languageRoute"
          class="inline-flex items-center pb-px border-b border-black hover:border-mid"
          ><svg
            class="mr-2"
            width="20"
            height="21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.333 10a8.333 8.333 0 10-16.667 0 8.333 8.333 0 0016.667 0zm-1.725-.833h-2.442a10.757 10.757 0 00-1.942-5.45 6.667 6.667 0 014.384 5.45zm-9.042 1.666h4.933a9.532 9.532 0 01-2.5 5.509 9.166 9.166 0 01-2.433-5.509zm0-1.666a9.5 9.5 0 012.433-5.5 9.325 9.325 0 012.5 5.5H7.566zm.3-5.475a10.983 10.983 0 00-1.975 5.475h-2.5a6.667 6.667 0 014.475-5.475zm-4.475 7.141h2.5c.137 1.968.815 3.86 1.958 5.467a6.667 6.667 0 01-4.458-5.467zm8.792 5.459a10.95 10.95 0 001.983-5.459h2.458a6.667 6.667 0 01-4.441 5.459z"
              fill="#86868B"
            /></svg
          >{{ languageLabel }}</g-link
        >
        <g-link
          :to="`${this.linkBase}imprint/`"
          class="pb-px ml-8 border-b border-black hover:border-mid"
          >{{ language === "de" ? "Impressum" : "Imprint" }}</g-link
        >
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  computed: {
    language() {
      if (this.$route.fullPath.startsWith("/de")) {
        return "de";
      }
      return "en";
    },
    linkBase() {
      if (this.language === "de") {
        return "/de/";
      }
      return "/";
    },
    languageLabel() {
      return this.language === "en" ? "Deutsch" : "English";
    },
    languageRoute() {
      return this.language === "en"
        ? "/de" + this.$route.fullPath
        : "/" + this.$route.fullPath.substring(4);
    },
  },
};
</script>
