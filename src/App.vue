<template>
  <Header title="Meeting Scheduler" />
  <TaskForm />
</template>

<script setup>
import Header from './components/Header.vue';
import TaskForm from './components/TaskForm.vue';

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  min-height: 100vh;
  padding: 50px;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1;
  font-size: 14px;
  color: #2c3e50;
}
input {
  padding: 10px 15px;
  border-radius: 6px;
  border: 1px solid #c3c3c3;
}
#app {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  border: 2px solid #2c3e50;
  border-radius: 6px;
}
</style>

