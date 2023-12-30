<script setup>
import { useCounterStore } from "@/stores/counterStore.js";
const counter = useCounterStore();
</script>

<template>
  <section class="flex flex-col items-start">
    <h1>{{ counter.count }}</h1>
    <button @click="counter.increment()" class="bg-gray-600 mt-5">
      increment
    </button>
  </section>
</template>