<script setup>
import TheWelcome from "@/components/TheWelcome.vue";
import TabbableTextarea from "@/components/TabbableTextarea.vue";
import Quiz from "@/components/Quiz/index.vue";
import { useFlash } from "@/composables/useFlash";
import { useStorage } from "@/composables/useStorage";
import { ref } from "vue";

const comment = ref("initial comment");
const { flash } = useFlash();
const food = useStorage("food", "tacos");
const age = useStorage("age", "29");
const object = useStorage("obj", { one: "1" });
</script>

<template>
  <section class="flex flex-col items-start">
    <!-- <h1>home</h1>
    <TheWelcome />

    <button @click="flash('it works')" class="text-black my-5">Flash</button>

    <p>
      What is your fav food?
      <input type="text" class="text-black ml-2 px-2 my-2" v-model="food" />
    </p>
    <p>
      How old are you?
      <input type="text" class="text-black ml-2 px-2 my-2" v-model="age" />
    </p>

    <form>
      <TabbableTextarea v-model="comment" />
    </form> -->

    <Quiz :quiz="{ name: 'First quiz', questions: [] }" />
  </section>
</template>