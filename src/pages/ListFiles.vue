<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
import { useFilesStore } from '@/store/files.js'
import { storeToRefs } from 'pinia'
import DropdownMenu from '@/components/DropdownMenu.vue'
import IconTypeFile from '@/components/IconTypeFile.vue'
import { computed } from 'vue'

const storeFiles = useFilesStore()
const { filesArray, pendingGetFiles } = storeToRefs(storeFiles)
const files = computed(() => filesArray.value)

storeFiles.getFileListBd()
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
            <template v-if="filesArray.length > 0">
              <tr class="table__tbody-tr" v-for="(fileItem, index) in filesArray" :key="index" ref="items">
                <td class="table__tbody-td">
                  <div class="table__tbody-td__name">
                    <div class="table__tbody-td__name-circle">
                      <IconTypeFile :file-type="fileItem.type" :file-name="fileItem.name" />
                    </div>

                    <div class="table__tbody-td__name-info">
                      <p :title="fileItem.name" class="table__tbody-td__name-info-description">{{ fileItem.name }}</p>
                        <span class="table__tbody-td__name-info-size text-gray-500">{{ fileItem.size }}</span>
                    </div>
                  </div>
                </td>

                <td class="table__tbody-td text-gray-500">{{ fileItem.size }}</td>

                <td class="table__tbody-td text-gray-500">{{ fileItem.date }}</td>

                <td class="table__tbody-td">
                  <div class="table__tbody-td-button-block">
                    <DropdownMenu :id="fileItem.file.id + 'drop-menu'" :fileItem="fileItem" />
                  </div>
                </td>
              </tr>
            </template>

            <template v-else-if="pendingGetFiles && !filesArray.length">
              <tr class="table__tbody-tr">
                <td class="table__tbody-td td-not-content " colspan="4">
                  <div class="loader" />
                </td>
              </tr>
            </template>

            <template v-else>
              <tr class="table__tbody-tr">
                <td class="table__tbody-td td-not-content " colspan="4">
                  Нет информации о файлах
                </td>
              </tr>
            </template>
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
  overflow: auto;
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

.table__tbody-td-button-block {
  position: relative;
  display: flex;
  width: fit-content;
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

.table__tbody-td__name-info-description {
  font-size: 14px;
  line-height: 20px;
  color: var(--gray-900);
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 300px;
  width: auto;
  overflow: hidden;
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

.td-not-content {
  text-align: center;
  padding-top: 60px;
  padding-bottom: 60px;
}

.td-pending-content {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* HTML: <div class="loader"></div> */
.loader {
  margin: 0 auto;
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid #514b82;
  animation:
      l20-1 0.8s infinite linear alternate,
      l20-2 1.6s infinite linear;
}
@keyframes l20-1{
  0%    {clip-path: polygon(50% 50%,0       0,  50%   0%,  50%    0%, 50%    0%, 50%    0%, 50%    0% )}
  12.5% {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100%   0%, 100%   0%, 100%   0% )}
  25%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 100% 100%, 100% 100% )}
  50%   {clip-path: polygon(50% 50%,0       0,  50%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
  62.5% {clip-path: polygon(50% 50%,100%    0, 100%   0%,  100%   0%, 100% 100%, 50%  100%, 0%   100% )}
  75%   {clip-path: polygon(50% 50%,100% 100%, 100% 100%,  100% 100%, 100% 100%, 50%  100%, 0%   100% )}
  100%  {clip-path: polygon(50% 50%,50%  100%,  50% 100%,   50% 100%,  50% 100%, 50%  100%, 0%   100% )}
}
@keyframes l20-2{
  0%    {transform:scaleY(1)  rotate(0deg)}
  49.99%{transform:scaleY(1)  rotate(135deg)}
  50%   {transform:scaleY(-1) rotate(0deg)}
  100%  {transform:scaleY(-1) rotate(-135deg)}
}
</style>

