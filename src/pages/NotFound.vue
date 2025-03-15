<script setup>

import WrapperPage from "@/components/WrapperPage.vue";
</script>

<template>
  <WrapperPage>
    <template #header>
      <div>404 - Такой страницы не существует, <router-link to="/">вернитель на главную</router-link></div>
    </template>
  </WrapperPage>
</template>

<style scoped>

</style>