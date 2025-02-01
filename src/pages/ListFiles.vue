<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
</script>

<template>
  <WrapperPage>
    <template #header>
      <div class="page-files-header wrapper">
        <h1 class="page-files-header__heading text-medium">Files uploaded</h1>

        <button class="page-files-header__button">
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon" class="page-files-header__button-img">
          <span class="text-medium page-files-header__button-span">Upload</span>
        </button>
      </div>
    </template>

    <template #main>
      <section class="page-files-content">
        <table class="page-files-content__table">
          <thead>
            <tr class="">
              <th class="th">File name</th>
              <th class="th">File size</th>
              <th class="th">Data Upload</th>
              <th class="th">*</th>
            </tr>
          </thead>

          <tbody>
            <tr class="tr">
              <td class="td">1</td>
              <td class="td">9.1</td>
              <td class="td">Зелёная миля</td>
              <td class="td">1999</td>
            </tr>
            <tr class="tr">
              <td class="td">2</td>
              <td class="td">9.1</td>
              <td class="td">Побег из Шоушенка</td>
              <td class="td">1994</td>
            </tr>
            <tr class="tr">
              <td class="td">3</td>
              <td class="td">8.6</td>
              <td class="td">Властелин колец: Возвращение Короля</td>
              <td class="td">2003</td>
            </tr>
          </tbody>
        </table>
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
  width: 100%;
}

.page-files-content__table {
  width: 100%;
}

.th, .td {
  padding: 12px 26px;
  text-align: start;
}

.tr:nth-child(odd) {
  background-color: white;
}

.tr:nth-child(even) {
  background-color: var(--gray-50);
}
</style>

