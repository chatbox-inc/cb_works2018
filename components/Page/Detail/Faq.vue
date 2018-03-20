<template>
  <section class="p-faq">
    <div class="p-faq__inner">
      <h2 class="p-faq__title">初めてご依頼される方へ</h2>
        <div class="p-faq__lists">
          <div class="p-faq__item">
            <div class="p-faq__question">費用はどのくらいでしょうか？（お客さまの悩みに訴えかける）</div>
            <p class="p-faq__answer">
                ある企業様の業務管理システムを制作させていただきました。<br>
                Q この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
                企画から実装など、すべて担当させていただきました。
            </p>
          </div>
          <div class="p-faq__item">
            <div class="p-faq__question">前例のない特殊な制作も可能ですか？（お客さまの悩みに訴えかける）</div>
            <p class="p-faq__answer">
                ある企業様の業務管理システムを制作させていただきました。<br>
                の文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れています。<br>
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

.p-faq {
  &__inner {
    @include c-detailContainer;
  }
  &__title {
    text-align: center;
    font-weight: bold;
    font-size: 2.5rem;
    line-height: 1.8;
    margin-bottom: 45px;
  }
  &__lists {
  }
  &__item {
      margin-bottom: 40px;
  }
  &__question {
    box-sizing: border-box;
    margin-bottom: 1em;
    padding: .8em 2em;
    border-radius: 1000px;
    min-width: 100%;
    font-size: 1.6rem;
    font-weight: bold;
      line-height: 1.8;
    color: #c3504f;
    background: #faf7f7;

      @include desktop {
          padding: .5em 3em;
          line-height: 2;
      }

      &::before {
          margin-right: 1em;
          content: "Q";
      }

  }
  &__answer {
  padding: 0 2em;
    font-size: 1.5rem;
    line-height: 2;
      @include desktop {
          padding: 0 3em;
      }
  }
}
</style>
