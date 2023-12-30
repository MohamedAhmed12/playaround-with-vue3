<script setup>
defineProps({
  modelValue: {
    type: String,
    default: "",
  },
});

const emit =defineEmits(['update:modelValue'])

const onTabPress = (e) => {
  const textarea = e.target;
};
</script>


<template>
  <textarea
    ref="textarea"
    @keydown.tab.prevent="onTabPress"
    cols="30"
    rows="10"
    class="text-black"
    v-text="modelValue"
    @input="emit('update:modelValue', e.target.value)"
  ></textarea>
</template>