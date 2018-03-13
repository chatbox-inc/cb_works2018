<template>
  <div class="p-case__list">
    <div class="p-case__example">
      <div class="p-case__exampleIcon">制作</div>
      <div class="p-case__exampleTitleWrap">
        <div class="p-case__exampleTitle">全行程を社内で</div>
      </div>
      <div class="p-case__exampleInner">
        <p class="p-case__exampleText">Webだけでなく。印刷物なども対応可能で幅広い販促をサポートします（メリットを伝える）Webだけでなく。印刷物なども対応可能で幅広い販促をサポートします（メリットを伝える）</p>
      </div>
    </div>
    <div class="p-case__detail">
      <div class="p-case__detailInner">
        <div class="p-case__detailDrawing"></div>
        <p class="p-case__detailText">「領域」に関連する制作実績を見る</p>
        <a class="p-case__detailIcon" href=""></a>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-case {
  &__list {
    display: inline-block;
    width: 100%;
    margin-bottom: 30px;
    @include desktop {
      width: 30%;
      margin-bottom: 90px;
    }
  }
  &__example {
    position: relative;
    background-color: #ffffff;
    margin-bottom: 10px;
    &Icon {
      position: absolute;
      top: 0;
      left: 0;
      background-color: #c3504f;
      color: #ffffff;
      text-align: center;
      line-height: 55px;
      height: 55px;
      width: 55px;
      font-size: 18px;
      @include desktop {
        line-height: 75px;
        height: 75px;
        width: 75px;
        font-size: 25px;
      }
    }
    &TitleWrap {
      height: 55px;
      display: table-cell;
      vertical-align: middle;
      @include desktop {
        height: 75px;
      }
    }
    &Title {
      padding-left: 65px;
      font-weight: bold;
      font-size: 20px;
      @include desktop {
        padding-left: 85px;
        font-size: 24px;
      }
    }
    &Inner {
      padding: 10px 30px;
    }
    &Text {
      font-weight: bold;
      font-size: 16px;
      line-height: 30px;
    }
  }
  &__detail {
    background-color: #ffffff;
    position: relative;
    &Inner {
      padding: 30px;
    }
    &Drawing {
      display: inline-block;
      height: 55px;
      width: 55px;
      background: url("http://placehold.it/55x55") no-repeat; // 現在仮画像
      background-size: cover;
    }
    &Text {
      display: inline-block;
      width: 60%;
      padding: 0 20px;
      font-size: 17px;
      line-height: 27px;
    }
    &Icon {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 30px solid transparent;
      border-right: 30px solid #c3504f;
      border-bottom: 30px solid #c3504f;
      &:after {
        content: "→";
        bottom: 0;
        right: 0;
        color: #ffffff;
      }
    }
  }
}
</style>
