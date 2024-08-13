<template>
  <Container>
    <div class="select-wrapper">
      <q-select
        v-model="modelValue"
        :options="['one', 'two', 'three']"
        class="col-3 q-pa-none field-36"
        style="border: 1px solid #DBDBDB; border-radius: 12px; background-color: #EDEDED"
        borderless
        popup-content-class="bg-grey-2"
      >
        <template v-if="!modelValue" #selected>
          <div class="text-weight-regular text-black placeholder-size">Все товары и услуги</div>
        </template>
      </q-select>
    </div>
    <div class="product-list">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  </Container>
</template>

<script setup lang="ts">
const modelValue = ref('');
</script>

<style scoped lang="scss">
.select-wrapper {
  max-width: 443px;
  margin: 26px auto;
}

.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
  margin-bottom: 73px;
}

@include xl {
  .product-list {
    grid-template-columns: repeat(3, 1fr);
  }
}

@include lg {
  .product-list {
    grid-template-columns: repeat(2, 1fr);
  }
}

@include md {
  .product-list {
    grid-template-columns: 1fr;
  }
}
</style>
