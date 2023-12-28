<script>
import AssignmentTags from "./AssignmentTags.vue";

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

  components: { AssignmentTags },
};
</script>

<template>
  <section class="text-left m-5 w-60" v-show="assignments.length">
    <div class="flex justify-between items-center">
      <h2 class="font-bold">
        {{ title }} <span>({{ assignments.length }})</span>
      </h2>

      <button
        class="bg-transparent w-5 px-0 py-2 hover:border-none"
        v-show="canToggle"
        @click="$emit('toggle')"
      >
        &times;
      </button>
    </div>

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
      <slot />
    </ul>
  </section>
</template>