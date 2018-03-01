<template>
  <section class="p-hero">
    <h2 class="p-hero__title">chatboxにできること</h2>
    <div class="p-hero__wrap">
      <div class="p-hero__backgound">
        <div class="p-hero__backgoundFilter"></div>
      </div>
      <div class="p-hero__contents">
        <div class="p-hero__catchCopy">
          <h3 class="p-hero__catchCopyMain">Webのこれからを<br>「作る」「伝える」「語り合う」</h3>
          <span class="p-hero__catchCopySub">作るだけじゃなく、伝えることで見えてくる</span>
        </div>
        <div class="p-hero__lists">
          <hero-list :item="item" :index="index" v-for="(item,index) in listItems" :key="index"></hero-list>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroList from "./Hero/List.vue";
export default {
  props: {
    listItems: Array
  },
  data() {
    return {};
  },
  components: {
    HeroList
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
.p-hero {
  &__title {
    margin-bottom: 2.5rem;
    color: #c3504f;
    text-align: center;
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 4px;
    @include desktop {
      margin-bottom: 3.5rem;
      font-size: 2.7rem;
      letter-spacing: 6px;
    }
  }

  &__wrap {
    background-color: #c3504f;
    min-height: 830px;
    position: relative;
  }
  &__backgound {
    display: none;

    @include desktop {
      display: block;
      height: 450px;
      background: url("/images/hero_background.jpg") no-repeat;
      background-position: center;
      background-size: cover;
    }
  }
  &__backgoundFilter {
    height: 100%;
    background-color: rgba(195, 80, 79, 0.6);
  }
  &__contents {
    @include c-container;
    padding-top: 30px;
    display: block;
    position: static;

    @include desktop {
      padding-top: 0;
      position: absolute;
      left: 50%;
      top: 70px;
      transform: translateX(-50%);
      z-index: 1000;
    }
  }
  &__catchCopy {
    margin-bottom: 55px;
    text-align: center;
    color: #fff;
    @include desktop {
      margin-bottom: 80px;
    }
  }
  &__catchCopyMain {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    font-size: 2.2rem;
    font-weight: bold;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
    color: inherit;
    line-height: 1.8;
    letter-spacing: 6px;
    @include desktop {
      font-size: 3rem;
      margin-bottom: 30px;
    }
  }
  &__catchCopySub {
    display: inline-block;
    font-size: 1.6rem;
    color: inherit;
    @include desktop {
      font-size: 2rem;
    }
  }
  &__lists {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    @include desktop {
      flex-wrap: nowrap;
    }
  }
}
</style>
