<script setup>
import { inject } from "vue";

const quiz = inject("quiz");
</script>


<template>
  <div class="mt-2 flex gap-2">
    <h5>{{ quiz.name }}</h5>

    <ul class="flex gap-2">
      <li><a href="#">Get a job</a></li>
      <li><a href="#">Contact Us</a></li>
    </ul>
  </div>
</template>