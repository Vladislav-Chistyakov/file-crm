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
        <table class="page-files-content__table table">
          <thead class="table__thead">
            <tr class="table__thead-tr">
              <th class="table__thead-th">File name</th>
              <th class="table__thead-th">File size</th>
              <th class="table__thead-th">Data Upload</th>
              <th class="table__thead-th">*</th>
            </tr>
          </thead>

          <tbody class="table__tbody">
            <tr class="table__tbody-tr">
              <td class="table__tbody-td">
                <div class="table__tbody-td__name">
                  <div class="table__tbody-td__name-circle">
                    <img src="@/assets/icons/file-icon.svg" alt="file-icon" class="table__tbody-td__name-circle-image">
                  </div>

                  <div class="table__tbody-td__name-info">
                    <p class="table__tbody-td__name-info-strong">Tech requirements.pdf</p>
                    <span class="table__tbody-td__name-info-size">200 KB</span>
                  </div>
                </div>
              </td>
              
              <td class="table__tbody-td">200 KB</td>
              
              <td class="table__tbody-td">Jan 4, 2022</td>
              
              <td class="table__tbody-td">
                <button class="table__tbody-td-button">
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                </button>
              </td>
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


.table__thead {}
.table__thead-tr {}
.table__thead-th {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
}

.table__tbody {}
.table__tbody-tr {}

.table__tbody-td {
  padding-top: 16px;
  padding-bottom: 16px;
}

.table__thead-th, .table__tbody-td {
  padding-left: 24px;
  padding-right: 24px;
  text-align: start;
}
.table__tbody-tr:nth-child(odd), .table__thead-th:nth-child(odd) {
  background-color: white;
}

.table__tbody-tr:nth-child(even) {
  background-color: var(--gray-50);
}

.table__tbody-td-button {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  gap: 3px
}

.table__tbody-td-button-span {
  display: block;
  border-radius: 100%;
  height: 3px;
  width: 3px;
  background-color: var(--gray-600);
}
</style>

