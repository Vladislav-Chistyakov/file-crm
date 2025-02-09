<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
import DropZone from "@/components/DropZone.vue";
</script>

<template>
  <WrapperPage>
    <template #header>
      <div class="main-page-header">
        <h1 class="main-page-header__heading text-medium">My projects</h1>
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

        <div style="padding: 40px 120px; border: 1px solid black">
          <DropZone>
          </DropZone>
        </div>
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
  font-size: 18px;
  line-height: 28px;
}

.main-page-content__button {
  padding: 10px 16px;
  border-radius: 8px;
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
}

.main-page-content__img {
  margin-bottom: 16px;
}

.main-page-content__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  max-width: 352px;
  margin-bottom: 24px;
}

.main-page-content__info-description {
  font-size: 16px;
  line-height: 24px;
  color: var(--gray-900);
  font-weight: 500;
}

.main-page-content__info-span {
  font-size: 14px;
  line-height: 20px;
  color: var(--gray-500);
}

.main-page-content__button {
  width: fit-content;
  padding-left: 138px;
  padding-right: 138px;
}
</style>
