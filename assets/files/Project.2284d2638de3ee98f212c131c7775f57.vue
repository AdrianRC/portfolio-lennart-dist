<template>
  <div v-editable="blok">
    <component
      v-for="blok in blok.body"
      :key="blok._uid"
      :blok="blok"
      :is="blok.component"
    ></component>
  </div>
</template>

<script>
export default {
  props: ["blok"]
};
</script>