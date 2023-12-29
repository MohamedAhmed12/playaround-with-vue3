<script setup>
import { ref } from "vue";

let welcomTxt = ref("Welcome");
const changeWelcome = () => {
  welcomTxt.value = "changed";
};
</script>


<template>
  <h1 class="my-4">{{ welcomTxt }}</h1>
  <button @click="changeWelcome" class="text-black">changeWelcome Button</button>
</template>