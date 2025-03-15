<script setup>
  import { computed } from 'vue'

  const { fileType, fileName } = defineProps({
    fileType: {
      type: String,
      default: ''
    },
    fileName: {
      type: String,
      default: ''
    }
  })

  const icons = {
    image: 'icons/image-icon.svg',
    video: 'icons/video-icon.svg',
    fig: 'icons/figma-icon.svg',
    framex: 'icons/framex-icon.svg',
    default: 'icons/file-icon.svg'
  }

  const pathIconTypeFile = computed(() => {
    const fileFormat = fileType.slice(0, fileType.indexOf('/'))
    if (fileFormat) {
      return icons[fileFormat] || icons.default
    } else if (fileName) {
      const typeFile = fileName.match(/\.([^.]+)$|$/)[1]
      return icons[typeFile] || icons.default
    }
    else {
      return icons.default
    }
  })
</script>

<template>
  <img :src="pathIconTypeFile" :alt="fileName || 'icon' " class="icon-type-file">
</template>

<style scoped>
.icon-type-file {
  display: flex;
}
</style>
