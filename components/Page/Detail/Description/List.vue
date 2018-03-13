<template>
  <div class="p-description__list">
    <div class="p-description__listIcon">制作</div>
    <div class="p-description__listInner">
      <div class="p-description__listTitleWrap">
        <div class="p-description__listTitle">外注を行わない一貫した制作フロー（端的に。ドメインを明示的に）</div>
      </div>
      <div class="p-description__listDrawingWrap">
        <span class="p-description__listDrawing"></span>
        <span class="p-description__listDrawing"></span>
        <span class="p-description__listDrawing"></span>
        <span class="p-description__listDrawing"></span>
      </div>
      <p class="p-description__listBoldText">企画から運用まで社内で行うのでコミュニケーションを円滑に安心して進捗をお任せ頂けます。(メリットを伝える)</p>
      <p class="p-description__listText">chatboxでは制作はすべて一貫して社内で対応。だからこそ、進捗を明瞭にし、安心して頂けるコミュニケーションを心がけております。（ドメインとメリットを踏まえた上で詳細を詳しく。）</p>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
.p-description {
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
      left: 0;
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
        margin: 0 12%;
      }
    }
    &TitleWrap {
      height: 45px;
      display: table-cell;
      vertical-align: middle;
      @include desktop {
        height: 75px;
      }
    }
    &Title {
      font-weight: bold;
      font-size: 15px;
      margin: 0 50px;
      @include desktop {
        font-size: 25px;
        margin: 0;
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
      margin-bottom: 20px;
      @include desktop {
        font-size: 17px;
        line-height: 24px;
      }
    }
    &Text {
      line-height: 32px;
      padding-bottom: 28px;
      @include desktop {
        font-size: 15px;
        line-height: 30px;
        padding-bottom: 35px;
      }
    }
  }
}
</style>
