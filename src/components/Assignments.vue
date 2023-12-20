<script>
import AssignmentList from "./AssignmentList.vue";

export default {
  data() {
    return {
      assignments: [
        { id: 1, name: "one", completed: false },
        { id: 2, name: "two", completed: false },
        { id: 3, name: "three", completed: false },
      ],
      newAssignment: "",
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((elm) => !elm.completed),
        completed: this.assignments.filter((elm) => elm.completed),
      };
    },
  },

  components: { AssignmentList },

  methods: {
    add() {
      this.assignments.push({
        name: this.newAssignment,
        completed: false,
        id: this.assignments.length + 1,
      });

      this.newAssignment = "";
    },
  },
};
</script>

<template>
  <assignment-list :assignments="filters.inProgress" title="In Progress" />
  <assignment-list :assignments="filters.completed" title="Completed" />

  <form class="mt-5" @submit.prevent="add">
    <div class="text-black">
      <input
        type="text"
        placeholder="New assignment..."
        class="p-2"
        v-model="newAssignment"
      />
      <button type="submit" class="bg-white rounded p-2 ml-2">Add</button>
    </div>
  </form>
</template>

