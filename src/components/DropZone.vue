<template>
  <div
    @drop.prevent="onDrop"
    @draggenter="setActive"
    @dragover="setActive"
    @dragleave="setInactive"
    :data-active="active"
  >
    <slot :drop-zone-active="active">
      <div style="background-color: #7F56D9; padding: 20px"></div>
    </slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmits(['files-dropped'])

const active = ref(false)
let inActiveTimeout = null

function setActive () {
  active.value = true
  clearTimeout(inActiveTimeout)
}

function setInactive() {
  inActiveTimeout = setTimeout(() => {
    active.value = false
  }, 50)
}


function onDrop(e) {
  setInactive()
  emit('files-dropped', [...e.dataTransfer.files])
}

function preventDefault(e) {
  e.preventDefault()
}

const events = ['dragenter', 'dragover', 'dragleave', 'drop']

onMounted(() => {
  events.forEach(eventName => {
    document.body.addEventListener(eventName, preventDefault)
  })
})

onUnmounted(() => {
  events.forEach(eventName => {
    document.body.removeEventListener(eventName, preventDefault)
  })
})

</script>

<style>

</style>