<template>
   <button :style="{ background: props.color }" @click.prevent="$emit('handle-click')">{{ props.title }}</button>
</template>

<script setup>
const props = defineProps({
   title: String,
   color: {
      type: String,
      default: '#2c3e50'
   }
});
const emits = defineEmits(['handle-click']);
</script>

<style scoped>
button {
   min-width: 100px;
   padding: 10px 16px;
   border-radius: 6px;
   border: 0;
   color: #fff;
   cursor: pointer;
}
button:hover {
   opacity: 0.8;
}
</style>