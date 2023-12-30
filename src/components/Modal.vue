<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <header>
        <slot name="header">Default header</slot>
      </header>

      <div>
        <slot>Default body</slot>
      </div>

      <footer class="modal-footer flex justify-start">
        <slot name="footer">
          <button @click="$emit('close')">Default Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  display: grid;
  place-items: center;
}
.modal-container {
  background: white;
  padding: 1rem;
  color: black;
  width: 80vw;
  max-width: 500px;
  border-radius: 7px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}
.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}
.modal-footer button:hover {
  background: #c8c8c8;
}
</style>

