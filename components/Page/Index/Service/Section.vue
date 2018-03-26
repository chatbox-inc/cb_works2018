<template>
    <section :id="item.id" class="p-service" :class="colorClass">
        <div class="p-service__inner">
            <div class="p-service__heading" :class="numberClass">
                <div class="p-service__headingBackgound" :style="thumbStyle">
                    <div class="p-service__headingFilter">
                        <div class="p-service__headinginner">
                            <div class="p-service__headingTitleWrap">
                                <div class="p-service__headingTitle">{{item.title}}</div>
                                <div class="p-service__headingSubTitle">{{item.subTitle}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="p-service__contentsInner">
                <ul class="p-service__problemLists">
                    <li class="p-service__problemListsItem" v-for="balloon in item.balloons">{{ balloon }}</li>
                </ul>
                <div class="p-service__description">
                    <h3 class="p-service__descriptionTitle">{{ item.heading }}</h3>
                    <div class="p-service__descriptionText">
                        <span class="p-service__descriptionAPartOfText" v-html=" marked(item.texts) "></span>
                    </div>
                </div>
                <div class="p-service__example">
                    <div class="p-service__exampleHeading">導入事例</div>
                    <ul class="p-service__exampleList">
                        <li class="p-service__exampleListItem" v-for="example in item.examples">{{ example }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
import marked from "marked";

export default {
  props: ["item", "index"],
  computed: {
    colorClass() {
      const obj = {
        "p-service": true,
        "is-colored": this.index % 2 === 0
      };
      obj[this.item.number] = true;
      return obj;
    },
    thumbStyle() {
      return { backgroundImage: `url('${this.item.thumbnail}')` };
    },
    numberClass() {
      const obj = {};
      obj[this.item.number] = true;
      return obj;
    }
  },
  methods: {
    marked(text) {
      return marked(text, { sanitize: true });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-service.is-colored {
  background: #f7f0f0;

  .p-service__exampleHeading {
    background: #fff;
  }
  .p-service__problemListsItem {
    background: #fff;
    &::after {
      border-color: #fff transparent transparent transparent;
    }
  }
}

.p-service {
  padding: 50px 0 30px;

  @include desktop {
    padding: 80px 0 60px;
  }

  &__inner {
    @include desktop {
      @include c-container;
      box-sizing: border-box;
    }
  }
  &__heading {
    margin-bottom: 25px;
    width: 100%;
    position: relative;
    z-index: 20;

    &::before {
      display: inline-block;
      text-align: center;
      line-height: 2.3;
      font-size: 1.8rem;
      color: #fff;
      width: 70px;
      height: 70px;
      border-radius: 100%;
      background: #c3504f;
      position: absolute;
      top: -35px;
      left: 50%;
      transform: translateX(-35px);
      z-index: -10;
      @include desktop {
        border: none;
        width: 80px;
        height: 80px;
        font-size: 2rem;
        top: -40px;
        left: 50%;
        transform: translateX(-35px);
      }
    }
  }
  &__heading.num01::before {
    content: "01";
  }
  &__heading.num02::before {
    content: "02";
  }
  &__heading.num03::before {
    content: "03";
  }
  &__heading.num04::before {
    content: "04";
  }
  &__headingBackgound {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  }
  &__headingFilter {
    box-sizing: border-box;
    padding: 0 3rem;
    width: 100%;
    height: 110px;
    background: linear-gradient(
      left,
      rgba(195, 80, 79, 0.7) 0%,
      rgba(195, 80, 79, 0.7) 1%,
      rgba(195, 80, 79, 0.01) 98%,
      rgba(195, 80, 79, 0) 100%
    );
    @include desktop {
      height: 150px;
    }
  }
  &__headingTitleWrap {
    color: #fff;
    @include desktop {
      line-height: 3.5;
    }
  }
  &__headingTitle {
    display: block;
    padding-top: 2.4rem;
    font-size: 2.5rem;
    font-weight: bold;
    line-height: 1.4;
    @include desktop {
      padding-top: 5.4rem;
      display: inline-block;
      font-size: 3rem;
    }
  }
  &__headingSubTitle {
    display: block;
    margin-left: 0;
    font-size: 1.4rem;
    @include desktop {
      font-size: 1.5rem;
      display: inline-block;
      margin-left: 1.5rem;
      vertical-align: 5px;
    }
  }
  &__contentsInner {
    @include c-container;
  }
  &__problemLists {
    width: 100%;
    display: flex;
    box-sizing: border-box;
    margin-bottom: 15px;
    align-items: flex-start;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    @include desktop {
      align-items: stretch;
      flex-wrap: nowrap;
      justify-content: space-between;
      margin-bottom: 40px;
    }
  }
  &__problemListsItem {
    margin: 0 1px;
    padding: 1.3rem 2.5rem;
    max-width: 48%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    line-height: 1.6;
    border-radius: 4px;
    background: #fbf3f3;
    box-sizing: border-box;
    position: relative;
    min-height: 83px;

    @include desktop {
      width: auto;
      margin: 0 2px;
      font-size: 1.5rem;
      max-width: 23%;
      min-height: 70px;
    }

    &:not(:last-of-type) {
      margin-bottom: 2rem;
      @include desktop {
        margin-bottom: 0;
      }
    }

    &::after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 8px 0 8px;
      border-color: #fbf3f3 transparent transparent transparent;
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-4px);
      @include desktop {
        border-width: 14px 12px 0 12px;
        bottom: -13px;
        transform: translateX(-6px);
      }
    }
  }
  &__description {
    margin-bottom: 40px;
  }
  &__descriptionTitle {
    margin-bottom: 2.5rem;
    font-size: 2rem;
    font-weight: bold;
    color: #c3504f;
    letter-spacing: 3px;
    @include desktop {
      font-size: 2.5rem;
    }
  }
  &__descriptionText {
    line-height: 2.3;
    font-size: 1.5rem;
    @include desktop {
      font-size: 1.6rem;
    }
  }
  &__example {
    display: flex;
    margin-bottom: 40px;
    align-items: center;
    flex-wrap: wrap;
    @include desktop {
      flex-wrap: nowrap;
    }
  }
  &__exampleHeading {
    box-sizing: border-box;
    margin-bottom: 1rem;
    padding: 1rem 4rem;
    width: 100%;
    background: #fbf3f3;
    text-align: center;
    font-size: 1.4rem;
    @include desktop {
      margin-bottom: 0;
      padding: 2.4rem 4rem;
      width: auto;
      min-width: 160px;
      font-size: 1.6rem;
      font-weight: normal;
    }
  }
  &__exampleList {
    box-sizing: border-box;
    padding-left: 0;
    @include desktop {
      padding-left: 20px;
    }
  }
  &__exampleListItem {
    display: inline;
    font-weight: bold;
    @include desktop {
    }
    &::after {
      display: inline-block;
      content: "/";
      padding: 0.5rem 1rem;
    }
  }
}
</style>
