<script setup>

</script>

<template>
  <div class="wrapper">
    <header class="wrapper__header">
      <slot name="header" />
    </header>

    <main class="wrapper__main">
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
@import '@/assets/css/container.css';

.wrapper__header {
  border-left: 1px solid red;
  border-right: 1px solid red;
  border-bottom: 1px solid red;
}

.wrapper__main {
  border-left: 1px solid red;
  border-right: 1px solid red;
}
</style>
