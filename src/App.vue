<script setup>
import { useCounterStore } from '@/store/counter.js'

const counter = useCounterStore()
</script>

<template>
  <main class="container">
    <div>Current Count: {{ counter }}</div>

    <RouterView></RouterView>
  </main>
</template>

<style>
</style>
