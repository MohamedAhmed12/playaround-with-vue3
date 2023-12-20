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
};
</script>

<template class="h-full grid place-items-center">
  <assignment-list :assignments="filters.inProgress" title="In Progress" />
  <assignment-list :assignments="filters.completed" title="Completed" />
</template>

