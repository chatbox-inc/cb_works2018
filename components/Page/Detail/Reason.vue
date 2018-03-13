<template>
  <section class="p-reason">
    <div class="p-reason__background" :style="thumbStyle">
      <div class="p-reason__backgroundFilter">
        <div class="p-reason__inner">
          <h2 class="p-reason__title">
              chatboxの<br>
              技術力と経験値が高い理由
          </h2>
          <p class="p-reason__text">chatboxではWeb制作の他にもこういうことやってるから技術力や経験値が高いんですよって感じで、冒頭に入れていたchatboxの３つのできることの裏付け・説得力がますようなライティングをお願いします。</p>
          <div class="p-reason__items">
            <reason-item v-for="index in 3" :key="index" :index="index"></reason-item>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ReasonItem from "./Reason/Item.vue";
export default {
  computed: {
    thumbStyle() {
      return { backgroundImage: `url('/images/serviceHeading_create.jpg')` }; // 現在仮画像
    }
  },
  components: {
    ReasonItem
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/scss/layout/_layout.scss";
@import "~assets/scss/object/component/_container.scss";

.p-reason {
  &__background {
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__backgroundFilter {
    background: rgba(195, 80, 79, 0.7);
  }
  &__inner {
    @include c-container;
    padding-top: 32px;
    @include desktop {
      padding-top: 35px;
    }
  }
  &__title {
    color: #ffffff;
    font-size: 30px;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }
  &__text {
    color: #ffffff;
    font-size: 16px;
    line-height: 36px;
    margin-bottom: 30px;
    @include desktop {
      margin-bottom: 60px;
    }
  }
  &__items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 70px;
    @include desktop {
      flex-wrap: nowrap;
      padding-bottom: 135px;
    }
  }
}
</style>
