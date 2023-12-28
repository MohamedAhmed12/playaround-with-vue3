<script>
import AssignmentTags from "./AssignmentTags.vue";
import Panel from "./Panel.vue";

export default {
  props: {
    assignments: Array,
    title: String,
    canToggle: {
      type: Boolean,
      default: false,
    },
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

  components: { AssignmentTags, Panel },
};
</script>

<template>
  <Panel v-show="assignments.length" class="w-60">
    <div class="flex justify-between items-start">
      <h2 class="font-bold mb-2">
        {{ title }}
        <span>({{ assignments.length }})</span>
      </h2>

      <button
        v-show="canToggle"
        @click="$emit('toggle')"
        class="bg-transparent w-5 p-0 hover:border-none"
      >
        x
      </button>
    </div>

    <assignment-tags
      v-model:currentTag="currentTag"
      :initial-tags="assignments.map((a) => a.tag)"
    ></assignment-tags>

    <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
      <li v-for="assignment in filteredByTagAssignments" :key="assignment.id">
        <label class="p-2 flex justify-between items-center">
          {{ assignment.name }}
          <input type="checkbox" class="ml-2" v-model="assignment.completed" />
        </label>
      </li>
    </ul>

    <slot></slot>
  </Panel>
</template>