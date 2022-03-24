<template>
   <header>
      <h2>{{ props.title }}</h2>
      <Button
         :title="props.formIsShown ? 'Close' : 'Add new'"
         :color="props.formIsShown ? 'red' : 'green'"
         @handle-click="$emit('toggle-form-shown')"
      />
   </header>
</template>

<script setup>
import Button from './Button.vue';

const props = defineProps({
   title: String,
   formIsShown: Boolean
});
const emits = defineEmits(['toggle-form-shown'])
</script>


<style scoped>
header {
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 30px;
}
.title {
   font-size: 22px;
}
</style>
