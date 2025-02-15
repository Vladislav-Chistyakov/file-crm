<script setup>
import WrapperPage from '@/components/WrapperPage.vue'
import DropZone from '@/components/DropZone.vue'
import { ref } from 'vue'
import { useFilesStore } from '@/store/files.js'
import { useRouter } from 'vue-router'

const { addFiles, onInputChange } = useFilesStore()
const activeDrop = ref(false)
const router = useRouter()

const goToFilesList = async () => {
  activeDrop.value = false
  await router.push('/list-files')
}
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
        <DropZone class="main-page-content__drop-zone"
                  @files-dropped="addFiles"
                  @dragover="activeDrop = true"
                  @dragleave="activeDrop = false"
                  @dragend="activeDrop = false"
                  @drop="goToFilesList"
                  #default="{ dropZoneActive }"
        >
          <div class="main-page-content__drop-zone-block" :class="{ 'active-drop' : activeDrop }">
            <img src="@/assets/main-cloud.png" alt="icon" class="main-page-content__img">
          </div>
        </DropZone>

        <div class="main-page-content__info">
          <p class="main-page-content__info-description">Start by uploading a file</p>
          <span class="main-page-content__info-span">Any assets used in projects will live here. Start creating by uploading your files.</span>
        </div>

        <label  for="file-input" class="main-page-content__label">
          <img src="@/assets/icons/cloud-icon.svg" alt="cloud-icon" class="main-page-content__label-img">
          <span class="text-medium main-page-content__label-span">Upload</span>
          <input class="main-page-content__label-input" type="file" id="file-input" multiple @change="onInputChange">
        </label>
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

.main-page-content__label {
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

.main-page-content__label-input {
  position: absolute;
  visibility: hidden;
  opacity: 0;
}

.main-page-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0 48px;
}

.main-page-content__drop-zone-block {
  display: flex;
  height: fit-content;
  padding: 7px;
  border: 1px solid transparent;
  background-color: transparent;
  margin-bottom: 8px;
  border-radius: 10px;
  transition: background-color .1s ease-in, border .1s ease-in;
}

.main-page-content__drop-zone-block.active-drop {
  border: 1px solid var(--drop-zone-border);
  background-color: var(--drop-zone-bg);
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

.main-page-content__label {
  width: fit-content;
  padding-left: 138px;
  padding-right: 138px;
}
</style>
