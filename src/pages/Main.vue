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
      <section class="main-page-content">
        <img src="@/assets/main-cloud.png" alt="icon" class="main-page-content__img">

        <div class="main-page-content__info">
          <p class="main-page-content__info-description">Start by uploading a file</p>
          <span class="main-page-content__info-span">Any assets used in projects will live here. Start creating by uploading your files.</span>
        </div>

        <button class="main-page-content__button">
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon" class="main-page-content__button-img">
          <span class="text-medium main-page-content__button-span">Upload</span>
        </button>
      </section>
    </template>
  </WrapperPage>
</template>

<style scoped>
@import '@/assets/css/colors.css';

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

.main-page-header__button, .main-page-content__button {
  padding: 10px 16px;
  border-radius: 10px;
  background-color: var(--primary-600);
  transition: background-color .1s ease-in-out;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 20px;
  &:hover {
    background-color: var(--button-bg-hover);
  }
  &:active {
    background-color: var(--button-bg-active);
  }
}

.main-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 48px;
}qwe
.main-page-content__info {
  text-align: center;
  max-width: 352px;
}
.main-page-content__info-description {}
.main-page-content__info-span {}

.main-page-content__button {
  width: fit-content;
  padding-left: 138px;
  padding-right: 138px;
}
</style>
