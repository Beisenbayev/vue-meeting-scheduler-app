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

