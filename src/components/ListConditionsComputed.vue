<script>
export default {
  data() {
    return {
      assignments: [
        { id: 1, name: "one", completed: false },
        { id: 2, name: "two", completed: false },
        { id: 3, name: "three", completed: false },
      ],
    };
  },

  computed: {
    completedAssignments() {
      return this.assignments.filter((elm) => elm.completed);
    },
    InProgressAssignments() {
      return this.assignments.filter((elm) => !elm.completed);
    },
  },
};
</script>

<template class="h-full grid place-items-center">
  <section class="text-left" v-show="InProgressAssignments.length">
    <h2 class="font-bold mb-2">In Progress</h2>
    <ul>
      <li v-for="assignment in InProgressAssignments" :key="assignment.id">
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

  <section class="text-left" v-show="completedAssignments.length">
    <h2 class="font-bold mb-2">Done</h2>
    <ul>
      <li v-for="assignment in completedAssignments" :key="assignment.id">
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

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

.text-red {
  color: red;
}

.text-green {
  color: green;
}
</style>
