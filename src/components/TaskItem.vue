<template></template>

<script setup></script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 5px 5px 10px;
  background: #f8f8f8;
  border-left: 4px solid #f8f8f8;
  user-select: none;
}
.task-item.is-important {
  border-left: 4px solid green;
}
.task-item b {
  width: 16px;
  min-width: 16px;
  max-width: 16px;
  height: 16px;
  min-height: 16px;
  max-height: 16px;
  font-size: 16px;
  cursor: pointer;
}
.task-item b:hover {
  color: red;
}
</style>