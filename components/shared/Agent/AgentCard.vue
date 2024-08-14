<!--<template>-->
<!--  <div class="card">-->
<!--    <div class="img-wrapper">-->
<!--      <img :src="AgentImageSecond" alt="img" class="img" />-->
<!--    </div>-->

<!--    <div class="card-content">-->
<!--      <h4 class="title">Дмитрий Хитрый</h4>-->
<!--      <p class="stats q-mb-sm">-->
<!--        <span>-->
<!--          <q-icon :name="`img:${Premium}`" />-->
<!--          Документы проверены-->
<!--        </span>-->
<!--        <span>-->
<!--          <q-icon :name="`img:${Star}`" />-->
<!--          4.7-->
<!--        </span>-->
<!--        <span>19 отзывов</span>-->
<!--      </p>-->

<!--      <div class="description">-->
<!--        Помог справиться с потерей и организовать похороны для 126 семей ну и-->
<!--        еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import AgentImage from '~/assets/images/agent-image.jpg';-->
<!--import AgentImageSecond from '~/assets/images/agent-image-2.jpg';-->
<!--import Premium from 'assets/images/premium.svg';-->
<!--import Star from 'assets/images/star.svg';-->
<!--</script>-->

<!--<style scoped lang="scss">-->
<!--.card {-->
<!--  display: flex;-->
<!--  gap: 20px;-->
<!--  padding: 20px;-->
<!--  background-color: #f5f5f5;-->
<!--  border-radius: 20px;-->
<!--}-->

<!--.img-wrapper {-->
<!--  flex: 0 1 140px;-->
<!--  border-radius: 12px;-->
<!--  overflow: hidden;-->
<!--  width: 140px;-->
<!--  height: 140px;-->
<!--}-->

<!--.img {-->
<!--  width: 100%;-->
<!--  height: 100%;-->
<!--  object-fit: cover;-->
<!--  object-position: center;-->
<!--}-->

<!--.card-content {-->
<!--  flex: 1;-->
<!--}-->

<!--.stats span {-->
<!--  position: relative;-->
<!--}-->

<!--.stats span:not(:last-child)::after {-->
<!--  content: '•';-->
<!--  font-weight: bold;-->
<!--  font-size: 20px;-->
<!--  color: #000;-->
<!--  margin: 0 5px;-->
<!--}-->

<!--.description {-->
<!--  color: #0F0F0F;-->
<!--  -webkit-line-clamp: 3;-->
<!--  display: -webkit-box;-->
<!--  -webkit-box-orient: vertical;-->
<!--  overflow: hidden;-->
<!--}-->
<!--</style>-->

<template>
  <div class="card">
    <div class="img-wrapper">
      <img :src="AgentImage" alt="img" class="img" />
    </div>

    <div class="content">
      <h4 class="title">Дмитрий Хитрый</h4>
      <p class="stats q-mb-sm">
        <span>
          <q-icon :name="`img:${Premium}`" />
          Документы проверены
        </span>
        <span>
          <q-icon :name="`img:${Star}`" />
          4.7
        </span>
        <span>19 отзывов</span>
      </p>
    </div>

    <div class="description">
      <p>
        Помог справиться с потерей и организовать похороны для 126 семей ну и
        еще чуть описания, чтобы дойти до конца строки и текст будет отсекаться
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AgentImage from '~/assets/images/agent-image.jpg';
import Premium from 'assets/images/premium.svg';
import Star from 'assets/images/star.svg';
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 10px;
  padding: 20px;
  grid-auto-rows: min-content;
  grid-template-rows: auto auto;
  align-items: start;
  background-color: #f5f5f5;
  border-radius: 20px;

  @include md {
    grid-template-columns: 47px 1fr;
    grid-template-rows: auto 1fr;
    row-gap: 0;
  }
}

.card + .card {
  margin-top: 20px;
}

.img-wrapper {
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-radius: 12px;
  overflow: hidden;
  width: 140px;
  height: 140px;

  @include md {
    grid-row: 1 / 2;
    width: 48px;
    height: 48px;
  }
}

.title {
  font-size: 24px;
  font-weight: 600;
  line-height: 28px;

  @include md {
    font-size: 20px;
  }
}

.content {
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  align-self: start;
}

.stats {
  display: flex;
  gap: 10px;
  align-items: center;
}

.description {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  color: #0f0f0f;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;

  @include md {
    grid-column: 1 / 3;
  }
}

.img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}
</style>
