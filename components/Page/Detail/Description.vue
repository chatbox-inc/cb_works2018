<template>
  <section class="p-description">
    <div class="p-description__background" :style="thumbStyle">
      <div class="p-description__backgroundFilter">
        <div class="p-description__heading">
          <h2 class="p-description__headingTitle">Web開発</h2>
          <div class="p-description__headinSubTitle">最新の製作技術でしっかりサポート</div>
        </div>
      </div>
    </div>
    <div class="p-description__inner">
      <div class="p-description__intro">
        <div class="p-description__introTitle">複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート</div>
        <p class="p-description__introDescription">複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート多様化するニーズや、複雑化するシステム構築の課題を、最新の制作技術でしっかりサポート。Web制作に関するあらゆる相談に対応出来るよう、経験豊富なスタッフが親身に対応にあたります。</p>
      </div>
      <description-list v-for="key in 3" :key="key"></description-list>
    </div>
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
    margin-bottom: 20px;
    background-position: center;
    @include desktop {
      margin-bottom: 40px;
    }
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
  &__heading {
    @include c-detailContainer;
    color: #fff;
    padding-top: 3rem;
    padding-bottom: 3rem;
    @include desktop {
      padding-top: 0;
      padding-bottom: 0;
    }
  }
  &__headingTitle {
    font-size: 3rem;
    font-weight: bold;
    margin-right: 0.5em;
    @include desktop {
      display: inline-block;
      line-height: 200px;
      font-size: 4rem;
    }
  }
  &__headinSubTitle {
    vertical-align: top;
    font-size: 1.5rem;
    @include desktop {
      display: inline-block;
      line-height: 200px;
      font-size: 2.2rem;
    }
  }
  &__inner {
    @include c-detailContainer;
  }
  &__intro {
    margin-bottom: 30px;
    @include desktop {
      margin-bottom: 40px;
    }
  }
  &__introTitle {
    color: #c3504f;
    font-size: 1.8rem;
    font-weight: bold;
    line-height: 1.8;
    margin-bottom: 15px;
    letter-spacing: 2px;
    @include desktop {
      margin-bottom: 20px;
      font-size: 2.5rem;
      letter-spacing: 4px;
    }
  }
  &__introDescription {
    color: #4d4b4d;
    font-size: 1.5rem;
    line-height: 2.2;
    @include desktop {
      font-size: 1.6rem;
    }
  }
}
</style>
