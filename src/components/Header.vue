<template>
   <header>
      <h2>{{ title }}</h2>
   </header>
</template>

<script setup>
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
