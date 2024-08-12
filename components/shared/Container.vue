<template>
  <div class="container" :style="{ padding: `0 ${paddingX}px` }"><slot /></div>
</template>

<script setup lang="ts">
interface IProps {
  paddingX?: 0 | 16 | 32;
}

withDefaults(defineProps<IProps>(), {
  paddingX: 32,
});
</script>

<style scoped lang="scss">
.container {
  max-width: 1809px;
  padding: 0 32px;
  margin: 0 auto;
}
</style>
