import { reactive } from "vue";

export const counterStore = reactive({
  // state
  count: 0,

  // actions
  increment() {
    this.count++;
  },
});
