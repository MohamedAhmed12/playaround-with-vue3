<script>
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";

export default {
  data() {
    return {
      assignments: [
        { id: 1, name: "one", completed: false, tag: 'math' },
        { id: 2, name: "two", completed: false, tag: 'science' },
        { id: 3, name: "three", completed: false, tag: 'math' },
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

  components: { AssignmentList, AssignmentCreate },

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

