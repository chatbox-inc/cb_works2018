<template>
  <div>
    <Service-Section :item="item" :index="index" v-for="(item,index) in serviceItems" :key="key"></Service-Section>
  </div>
</template>

<script>
import ServiceSection from "./Service/Section.vue";
export default {
  props: {
    serviceItems: Object
  },
  data() {
    return {};
  },
  components: {
    ServiceSection
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
</style>
