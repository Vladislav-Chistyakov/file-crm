<script setup>

</script>

<template>
  <div class="wrapper">
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

.wrapper__header {
  color: var(--gray-900);
  font-size: 18px;
  line-height: 28px;
  border-left: 1px solid red;
  border-right: 1px solid red;
  border-bottom: 1px solid red;
}

.wrapper__main {
  color: var(--gray-500);
  border-left: 1px solid red;
  border-right: 1px solid red;
}
</style>
