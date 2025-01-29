<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
</script>

<template>
  <WrapperPage>
    <template #header>
      <div class="main-page-header">
        <h1 class="main-page-header__heading text-medium">My projects</h1>

        <button class="main-page-header__button">
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon" class="main-page-header__button-img">
          <span class="text-medium main-page-header__button-span">Upload</span>
        </button>
      </div>
    </template>

    <template #main>
      <div>
        test
      </div>
    </template>
  </WrapperPage>
</template>

<style scoped>
.main-page-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: initial;
  line-height: initial;
}

.main-page-header__heading {
  font-size: initial;
  line-height: initial;
}

.main-page-header__button {
}

.main-page-header__button-img {
}

.main-page-header__button-span {
}

</style>
