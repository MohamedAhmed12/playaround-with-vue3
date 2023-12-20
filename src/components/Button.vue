<script>
export default {
  data() {
    return { processing: true };
  },

  props: {
    type: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<template class="h-full grid place-items-center">
  <button
    :class="{
        'border rounded ml-2 px-5 py-2 disabled:cursor-not-allowed': true,
        'bg-blue-200 hover:bg-blue-400': type==='primary',
        'bg-gray-200 hover:bg-gray-400': type==='secondary',
        }"
    :disabled="processing"
  >
    <slot />
  </button>
</template>