<template>
  <a class="p-reason__item" href="#">
    <div class="p-reason__itemThumb"></div>
    <div class="p-reason__itemDescription">{{ text(index) }}</div>
    <div class="p-reason__itemIcon"></div>
  </a>
</template>

<script>
export default {
  props: ["index"],
  methods: {
    text(n) {
      if (n === 1) {
        return "システム開発";
      } else if (n === 2) {
        return "技術顧問";
      } else {
        return "セミナー";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-reason {
  &__item {
    position: relative;
    display: inline-block;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    margin-bottom: 10px;
    @include desktop {
      position: static;
      width: 250px;
      height: auto;
      margin-bottom: 0;
    }

    &:hover {
      opacity: 0.9;
    }
  }
  &__itemThumb {
    display: inline-block;
    background-image: url("/images/serviceThumb_support.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 100px;
    height: 80px;
    @include desktop {
      display: block;
      width: 250px;
      height: 150px;
    }
  }
  &__itemDescription {
    position: absolute;
    top: 50%;
    left: 40%;
    transform: translateY(-50%);
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #4d4b4d;
    @include desktop {
      position: static;
      font-size: 20px;
      width: 100%;
      text-align: center;
      line-height: 65px;
      transform: translateY(0);
    }
  }
  &__itemIcon {
    position: absolute;
    top: 50%;
    right: 5%;
    transform: translateY(-50%);
    background-image: url("/images/icon_angle.svg");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    width: 17px;
    height: 17px;
    @include desktop {
      display: none;
      visibility: hidden;
    }
  }
}
</style>
