<template>
  <section class="p-case">
    <div class="p-case__background" :style="thumbStyle">
      <div class="p-case__backgroundFilter">
        <div class="p-case__inner">
          <h2 class="p-case__title">Web制作事例</h2>
          <div class="p-case__text" v-html=" marked('chatboxの具体的な事例をご紹介します。（それぞれどういう事例があるかをざっくりしたライティング）気になる分野は以下のボタンより飛んで下さい。制作実績の一覧は[こちら]()から閲覧いただけます。（こちらのところは全ての制作実績が閲覧できる実績の一覧のページへリンクを貼る）') "></div>
          <div class="p-case__lists">
            <case-list v-for="key in 3" :key="key"></case-list>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CaseList from "./Case/List.vue";
import marked from "marked";

export default {
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('/images/serviceHeading_create.jpg')` }; // 現在仮画像
    }
  },
  components: {
    CaseList
  },
  methods: {
    marked(text) {
      return marked(text, { sanitize: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-case {
  &__background {
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__backgroundFilter {
    background: rgba(195, 80, 79, 0.7);
  }
  &__inner {
    @include c-container;
  }
  &__title {
    color: #ffffff;
    text-align: center;
    font-weight: bold;
    line-height: 120px;
    font-size: 25px;
  }
  &__text {
    color: #ffffff;
    font-size: 16px;
    line-height: 36px;
    margin-bottom: 20px;
    @include desktop {
      margin-bottom: 30px;
    }
    a {
      color: #ffffff;
    }
  }
  &__lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @include desktop {
      flex-wrap: nowrap;
    }
  }
}
</style>
