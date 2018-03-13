<template>
  <section class="p-description">
    <div class="p-description__background" :style="thumbStyle">
      <div class="p-description__backgroundFilter">
        <div class="p-description__titleWrap">
          <h2 class="p-description__title">Web開発</h2>
          <div class="p-description__subTitle">最新の製作技術でしっかりサポート</div>
        </div>
      </div>
    </div>
    <div class="p-description__inner">
      <div class="p-description__textWrap">
        <div class="p-description__importantText">複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート</div>
        <p class="p-description__text">複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート多様化するニーズや、複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート。Web制作に関するあらゆる相談に対応出来るよう、経験豊富なスタッフが親身に対応にあたります。</p>
      </div>
    </div>
    <description-list v-for="key in 3" :key="key"></description-list>
  </section>
</template>

<script>
import DescriptionList from "./Description/List.vue";

export default {
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('/images/serviceHeading_create.jpg')` };
    }
  },
  components: {
    DescriptionList
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
.p-description {
  margin-bottom: 50px;
  @include desktop {
    margin-bottom: 60px;
  }
  &__background {
    background-repeat: no-repeat;
    background-size: cover;
    margin-bottom: 43px;
  }
  &__backgroundFilter {
    width: 100%;
    height: 140px;
    background: linear-gradient(
      left,
      rgba(195, 80, 79, 0.7) 0%,
      rgba(195, 80, 79, 0.7) 1%,
      rgba(195, 80, 79, 0.01) 98%,
      rgba(195, 80, 79, 0) 100%
    );
    @include desktop {
      height: 200px;
    }
  }
  &__titleWrap {
    @include c-container;
    color: #ffffff;
    font-family: YuGothic;
    padding-top: 3rem;
    padding-bottom: 3rem;
    @include desktop {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  &__title {
    font-size: 3rem;
    font-weight: bold;
    @include desktop {
      display: inline-block;
      line-height: 200px;
      font-size: 4rem;
    }
  }
  &__subTitle {
    font-size: 15px;
    font-weight: bold;
    @include desktop {
      display: inline-block;
      line-height: 200px;
      font-size: 22px;
    }
  }
  &__inner {
    @include c-container;
    font-family: YuGothic;
  }
  &__textWrap {
    margin-bottom: 30px;
    @include desktop {
      margin-bottom: 40px;
    }
  }
  &__importantText {
    color: #c3504f;
    font-size: 18px;
    line-height: 35px;
    font-weight: bold;
    margin-bottom: 20px;
    @include desktop {
      font-size: 25px;
      line-height: 38px;
    }
  }
  &__text {
    color: #4d4b4d;
    font-size: 15px;
    line-height: 32px;
    @include desktop {
      font-size: 16px;
      line-height: 36px;
    }
  }
}
</style>
