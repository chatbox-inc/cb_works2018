<template>
  <div class="p-case__list">
    <div class="p-case__listContents">
      <div class="p-case__listHeading">
        <div class="p-case__listHeadingDomain">制作</div>
        <div class="p-case__listHeadinglistTitle">端的に。ドメインを明示的に</div>
      </div>
      <div class="p-case__listBody">
        <div class="p-case__listMelit">Webだけでなく。印刷物なども対応可能で幅広い販促をサポートします（メリットを伝える）Webだけでなく。印刷物なども対応可能で幅広い販促をサポートします（メリットを伝える）</div>
      </div>
    </div>
    <a class="p-case__listLink" href="#">
      <div class="p-case__listLinkIcon"></div>
      <div class="p-case__listLinkText">「領域」に関連する制作実績を見る</div>
      <div class="p-case__listLinkDeco"></div>
    </a>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";
@import "~assets/scss/object/component/_descriptionList.scss";

.p-case {
  &__list {
    @include desktop {
      max-width: 32%;
    }
  }
  &__listContents {
    margin-bottom: 10px;
    background: #fff;
  }
  &__listHeading {
    display: table;
    margin-bottom: 20px;
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
      padding-right: 30px;
      font-size: 2.4rem;
    }
  }
  &__listBody {
    padding: 0 30px 20px;
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

  &__listLink {
    display: table;
    margin-bottom: 20px;
    padding: 20px;
    width: calc(100% - 40px);
    background: #fff;
    text-decoration: none;
    color: #47494e;
    position: relative;

    @include desktop {
      margin-bottom: 0;
    }

    &:hover {
      opacity: 0.9;
      .p-case__listLinkDeco::after {
        right: 3px;
        transition: all 0.5s;
      }
    }
  }
  &__listLinkIcon {
    display: table-cell;
    width: 25%;
    vertical-align: middle;
    text-align: left;
    background: url("http://placehold.it/200x200");
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
  }
  &__listLinkText {
    display: table-cell;
    padding-left: 10px;
    width: 60%;
    vertical-align: middle;
  }
  &__listLinkDeco {
    display: table-cell;

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      right: 0;
      width: 0;
      height: 0;
      border: 30px solid transparent;
      border-right: 30px solid #c3504f;
      border-bottom: 30px solid #c3504f;
    }

    &::after {
      content: "";
      display: inline-block;
      width: 20px;
      height: 20px;
      background-image: url("/images/icon_arrow-white.svg");
      background-repeat: no-repeat;
      background-size: contain;
      background-position: center;
      position: absolute;
      right: 10px;
      bottom: 10px;
      transition: all 0.5s;
    }
  }
}
</style>
