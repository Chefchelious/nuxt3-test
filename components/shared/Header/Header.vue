<template>
  <header>
    <HeaderDesktop v-if="!isMobile" />
    <HeaderMobile v-else />
    <q-resize-observer :debounce="1" @resize="onResize" />
  </header>
</template>

<script lang="ts" setup>
const isMobile = ref(false);

const onResize = (size: { width: number; height: number }) => {
  if (size.width <= 993) {
    isMobile.value = true;
  } else {
    isMobile.value = false;
  }
};
</script>

<style scoped lang="scss">
header {
  background-color: #fff7eb;
  padding: 8px 0;
}
</style>
