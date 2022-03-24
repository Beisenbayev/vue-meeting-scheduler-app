<template>
   <header>
      <h2>{{ props.title }}</h2>
      <Button title="Add new" />
   </header>
</template>

<script setup>
import Button from './Button.vue';

const props = defineProps({
   title: String
});
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
