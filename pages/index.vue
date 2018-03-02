<template>
  <main>
    <page-hero :list-items="listItems"></page-hero>
    <page-service :service-items="serviceItems"></page-service>
    <sticky></sticky>
    <page-contact></page-contact>
  </main>
</template>

<script>
import PageHero from "~/components/Page/Index/Hero.vue";
import PageService from "~/components/Page/Index/Service.vue";
import Sticky from "~/components/Page/Index/Sticky.vue";
import PageContact from "~/components/Page/Index/Contact.vue";

export default {
  data() {
    return {};
  },
  computed: {
    serviceItems() {
      return this.$store.state.serviceItems;
    },
    listItems() {
      return this.$store.state.listItems;
    }
  },
  components: {
    PageHero,
    PageService,
    Sticky,
    PageContact
  }
};
</script>

<style lang="scss">
@import "~assets/scss/app.scss";
</style>
