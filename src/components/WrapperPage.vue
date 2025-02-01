<script setup>

</script>

<template>
  <div class="container">
    <header class="wrapper__header">
      <slot name="header" />
    </header>

    <main class="wrapper__main text-regular">
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
@import '@/assets/css/container.css';
@import '@/assets/css/colors.css';

.wrapper__header {
  color: var(--gray-900);
  font-size: 18px;
  line-height: 28px;
  border-bottom: 1px solid var(--gray-200);
  padding: 20px 0;
}

.wrapper__main {
  color: var(--gray-500);
}
</style>
