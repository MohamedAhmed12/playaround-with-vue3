<script>
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";

export default {
  data() {
    return {
      assignments: [],
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

  components: { AssignmentList, AssignmentCreate },

  beforeCreate() {
    fetch("http://localhost:3000/assignments")
      .then((response) => response.json())
      .then((assignments) => (this.assignments = assignments));
  },

  methods: {
    add(name) {
      this.assignments.push({
        name,
        completed: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
</script>

<template>
  <assignment-list :assignments="filters.inProgress" title="In Progress" />
  <assignment-list :assignments="filters.completed" title="Completed" />

  <AssignmentCreate v-on:add="add" />
</template>

