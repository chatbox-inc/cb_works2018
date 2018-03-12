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
    <div class="p-description__list">
      <div class="p-description__listIcon">制作</div>
      <div class="p-description__listInner">
        <div class="p-description__listTitle">外注を行わない一貫した制作フロー（端的に。ドメインを明示的に）</div>
        <div class="p-description__listDrawingWrap">
          <span class="p-description__listDrawing"></span>
          <span class="p-description__listDrawing"></span>
          <span class="p-description__listDrawing"></span>
          <span class="p-description__listDrawing"></span>
        </div>
        <div class="p-description__listBoldText">企画から運用まで社内で行うのでコミュニケーションを円滑に安心して進捗をお任せ頂けます。(メリットを伝える)</div>
        <p class="p-description__listText">chatboxでは制作はすべて一貫して社内で対応。だからこそ、進捗を明瞭にし、安心して頂けるコミュニケーションを心がけております。（ドメインとメリットを踏まえた上で詳細を詳しく。）</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('/images/serviceHeading_create.jpg')` }; // http://placehold.it/350x350
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
.p-description {
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
  &__list {
    @include c-container;
    color: #4d4b4d;
    background-color: #faf7f7;
    margin-bottom: 10px;
    position: relative;
    @include desktop {
      margin-bottom: 30px;
    }
    &Icon {
      position: absolute;
      top: 0;
      text-align: center;
      color: #ffffff;
      background-color: #c3504f;
      width: 45px;
      height: 45px;
      line-height: 45px;
      font-size: 14px;
      @include desktop {
        width: 75px;
        height: 75px;
        line-height: 75px;
        font-size: 25px;
      }
    }
    &Inner {
      @include desktop {
        margin: 0 90px;
      }
    }
    &Title {
      font-weight: bold;
      font-size: 15px;
      margin: 0 55px;
      @include desktop {
        font-size: 25px;
        line-height: 75px;
      }
    }
    &DrawingWrap {
    }
    &Drawing {
    }
    &BoldText {
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
      @include desktop {
        font-size: 17px;
        line-height: 24px;
      }
    }
    &Text {
      line-height: 32px;
      @include desktop {
        font-size: 15px;
        line-height: 30px;
      }
    }
  }
}
</style>
