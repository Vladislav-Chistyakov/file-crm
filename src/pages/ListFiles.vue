<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
import { useFilesStore } from '@/store/files.js'
import {storeToRefs} from "pinia";

const storeFiles = useFilesStore()
const { filesArray } = storeToRefs(storeFiles)
</script>

<template>
  <WrapperPage>
    <template #header>
      <div class="page-files-header wrapper">
        <h1 class="page-files-header__heading text-medium">Files uploaded</h1>

        <label  for="file-input" class="page-files-header__label">
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon" class="page-files-header__label-img">
          <span class="text-medium page-files-header__label-span">Upload</span>
          <input class="page-files-header__label-input" type="file" id="file-input" multiple @change="storeFiles.onInputChange">
        </label>
      </div>
    </template>

    <template #main>
      <section class="page-files-content">
        <table class="page-files-content__table table" border="0" cellpadding="0" cellspacing="0">
          <thead class="table__thead">
            <tr class="table__thead-tr">
              <th class="table__thead-th">File name</th>
              <th class="table__thead-th">File size</th>
              <th class="table__thead-th">Data Upload</th>
              <th class="table__thead-th">*</th>
            </tr>
          </thead>

          <tbody class="table__tbody">
          {{ filesArray }}
            <tr class="table__tbody-tr" v-for="(fileItem, index) in filesArray"  :key="index">
              <td class="table__tbody-td">
                <div class="table__tbody-td__name">
                  <div class="table__tbody-td__name-circle">
                    <img src="@/assets/icons/file-icon.svg" alt="file-icon" class="table__tbody-td__name-circle-image">
                  </div>

                  <div class="table__tbody-td__name-info">
                    <p class="table__tbody-td__name-info-description">{{ fileItem.name }}</p>
                    <span class="table__tbody-td__name-info-size text-gray-500">{{ fileItem.size }}</span>
                  </div>
                </div>
              </td>

              <td class="table__tbody-td text-gray-500">{{ fileItem.size }}</td>

              <td class="table__tbody-td text-gray-500">{{ fileItem.date }}</td>

              <td class="table__tbody-td">
                <button class="table__tbody-td-button" @click.prevent="storeFiles.removeFile(fileItem.file)">
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                </button>
              </td>
            </tr>

            <tr class="table__tbody-tr">
              <td class="table__tbody-td">
                <div class="table__tbody-td__name">
                  <div class="table__tbody-td__name-circle">
                    <img src="@/assets/icons/file-icon.svg" alt="file-icon" class="table__tbody-td__name-circle-image">
                  </div>

                  <div class="table__tbody-td__name-info">
                    <p class="table__tbody-td__name-info-description">Tech requirements.pdf</p>
                    <span class="table__tbody-td__name-info-size text-gray-500">200 KB</span>
                  </div>
                </div>
              </td>

              <td class="table__tbody-td text-gray-500">200 KB</td>

              <td class="table__tbody-td text-gray-500">Jan 4, 2022</td>

              <td class="table__tbody-td">
                <button class="table__tbody-td-button">
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                </button>
              </td>
            </tr>

            <tr class="table__tbody-tr">
              <td class="table__tbody-td">
                <div class="table__tbody-td__name">
                  <div class="table__tbody-td__name-circle">
                    <img src="@/assets/icons/file-icon.svg" alt="file-icon" class="table__tbody-td__name-circle-image">
                  </div>

                  <div class="table__tbody-td__name-info">
                    <p class="table__tbody-td__name-info-description">Tech requirements.pdf</p>
                    <span class="table__tbody-td__name-info-size text-gray-500">200 KB</span>
                  </div>
                </div>
              </td>

              <td class="table__tbody-td text-gray-500">200 KB</td>

              <td class="table__tbody-td text-gray-500">Jan 4, 2022</td>

              <td class="table__tbody-td">
                <button class="table__tbody-td-button">
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                  <span class="table__tbody-td-button-span" />
                </button>
              </td>
            </tr>

            <tr class="table__tbody-tr">
              <td class="table__tbody-td">
                <div class="table__tbody-td__name">
                  <div class="table__tbody-td__name-circle">
                    <img src="@/assets/icons/file-icon.svg" alt="file-icon" class="table__tbody-td__name-circle-image">
                  </div>

                  <div class="table__tbody-td__name-info">
                    <p class="table__tbody-td__name-info-description">Tech requirements.pdf</p>
                    <span class="table__tbody-td__name-info-size text-gray-500">200 KB</span>
                  </div>
                </div>
              </td>

              <td class="table__tbody-td text-gray-500">200 KB</td>

              <td class="table__tbody-td text-gray-500">Jan 4, 2022</td>

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

.page-files-header__label {
  position: relative;
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

.page-files-header__label-input {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}

.page-files-content {
  width: 100%;
}

.page-files-content__table {
  width: 100%;
}

.table__thead-th {
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  border-bottom: 1px solid var(--gray-200);
}

.table__tbody {}
.table__tbody-tr {}

.table__tbody-td {
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid var(--gray-200);
  text-wrap: nowrap;
}

.table__thead-th, .table__tbody-td {
  padding-left: 24px;
  padding-right: 24px;
  text-align: start;
}

.table__thead-th:nth-child(odd) {
  background-color: white;
}

.table__tbody-tr:nth-child(odd) {
  background-color: var(--gray-300);
}

.table__tbody-tr:nth-child(even) {
  background-color: var(--gray-200);
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

.table__tbody-td__name {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
}

.table__tbody-td__name-circle {
  height: 40px;
  width: 40px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-100);
}

.table__tbody-td__name-info {

}

.table__tbody-td__name-info-description {
  font-size: 14px;
  line-height: 20px;
  color: var(--gray-900);
  font-weight: 500;
}

.table__tbody-td__name-info-size {
  text-wrap: nowrap;
}

.text-gray-500 {
  color: var(--gray-500);
  font-size: 14px;
  line-height: 20px;
  font-weight: 400;
}
</style>

