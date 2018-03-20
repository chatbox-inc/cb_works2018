<template>
  <div class="p-description__list">
    <div class="p-description__listHeading">
      <div class="p-description__listHeadingDomain">制作</div>
      <div class="p-description__listHeadinglistTitle">外注を行わない一貫した制作フロー（端的に。ドメインを明示的に）</div>
    </div>
    <div class="p-description__listBody">
      <div class="p-description__listIcons"></div>
      <div class="p-description__listMelit">企画から運用まで社内で行うのでコミュニケーションを円滑に安心して進捗をお任せ頂けます。(メリットを伝える)</div>
      <div class="p-description__listDescription">chatboxでは制作はすべて一貫して社内で対応。だからこそ、進捗を明瞭にし、安心して頂けるコミュニケーションを心がけております。（ドメインとメリットを踏まえた上で詳細を詳しく。）</div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_descriptionList.scss";
.p-description {
  &__list {
    margin-bottom: 20px;
    border-right: 2px solid #c3504f;
    background: #faf7f7;
    @include desktop {
      margin-bottom: 40px;
    }
  }
  &__listHeading {
    display: table;
    margin-bottom: 20px;
    @include desktop {
      margin-bottom: 0;
    }
  }
  &__listHeadingDomain {
    display: table-cell;
    box-sizing: border-box;
    min-width: 60px;
    height: 60px;
    text-align: center;
    vertical-align: middle;
    font-size: 1.8rem;
    font-weight: bold;
    color: #fff;
    background: #c3504f;

    @include desktop {
      min-width: 80px;
      height: 80px;
      font-size: 2.5rem;
      font-weight: normal;
    }
  }
  &__listHeadinglistTitle {
    display: table-cell;
    padding-left: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    line-height: 1.4;
    vertical-align: middle;
    @include desktop {
      padding-left: 30px;
      font-size: 2.4rem;
    }
  }
  &__listBody {
    padding: 0 20px 30px;
    @include desktop {
      padding: 0 80px 30px;
    }
  }
  &__listIcons {
    margin-bottom: 20px;
    width: 100%;
    background: url("http://placehold.it/600x300");
    background-position: center;
    background-size: cover;

    &::before {
      display: block;
      content: "";
      padding: 20%;
      @include desktop {
        padding: 10%;
      }
    }
  }
  &__listMelit {
    margin-bottom: 10px;
    font-size: 1.6rem;
    font-weight: bold;
    letter-spacing: 2px;
    @include desktop {
      font-size: 1.7rem;
    }
  }
  &__listDescription {
    line-height: 2.2;
    @include desktop {
      line-height: 2;
    }
  }
}
</style>
