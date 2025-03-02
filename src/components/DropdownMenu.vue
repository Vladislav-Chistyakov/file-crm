<script setup>
import { ref, toRef, onBeforeMount, onBeforeUnmount } from 'vue'

const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  buttonStyle: {
    type: String,
    default: '',
  },
});

const isOpen = ref(false)
const id = toRef(props, 'id')
const buttonStyle = toRef(props, 'buttonStyle')

function doOpenList() {
  console.warn('id: ', props.id)
  isOpen.value = !isOpen.value;
}

const test = function () {
  console.warn('test 1')
}

onBeforeMount(() => {
  //Add listener to close drop container if necessary
  window.addEventListener('click', doClick);
});

onBeforeUnmount(() => {
  // clean listener
  window.removeEventListener('click', doClick);
});
function hide() {
  isOpen.value = false;
}
function doCloseDropdown() {
  hide()
}
// click anywhere
function doClick(event) {
  if (!document.getElementById(id.value).contains(event.target)) {
    // click anywhere but not this component
    hide()
  }
}
</script>

<template>
  <div :id="id" class="dropdown">
    <button
        @click="doOpenList"
        class="test"
        :class="{ isActive: isOpen }"
        :style="buttonStyle"
    >
      <slot name="default" />
    </button>
    <div v-if="isOpen" class="dropdown-list">
      <slot name="content" />
    </div>
  </div>
</template>

<style scoped>
.test {
  position: relative;
  cursor: pointer;
  transition: 0.3s;
  border: 0px;
  white-space: nowrap;
  top: 50%;
  left: 0;
  transform: translate(0%, -50%);
}

button:focus {
  outline: 0px;
}

button:hover {
}

button.isActive {
}

.dropdown {
  position: relative;
}

.dropdown-list {
  background: red;
  margin-top: 12px;
  left: 50%;
  transform: translateX(-50%);
  position: absolute;
  white-space: nowrap;
  border-radius: 4px;
  z-index: 10;
  right: auto;
}
</style>
