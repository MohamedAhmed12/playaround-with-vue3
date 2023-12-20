<script>
export default {
  props: {
    assignments: Array,
    title: String,
  },
};
</script>

<template>
  <section class="text-left" v-show="assignments.length">
    <h2 class="font-bold mb-2">{{ title }}</h2>
    
    <ul class="border border-gray-600 divide-y">
      <li v-for="assignment in assignments" :key="assignment.id">
     <label class="p-2 flex justify-between items-center">
           {{ assignment.name }}
        <input
          type="checkbox"
          class="ml-2"
          v-model="assignment.completed"
        />
     </label>
      </li>
    </ul>
  </section>
</template>