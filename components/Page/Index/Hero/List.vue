<template>
    <a :href="'#' + item.id" :class="mainClass" v-smooth-scroll>
        <div class="p-hero__listItemHeading">{{item.title}}</div>
        <div class="p-hero__listItemThumb" :style="thumbStyle"></div>
        <div class="p-hero__listItemDescription">
            <div class="p-hero__listItemDescriptionTitle">{{item.heading}}</div>
            <span class="p-hero__listItemDescriptionText">{{item.text}}</span>
        </div>
    </a>
</template>


<script>
export default {
  props: ["item", "index"],
  computed: {
    mainClass() {
      const obj = {
        "p-hero__listItem": true,
        is_odd: this.index % 2 === 0
      };
      obj[this.item.number] = true;
      return obj;
    },
    thumbStyle() {
      return { backgroundImage: `url('${this.item.thumbnail}')` };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
.p-hero {
  &__listItem {
    display: block;
    border-top: 3px solid #c3504f;
    margin-bottom: 40px;
    width: 48.5%;
    background: #faf7f7;
    text-decoration: none;
    color: #4d4b4d;
    position: relative;
    z-index: 100;
    transition: all 0.3s;

    &:hover {
      transform: translateY(-15px);
      transition: all 0.3s;
    }

    @include desktop {
      margin-bottom: 0;
      width: 250px;
      max-width: 250px;
      z-index: 0;
    }

    &::before {
      display: inline-block;
      border: 1px solid rgba(255, 255, 255, 0.5);
      border-radius: 100%;
      width: 50px;
      height: 50px;
      text-align: center;
      line-height: 2.3;
      font-size: 1.4rem;
      color: #fff;
      background: #c3504f;
      position: absolute;
      top: -27px;
      left: 50%;
      transform: translateX(-25px);
      z-index: -10;
      @include desktop {
        border: none;
        width: 70px;
        height: 70px;
        font-size: 2rem;
        top: -40px;
        left: 50%;
        transform: translateX(-35px);
        z-index: -10;
      }
    }
  }
  &__listItem.num01::before {
    content: "01";
  }
  &__listItem.num02::before {
    content: "02";
  }
  &__listItem.num03::before {
    content: "03";
  }
  &__listItem.num04::before {
    content: "04";
  }
  &__listItemHeading {
    text-align: center;
    padding: 1.4rem;
    font-size: 1.7rem;
    font-weight: bold;
    background: #faf7f7;

    @include desktop {
      padding: 1.6rem;
      font-size: 1.8rem;
    }
  }
  &__listItemThumb {
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    &::before {
      content: "";
      display: block;
      padding-top: 50%;
    }
  }
  &__listItemDescription {
    padding: 1.5rem 1.5rem 2rem;
    @include desktop {
      padding: 2rem;
    }
  }
  &__listItemDescriptionTitle {
    margin-bottom: 1rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: bold;
    @include desktop {
      margin-bottom: 1.5rem;
      font-size: 1.6rem;
    }
  }
  &__listItemDescriptionText {
    line-height: 1.8;
  }
}
</style>
