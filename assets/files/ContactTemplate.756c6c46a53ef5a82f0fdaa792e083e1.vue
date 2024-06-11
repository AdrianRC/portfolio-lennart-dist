<template>
  <Layout>
    <h1
      class="text-2xl leading-normal text-dark md:text-3xl lg:text-4xl lg:leading-snug"
    >
      {{ content.title }}
    </h1>
    <div
      class="w-full mt-2 text-base leading-normal text-dark md:mt-4 md:text-2xl lg:mt-6"
      v-html="description"
    ></div>
    <div class="md:mt-12 md:flex lg:mt-16">
      <div class="md:flex-1">
        <h2
          class="mt-8 text-xl leading-normal sm:font-normal md:text-2xl"
        >
          {{ content.address_headline }}
        </h2>
        <address
          class="mt-2 text-base not-italic leading-7 text-dark lg:mt-4 xl:inline-flex"
        >
          <div>
            <a
              href="mailto:hello@lennartbasler.com"
              class="inline-flex items-center pb-px border-b border-white hover:border-mid"
              >hello@lennartbasler.com
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 fill-current text-mid"
              >
                <path
                  d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
                /></svg></a
            ><br />
            <a
              href="tel:+4904022821475"
              class="inline-flex items-center pb-px mt-2 border-b border-white hover:border-mid"
              >+49 (0) 40 228 214 75
              <svg
                width="11"
                height="10"
                viewBox="0 0 11 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="ml-2 fill-current text-mid"
              >
                <path
                  d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
                /></svg></a
            ><br />
          </div>
          <div class="xl:ml-8">
            <p class="mt-4 xl:m-0">Lerchenstraße 28<br /></p>
            <p class="mt-2">22767 Hamburg</p>
          </div>
        </address>
      </div>
      <div class="md:flex-1">
        <h2
          class="mt-8 text-xl leading-normal sm:font-normal md:text-2xl"
        >
          {{ content.social_headline }}
        </h2>
        <nav class="mt-2 text-base leading-7 text-dark lg:mt-4">
          <ul>
            <li>
              <a
                href="https://www.linkedin.com/in/lennartbasler/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center pb-px border-b border-white hover:border-mid"
                >LinkedIn
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 fill-current text-mid"
                >
                  <path
                    d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
                  /></svg
              ></a>
            </li>
            <li>
              <a
                href="https://www.xing.com/profile/Lennart_Basler/"
                target="_blank"
                rel="noopener"
                class="inline-flex items-center pb-px mt-2 border-b border-white hover:border-mid"
                >Xing
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 fill-current text-mid"
                >
                  <path
                    d="M10.92 4.72L6.2 0L5.14 1.08L7.96 3.96H0V5.48H7.96L5.14 8.36L6.2 9.44L10.92 4.72Z"
                  /></svg
              ></a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div
      class="flex items-start py-8 md:pt-16 md:pb-24 lg:pt-20 lg:pb-32" 
    >
      <g-image
        :src="imageFixed"
        alt="Setup"
        class="w-full lg:pr-8 lg:w-2/3 lg:mt-20"
      />
      <g-image
        :src="imageDisappearing"
        alt="Sketches"
        class="hidden w-full lg:pl-8 lg:w-1/3 lg:block"
      />
    </div>
  </Layout>
</template>

<page-query>
query StoryblokEntry ($id: ID) {
  data: storyblokEntry (id: $id) {
    id
    full_slug
    content
  }
}
</page-query>

<script>
import formatImg from "~/utils/formatImg.js";

export default {
  metaInfo() {
    return {
      title: this.content.title,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },
  computed: {
    content() {
      return this.$page.data.content;
    },
    description() {
      return this.content.description
        ? this.$storyapi.richTextResolver.render(this.content.description)
        : "";
    },
    imageFixed() {
      return formatImg(this.content.image_fixed);
    },
    imageDisappearing() {
      return formatImg(this.content.image_disappearing);
    },
  },
};
</script>
