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
  <form class="mt-5" @submit.prevent="add">
    <div class="text-black">
      <input
        type="text"
        placeholder="New assignment..."
        class="p-2"
        v-model="newAssignment"
      />
      <button type="submit" class="bg-white rounded p-2 ml-2">Add</button>
    </div>
  </form>
</template>

