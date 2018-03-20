<template>
  <section class="p-reason">
    <div class="p-reason__background" :style="thumbStyle">
      <div class="p-reason__backgroundFilter">
        <div class="p-reason__inner">
          <h2 class="p-reason__title">
              chatboxの<br>
              技術力と経験値が高い理由
          </h2>
          <p class="p-reason__description">chatboxではWeb制作の他にもこういうことやってるから技術力や経験値が高いんですよって感じで、冒頭に入れていたchatboxの３つのできることの裏付け・説得力がますようなライティングをお願いします。</p>
          <div class="p-reason__lists">
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
      return { backgroundImage: "url('/images/detail/reason.jpg')" };
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
@import "~assets/scss/object/component/_title.scss";

.p-reason {
  &__background {
    background-repeat: no-repeat;
    background-size: cover;
  }
  &__backgroundFilter {
    background: rgba(195, 80, 79, 0.7);
  }
  &__inner {
    @include c-detailContainer;
    padding-top: 30px;
    @include desktop {
      padding-top: 60px;
    }
  }
  &__title {
    color: #fff;
    font-size: 2.5rem;
    line-height: 50px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 30px;
  }
  &__description {
    color: #fff;
    font-size: 1.6rem;
    line-height: 2;
    margin-bottom: 30px;
    @include desktop {
      margin-bottom: 60px;
    }
  }
  &__lists {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-bottom: 50px;
    @include desktop {
      margin: 0 auto;
      max-width: 830px;
      flex-wrap: nowrap;
      padding-bottom: 80px;
    }
  }
}
</style>
