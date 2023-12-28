<script>
export default {
  props: {
    assignments: Array,
    title: String,
  },

  data() {
    return {
      currentTag: "",
    };
  },

  computed: {
    filteredByTagAssignments() {
      if (this.currentTag === "all") return this.assignments;

      return this.assignments.filter((a) => a.tag === this.currentTag);
    },

    tags() {
      return ["all", ...new Set(this.assignments.map((a) => a.tag))];
    },
  },
};
</script>

<template>
  <section class="text-left mt-5" v-show="assignments.length">
    <h2 class="font-bold mb-2">
      {{ title }} <span>({{ assignments.length }})</span>
    </h2>

    <div class="flex gap-2">
      <button
        v-for="tag in tags"
        :key="tag"
        @click="currentTag = tag"
        class="bg-transparent border border-white border-2 rounded px-1 py-px mb-4 text-xs"
        :class="{
          'border-blue-500 text-blue-500': tag == currentTag,
        }"
      >
        {{ tag }}
      </button>
    </div>

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