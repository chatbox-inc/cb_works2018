<template>
    <main>
        <detail-description :list-items="listItems"></detail-description>
        <detail-case></detail-case>
        <detail-first></detail-first>
        <detail-sticky></detail-sticky>
        <detail-contact></detail-contact>
        <detail-reason></detail-reason>
    </main>
</template>

<script>
import DetailDescription from "~/components/Page/Detail/Description.vue";
import DetailCase from "~/components/Page/Detail/Case.vue";
import DetailFirst from "~/components/Page/Detail/Faq.vue";
import DetailSticky from "~/components/Page/Index/Sticky.vue";
import DetailContact from "~/components/Page/Index/Contact.vue";
import DetailReason from "~/components/Page/Detail/Reason.vue";

export default {
  data() {
    return {};
  },
  computed: {
    listItems() {
      return this.$store.state.listItems;
    }
  },
  components: {
    DetailDescription,
    DetailCase,
    DetailFirst,
    DetailSticky,
    DetailContact,
    DetailReason
  }
};
</script>

<style lang="scss">
@import "~assets/scss/app.scss";
</style>
