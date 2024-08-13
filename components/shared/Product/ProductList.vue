<template>
<Container>
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

</script>

<style scoped lang="scss">
.product-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 21px;
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
