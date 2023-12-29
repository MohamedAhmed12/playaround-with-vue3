<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import { useFlash } from "@/composables/useFlash";

const {flash}=useFlash();
</script>


<template>
  <section class="flex flex-col items-start">
    <h1>home</h1>
    <TheWelcome />

    <button @click="flash('it works')" class="text-black mt-5">Flash </button>
  </section>
</template>