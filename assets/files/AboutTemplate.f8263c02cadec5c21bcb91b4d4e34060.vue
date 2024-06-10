<template>
  <Layout>
    <div class="lg:w-3/5" v-editable="content">
      <h1
        class="text-2xl leading-normal text-dark md:text-3xl lg:text-4xl lg:leading-snug"
      >
        {{ content.headline }}
      </h1>
      <div
        class="w-full mt-2 text-base leading-normal text-dark md:mt-4 md:text-2xl lg:mt-6"
        v-html="description"
      ></div>
    </div>
    <div class="mt-8 md:mt-12 lg:mt-24 lg:flex lg:items-center">
      <g-image
        alt="Lennart Basler"
        :src="image"
        class="w-full md:h-120 md:w-auto md:mx-auto lg:w-1/2 lg:h-auto lg:m-0"
      />
      <div
        class="mt-8 space-y-6 md:mt-12 lg:my-0 lg:mr-0 lg:ml-24 lg:w-1/2 md:space-y-8"
      >
        <quality
          v-for="quality in content.qualities"
          :key="quality._uid"
          :quality="quality"
        />
      </div>
    </div>
    <action-call to="contact/" v-editable="callToAction">
      <template v-slot:heading>
        <div v-html="ctaDesc"></div>
      </template>
      <template v-slot:button-text>
        {{ callToAction.button_text }}
      </template>
    </action-call>
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
import Quality from "~/components/Quality.vue";
import ActionCall from "~/components/ActionCall.vue";
import formatImg from "~/utils/formatImg.js";

export default {
  metaInfo() {
    return {
      title: this.content.headline,
      meta: [
        {
          key: "description",
          name: "description",
          content: this.description,
        },
      ],
    };
  },
  components: {
    Quality,
    ActionCall,
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
    image() {
      return formatImg(this.content.image);
    },
    callToAction() {
      return this.content.call_to_action[0];
    },
    ctaDesc() {
      return this.callToAction.description
        ? this.$storyapi.richTextResolver.render(this.callToAction.description)
        : "";
    },
  },
};
</script>
