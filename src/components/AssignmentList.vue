<script>
export default {
  props: {
    assignments: Array,
    title: String,
  },
};
</script>

<template class="h-full grid place-items-center">
  <section class="text-left" v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>
    <ul>
      <li v-for="assignment in assignments" :key="assignment.id">
        {{ assignment.name }}
        <input
          type="checkbox"
          name=""
          id=""
          class="ml-2"
          v-model="assignment.completed"
        />
      </li>
    </ul>
  </section>
</template>