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
    image: 'src/assets/icons/image-icon.svg',
    video: 'src/assets/icons/video-icon.svg',
    fig: 'src/assets/icons/figma-icon.svg',
    framex: 'src/assets/icons/framex-icon.svg',
    default: 'src/assets/icons/file-icon.svg'
  }

  const iconTypeFile = computed(() => {
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
  <img :src="iconTypeFile" :alt="fileName || 'icon' " class="icon-type-file">
</template>

<style scoped>
.icon-type-file {
  display: flex;
}
</style>
