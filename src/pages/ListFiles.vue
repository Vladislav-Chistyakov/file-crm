<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
</script>

<template>
  <WrapperPage>
    <template #header>
      <div class="page-files-header">
        <h1 class="page-files-header__heading text-medium">Files uploaded</h1>

        <button class="page-files-header__button">
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon" class="page-files-header__button-img">
          <span class="text-medium page-files-header__button-span">Upload</span>
        </button>
      </div>
    </template>

    <template #main>
      <section class="page-files-content">
      </section>
    </template>
  </WrapperPage>
</template>

<style scoped>
@import '@/assets/css/colors.css';

.page-files-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  font-size: initial;
  line-height: initial;
}

.page-files-header__heading {
  font-size: initial;
  line-height: initial;
}

.page-files-header__button, .page-files-content__button {
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

.page-files-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 48px;
}

.page-files-content__img {
  margin-bottom: 16px;
}

.page-files-content__info {
  display: flex;
  flex-direction: column;
  gap: 4px;
  text-align: center;
  max-width: 352px;
  margin-bottom: 24px;
}

.page-files-content__info-description {
  font-size: 16px;
  line-height: 24px;
  color: var(--gray-900);
  font-weight: 500;
}

.page-files-content__info-span {
  font-size: 14px;
  line-height: 20px;
  color: var(--gray-500);
}

.page-files-content__button {
  width: fit-content;
  padding-left: 138px;
  padding-right: 138px;
}
</style>

