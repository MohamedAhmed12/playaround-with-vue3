<script>
import Assignments from "./components/Assignments.vue";
import Panel from "./components/Panel.vue";

export default {
  components: {
    Assignments,
    Panel,
  },
};
</script>

<template>
  <!-- Options API -->
  <div class="container grid gap-6">
    <!-- <Assignments /> -->
    <!-- <Panel/> -->

    <!-- Composition API -->
        <router-link :to="{name:'home'}">Home</router-link>
        <router-link :to="{name:'about'}">About</router-link>

    <router-view />
  </div>
</template>

<style scoped>
</style>
