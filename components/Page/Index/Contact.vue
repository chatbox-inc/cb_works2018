<template>
    <section class="p-contact" id="contact">
        <div class="p-contact__inner">
            <div class="p-contact__toChatbox">Webにまつわるお悩み、<br>ご相談はお気軽にchatboxまで。</div>
            <div class="p-contact__formContents">
                <a class="p-contact__button" href="https://chatbox-inc.com/contact/" target="_blank">お問い合わせフォームへ </a>
                <div class="p-contact__tel">
                    <p>お電話でのお問い合わせ</p>
                    <a href="tel:050-3555-1212">050-3555-1212</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-contact {
  padding-top: 40px;
  padding-bottom: 60px;
  text-align: center;
  background: #c3504f;
  color: #fff;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 22px 16px 0 16px;
    border-color: #fff transparent transparent transparent;
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-11px);
    @include desktop {
      border-width: 40px 32px 0 32px;
      transform: translateX(-20px);
    }
  }

  &__info {
    display: block;
    padding: 20px 0;
    width: 100%;
    font-size: 1.6rem;
    color: #c3504f;
    text-align: center;
    text-decoration: none;
    background: #fff;
    position: fixed;
    bottom: 0;
    z-index: 10000;
    transition: all 0.3s;

    @include desktop {
      font-size: 1.8rem;
    }
    &:hover {
      background: #c3504f;
      color: #fff;
      transition: all 0.3s;
      .p-contact__infoText {
        &::before {
          background: url("/images/icon_mail-white.svg") no-repeat center;
        }
      }
    }
  }
  &__infoText {
    display: inline-block;
    padding-left: 3rem;
    position: relative;
    &::before {
      display: inline-block;
      content: "";
      width: 2rem;
      height: 2rem;
      background: url("/images/icon_mail.svg") no-repeat center;
      background-size: contain;
      position: absolute;
      top: 50%;
      left: 0.2rem;
      transform: translateY(-1rem);
    }
  }
  &__inner {
    @include c-container;
  }
  &__toChatbox {
    font-size: 1.4rem;
    letter-spacing: 0.2em;
    line-height: 2;
    margin: 15% 0 5%;
    @include desktop {
      font-size: 3rem;
      margin: 7% 0 5%;
    }
  }
  &__formContents {
    @include desktop {
      display: flex;
      flex-direction: row;
      padding: 0 3% 0 6%;
      margin: 0 auto;
    }
  }
  &__tel {
    font-size: 1.4rem;
    padding: 5% 0;
    letter-spacing: 0.1em;
    line-height: 1.8;
    @include desktop {
      font-size: 1.8rem;
      padding: 1% 5%;
    }
    a {
      font-weight: bold;
      color: #fff;
      text-decoration: none;
      font-size: 2.3rem;
      letter-spacing: 0.2rem;
      @include desktop {
        margin-bottom: 4%;
        font-size: 2.9rem;
      }
    }
  }
  &__button {
    display: inline-block;
    padding: 2rem;
    width: 77%;
    margin: 4% 0;
    text-align: center;
    border-radius: 4px;
    color: #c3504f;
    font-size: 1.5rem;
    font-weight: bold;
    background: #fff;
    text-decoration: none;
    position: relative;
    transition: all 0.5s;
    @include desktop {
      width: 100%;
      max-width: 450px;
      margin: 0;
      padding: 4rem;
      font-size: 2rem;
    }
    &:hover {
      opacity: 0.8;
      transition: all 0.5s;
      &::before {
        right: 1rem;
        transition: all 0.5s;
      }
    }
    &::before {
      content: "";
      display: inline-block;
      width: 1.4rem;
      height: 1.4rem;
      background-image: url("/images/icon_arrow.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      right: 0.7rem;
      top: 50%;
      transform: translateY(-50%);
      transition: all 0.5s;
      @include desktop {
        width: 3rem;
        height: 2.2rem;
        right: 2rem;
      }
    }
  }
}
</style>
