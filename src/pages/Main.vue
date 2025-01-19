<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
</script>

<template>
  <WrapperPage>
    <template #header>
      <div class="">
        <h1 class="text-medium">My projects</h1>

        <button>
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon">
          <span class="text-medium">Upload</span>
        </button>
      </div>
    </template>

    <template #main>
      test
    </template>
  </WrapperPage>
</template>

<style scoped>

</style>
