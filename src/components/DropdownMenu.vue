<script setup>
import { ref, toRef, onBeforeMount, onBeforeUnmount } from 'vue'
import { useFilesStore } from '@/store/files.js'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  fileItem: {
    type: Object,
    default: () => {}
  },
  buttonStyle: Object,
  default: () => {}
})

const storeFiles = useFilesStore()

const isOpen = ref(false)
const id = toRef(props, 'id')

function doOpenList() {
  isOpen.value = !isOpen.value;
}

onBeforeMount(() => {
  window.addEventListener('click', doClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', doClick)
})

function hide() {
  isOpen.value = false;
}

function doClick(event) {
  if (!document.getElementById(id.value).contains(event.target)) {
    hide()
  }
}

function deleteElement () {
  try {
    storeFiles.removeFile(props.fileItem.file)
  } catch (e) {
    console.error('Error remove file: ', e, props.fileItem.file)
  } finally {
    hide()
  }
}
</script>

<template>
  <div :id="id" class="dropdown">
    <button
        @click="doOpenList"
        class="dropdown__button"
        :class="{ isActive: isOpen }"
        :style="buttonStyle"
    >
      <div class="dropdown__button-wrapper">
        <span class="dropdown__button-wrapper-span" />
        <span class="dropdown__button-wrapper-span" />
        <span class="dropdown__button-wrapper-span" />
      </div>
    </button>

    <div v-if="isOpen" class="dropdown__window">
        <div class="dropdown__window-wrapper">
          <button
              @click.prevent="deleteElement"
              class="dropdown__window-button"
          >
            Удалить файл
          </button>
        </div>
    </div>
  </div>
</template>

<style scoped>
.dropdown__button {
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  border: 0;
  white-space: nowrap;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
}

.dropdown {
  position: relative;
  display: flex;
  height: 20px;
}

.dropdown__window {
  margin-top: 12px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  white-space: nowrap;
  border-radius: 4px;
  z-index: 10;
  right: auto;
}

.dropdown__button-wrapper {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 20px;
  gap: 3px
}

.dropdown__button-wrapper-span {
  display: block;
  border-radius: 100%;
  height: 3px;
  width: 3px;
  background-color: var(--gray-600);
}

.dropdown__window-wrapper {
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid var(--gray-500);
  border-radius: 8px;
  overflow: hidden;
}

.dropdown__window-button, .dropdown__window-link {
  display: flex;
  padding: 10px 16px;
  background-color: var(--gray-300);
  color: var(--gray-900);
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  transition: background-color .1s ease-in-out, color .1s ease-in-out;
  cursor: pointer;
  text-decoration: none;
  border: none;
}

.dropdown__window-button:hover, .dropdown__window-link:hover {
  background-color: var(--gray-500);
  color: white;
}

.dropdown__window-button:active, .dropdown__window-link:active {
  background-color: var(--gray-900);
  color: white;
}
</style>
