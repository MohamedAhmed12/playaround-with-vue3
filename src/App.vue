<script>
export default {
  data() {
    return {
      greeting: "Hello World",
    };
  },

  mounted(){
    setTimeout(()=>{
        this.greeting = 'changed'
    }, 3000)
  }
};
</script>

<template>
  <input type="text" v-model="greeting" />
  <p>
    {{ greeting }}
  </p>
</template>

<style scoped>
</style>
