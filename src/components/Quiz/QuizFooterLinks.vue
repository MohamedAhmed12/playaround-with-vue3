<script setup>
import { state } from "@/stores/quizStore.js";
</script>


<template>
  <div class="mt-2 flex gap-4 items-center">
    <h5>{{ state.name }}</h5>

    <button @click="state.name = 'New quiz name'" class="bg-gray-600">Change quiz name</button>

    <ul class="flex gap-2">
      <li><a href="#">Get a job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>