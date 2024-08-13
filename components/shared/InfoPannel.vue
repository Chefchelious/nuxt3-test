<template>
  <Container>
    <section class="content-wrapper q-pb-lg">
      <div class="desctop-info">
        <div class="img-wrapper q-mb-md">
          <img class="img" :src="LegacyImg" alt="img" />
        </div>
        <h3 class="title q-mb-sm cursor-pointer">Наследие</h3>
        <p class="stats q-mb-md">
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

        <q-btn
          :label="`${isVisibleNumber ? '+7-xxx-xxx-xx' : 'Показать номер телефона'}`"
          class="show-number-btn text-white q-py-md q-mb-lg"
          no-caps
          @click="toggleNumberVisibilyty"
        />
      </div>

      <swiper
        :slides-per-view="'auto'"
        :space-between="7.5"
        class="mySwiper"
      >
        <swiper-slide
          v-for="tab in routeTabs"
          :key="tab.id"
        >
          <q-btn
            :key="tab.id"
            :label="tab.value"
            no-caps
            class="tab text-weight-bold"
            :class="{ 'active-tab': isActiveTab(tab.route) }"
            unelevated
            :ripple="false"
            :to="tab.route"
          />
        </swiper-slide>
      </swiper>
    </section>
  </Container>
  <q-separator size="2px" color="grey-4" />
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import LegacyImg from '~/assets/images/legacy-logo.jpg';
import Premium from '~/assets/images/premium.svg';
import Star from '~/assets/images/star.svg';

interface ITabs {
  id: string;
  value: string;
  route: string;
  quantity?: number;
}

const route = useRoute();

const isVisibleNumber = ref(false);

const routeTabs = ref<ITabs[]>([
  {
    id: '1',
    value: 'Товары и услуги',
    route: '/',
  },
  {
    id: '2',
    value: 'Агенты',
    route: '/agents',
    quantity: 5,
  },
  {
    id: '3',
    value: 'О компании',
    route: '/about',
  },
]);

const toggleNumberVisibilyty = () => {
  isVisibleNumber.value = !isVisibleNumber.value;
};

const isActiveTab = (tabRoute: string) => {
  return route.path === tabRoute;
};
</script>

<style scoped lang="scss">
:deep(.q-btn .q-focus-helper) {
  display: none;
}

.content-wrapper,
.desctop-info {
  max-width: 372px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.desctop-info {
  @include md {
    display: none;
  }
}

.img-wrapper {
  overflow: hidden;
  width: 120px;
  border-radius: 20px;
}

.img {
  width: 100%;
  height: auto;
}

.title {
  font-size: 24px;
  line-height: 28px;
  font-weight: bold;
}

.stats span {
  position: relative;
}

.show-number-btn {
  min-width: 224px;
  background-color: #337566;
  border-radius: 12px;
}

.stats span:not(:last-child)::after {
  content: '•';
  font-weight: bold;
  font-size: 20px;
  color: #000;
  margin: 0 5px;
}

.mySwiper {
  @include md {
    margin-top: 32px;
  }
}

.swiper-slide {
  width: fit-content;
  display: flex;
  align-items: stretch;
}

.tab {
  border-radius: 12px;
  background-color: #e8e8e8;
  padding: 8px 12px;
}

.active-tab {
  border: 1px solid #000;
  padding: 7px 11px;
}

.quantity {
  font-weight: 500;
}
</style>
