<script setup>
import { counterStore } from "@/stores/counterStore.js";
</script>

<template>
  <section class="flex flex-col items-start">
    <h1>{{ counterStore.count }}</h1>
    <button @click="counterStore.increment()" class="bg-gray-600 mt-5">increment</button>
  </section>
</template>