<script setup>
import QuizHeader from "./QuizHeader.vue";
import QuizQuestion from "./QuizQuestion.vue";
import QuizFooter from "./QuizFooter.vue";
import { provide } from "vue";

const props = defineProps({
  quiz: {
    type: Object,
    default: {},
  },
});

provide("quiz", props.quiz);
</script>


<template>
  <QuizHeader />
  <QuizQuestion />
  <QuizFooter />
</template>