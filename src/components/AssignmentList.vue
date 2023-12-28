<script>
import AssignmentTags from "./AssignmentTags.vue";

export default {
  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "all",
    };
  },

  computed: {
    filteredByTagAssignments() {
      if (this.currentTag === "all") return this.assignments;

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },
  },

  components: { AssignmentTags },
};
</script>

<template>
  <section class="text-left mt-5" v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{ title }} <span>({{ assignments.length }})</span>
    </h2>

    <assignment-tags
      :initialTags="assignments.map((a) => a.tag)"
      v-model:currentTag="currentTag"
    />

    <ul class="border border-gray-600 divide-y">
      <li v-for="assignment in filteredByTagAssignments" :key="assignment.id">
        <label class="p-2 flex justify-between items-center">
          {{ assignment.name }}
          <input type="checkbox" class="ml-2" v-model="assignment.completed" />
        </label>
      </li>
    </ul>
  </section>
</template>