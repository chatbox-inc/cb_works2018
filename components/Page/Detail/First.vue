<template>
  <section class="p-first">
    <div class="p-first__inner">
      <h2 class="p-first__title">初めてご依頼される方へ</h2>
        <div class="p-first__items">
          <div class="p-first__item">
            <div class="p-first__subTitle">Q 費用はどのくらいでしょうか？</div>
            <p class="p-first__text">
                ある企業様の業務管理システムを制作させていただきました。<br>
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
                企画から実装など、すべて担当させていただきました。
            </p>
          </div>
          <div class="p-first__item">
            <div class="p-first__subTitle">Q 費用はどのくらいでしょうか？</div>
            <p class="p-first__text">
                ある企業様の業務管理システムを制作させていただきました。<br>
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
                企画から実装など、すべて担当させていただきました。
            </p>
          </div>
        </div>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-first {
  &__inner {
    @include c-container;
  }
  &__title {
    text-align: center;
    font-weight: bold;
    font-size: 25px;
    line-height: 38px;
    margin-bottom: 45px;
  }
  &__items {
  }
  &__item {
  }
  &__subTitle {
    color: #c3504f;
    font-size: 16px;
    font-weight: bold;
    line-height: 47px;
    width: 100%;
    background-color: #faf7f7;
    border-radius: 23.5px;
    padding: 0 22px;
    box-sizing: border-box;
    margin-bottom: 15px;
    @include desktop {
      margin-bottom: 20px;
    }
  }
  &__text {
    font-size: 15px;
    line-height: 30px;
    margin-bottom: 30px;
    padding: 0 10px;
    @include desktop {
      font-size: 16px;
      line-height: 24px;
      padding: 0 40px;
    }
  }
}
</style>
