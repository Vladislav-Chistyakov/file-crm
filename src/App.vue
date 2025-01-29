<script setup>
import { useCounterStore } from '@/store/counter.js'

const counter = useCounterStore()
</script>

<template>
  <div class="text-inter text-regular">
    <!--    <div>Current Count: {{ counter }}</div>-->
    <RouterView></RouterView>
  </div>
</template>

<style>
</style>