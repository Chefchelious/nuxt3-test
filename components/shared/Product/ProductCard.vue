<template>
  <div class="product-card">
    <div class="product-image-wrapper">
      <img
        class="product-image"
        :src="ProductImage"
        alt="Product Image"
      />
    </div>
    <div class="product-details q-pa-sm">
      <span class="product-price">3 285 000 ₽</span>
      <p class="product-title">Hyundai Sonata 2.0 AT, 2023, 30 км</p>
    </div>
    <q-separator size="1px" color="grey" />

    <div class="card-footer row items-center no-wrap justify-between q-mt-md q-pa-sm">
      <span class="boost-text">Увеличьте количество просмотров</span>
      <q-btn class="boost-btn text-white q-pa-sm" label="Продвигать" no-caps />
    </div>

    <div class="info-block row items-center no-wrap">
      <div class="views q-mr-sm">
        <q-icon :name="`img:${EyeIcon}`" size="20px" />
        <span>255</span>
      </div>
      <div class="days-ago">
        <q-icon :name="`img:${CalendarIcon}`" size="20px" />
        <span>4 дня</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ProductImage from '~/assets/images/product-image.jpg';
import EyeIcon from '~/assets/images/eye-icon.svg';
import CalendarIcon from '~/assets/images/calendar.svg';
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  overflow: hidden;
  user-select: none;
}

.product-image-wrapper {
  border-radius: 12px;
  overflow: hidden;
  width: 100%;
  aspect-ratio: 4 / 3;

  @include md {
    aspect-ratio: 1 / 1;
  }
}

.product-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
}

.product-details {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.product-price {
  font-size: 17px;
  line-height: 20px;
  font-weight: 500;
}

.product-title {
  font-weight: 500;
  line-height: 24px;
}

.boost-btn {
  background-color: #337566;
  border-radius: 12px;
}

.boost-text {
  font-size: 13px;
  font-weight: 400;
  line-height: 18px;
}

.card-footer {
  gap: 8px;
}

.info-block {
  position: absolute;
  left: 8px;
  top: 8px;
}

.views, .days-ago {
  display: flex;
  align-items: center;
  gap: 4px;
  border-radius: 12px;
  padding: 4px 8px;
  color: #fff;
  font-size: 13px;
  line-height: 20px;
  font-weight: 500;
  background-color: rgba(29, 29, 29, 0.6);
}
</style>
