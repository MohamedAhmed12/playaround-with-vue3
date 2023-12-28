<script>
import AssignmentList from "./AssignmentList.vue";
import AssignmentCreate from "./AssignmentCreate.vue";

export default {
  data() {
    return {
      assignments: [],
      newAssignment: "",
      showCompleted: true,
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
  <section class="flex gap">
    <assignment-list :assignments="filters.inProgress" title="In Progress">
      <AssignmentCreate v-on:add="add" class="mt-3"/>
    </assignment-list>

    <assignment-list
      v-if="showCompleted"
      :assignments="filters.completed"
      title="Completed"
      can-toggle
      @toggle="showCompleted = !showCompleted"
    />
  </section>
</template>

