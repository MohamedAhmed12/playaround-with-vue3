<script>
export default {
  data() {
    return {
      active: false,
    };
  },

  methods: {
    toggle() {
      this.active = !this.active;
    },
  },
};
</script>

<template>
  <button :class="active ? 'text-red' : 'text-green'" @click="toggle">
    Click Me
  </button>
</template>

<style scoped>
html,
body {
  height: 100%;
}

body {
  display: grid;
  place-items: center;
}

.text-red {
  color: red;
}

.text-green {
  color: green;
}
</style>
