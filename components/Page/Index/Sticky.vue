<template>
    <div class="p-contact__infoWrapper">
        <a href="#contact" class="p-contact__info" v-smooth-scroll>
            <span class="p-contact__infoText">お問合わせはこちら</span>
        </a>
    </div>
</template>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-contact {
  &__infoWrapper {
    display: block;
    position: sticky;
    position: -webkit-sticky;
    bottom: 0;
    width: 100%;
    height: 70px;
    z-index: 10000;
    background: #fff;
    text-align: center;
    line-height: 70px;
    transition: all 0.3s;

    &:hover {
      background: #c3504f;
      transition: all 0.3s;

      & > a > span {
        color: #fff;
      }

      & > a > span::before {
        background: url("/images/icon_mail-white.svg") no-repeat center;
      }
    }
  }

  &__info {
    display: inline-block;
    width: 100%;
    position: relative;
    font-size: 1.6rem;
    color: #c3504f;
    text-decoration: none;

    @include desktop {
      font-size: 1.8rem;
    }
  }

  &__infoText {
    &::before {
      display: inline-block;
      content: "";
      width: 1.8rem;
      height: 1.8rem;
      background: url("/images/icon_mail.svg") no-repeat center;
      background-size: contain;
      transform: translate(-0.5rem, 0.3rem);
      @include desktop {
        width: 2rem;
        height: 2rem;
        transform: translate(-0.5rem, 0.35rem);
      }
    }
  }
}
</style>
