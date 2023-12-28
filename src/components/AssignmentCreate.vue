<script>
export default {
  data() {
    return {
      newAssignment: "",
    };
  },

  methods: {
    add() {
      this.$emit("add", this.newAssignment);
      this.newAssignment = "";
    },
  },
};
</script>

<template>
  <form @submit.prevent="add">
    <div class="text-black flex max-w-full">
      <input
        type="text"
        placeholder="New assignment..."
        class="p-2 w-full"
        v-model="newAssignment"
      />
      <button type="submit" class="bg-white rounded-none p-2 ml-2">Add</button>
    </div>
  </form>
</template>

