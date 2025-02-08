<template>
  <div
    @drop.prevent="onDrop"
    @draggenter="setActive"
    @dragover="setActive"
    @dragleave="setInactive"
    :data-active="active"
  >
    <slot :drop-zone-active="active"></slot>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const emit = defineEmit(['files-dropped'])

const active = ref(false)

function setActive () {
  active.value = true
}

function setInactive() {
  active.value = false
}


function onDrop(e) {
  setInactive()
  emit('files-dropped', [e.dateTranfer.files])
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

onUnmouted(() => {
  events.forEach(eventName = > {
    document.body.removeEventListener(eventName, preventDefault)
  })
})

</script>

<style>

</style>