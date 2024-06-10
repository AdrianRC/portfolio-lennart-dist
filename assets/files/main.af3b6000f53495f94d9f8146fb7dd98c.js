// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
require('~/main.css')

import DefaultLayout from '~/layouts/Default.vue'
import ProjectHeader from "~/components/ProjectHeader.vue";
import ProjectQuote from "~/components/ProjectQuote.vue";
import ProjectImage from "~/components/ProjectImage.vue";
import Showcase from "~/components/Showcase.vue";
import DualShowcase from "~/components/DualShowcase.vue";
import Project from "~/components/Project.vue";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('project_header', ProjectHeader)
  Vue.component('project_image', ProjectImage)
  Vue.component('Quote', ProjectQuote)
  Vue.component('Showcase', Showcase)
  Vue.component('dual_showcase', DualShowcase)
  Vue.component('Project', Project)
}