<script>
import Assignments from "./components/Assignments.vue";
import Panel from './components/Panel.vue';

export default {
  components: {
    Assignments,
    Panel,
  },
};
</script>

<template>
<div class="grid gap-6">
  <Assignments />
  <Panel/>
</div>
</template>

<style scoped>
</style>
