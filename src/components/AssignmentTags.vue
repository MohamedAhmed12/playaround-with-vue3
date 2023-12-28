<script>
export default {
  props: {
    initialTags: {
      type: Array,
      default: [],
    },
    currentTag:{
        type: String,
      default: "",
    }
  },

  computed: {
    tags() {
      return ["all", ...new Set(this.initialTags)];
    },
  },
};
</script>


<template>
  <div class="flex gap-2">
    <button
      v-for="tag in tags"
      :key="tag"
      @click="this.$emit('update:currentTag', tag)"
      class="bg-transparent border border-2 rounded px-1 py-px mb-4 text-xs"
      :class="{
        'border-blue-600 text-blue-600': tag == currentTag,
      }"
    >
      {{ tag }}
    </button>
  </div>
</template>