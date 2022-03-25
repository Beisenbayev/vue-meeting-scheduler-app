<template>
  <div
    :class="['meeting-item', props.isImportant && 'is-important']"
    @dblclick="store.dispatch('updateMeeting', props.id)"
  >
    <p>{{ props.title }}</p>
    <b @click="store.dispatch('deleteMeeting', props.id)">x</b>
  </div>
</template>

<script setup>
import { useStore } from "vuex";

const store = useStore();
const props = defineProps({
  id: Number,
  title: String,
  isImportant: Boolean,
});

</script>

<style scoped>
.meeting-item {
  display: flex;
  justify-content: space-between;
  gap: 10px;
  padding: 5px 5px 5px 10px;
  background: #f8f8f8;
  border-left: 4px solid #f8f8f8;
  user-select: none;
}
.meeting-item.is-important {
  border-left: 4px solid green;
}
.meeting-item b {
  width: 16px;
  min-width: 16px;
  max-width: 16px;
  height: 16px;
  min-height: 16px;
  max-height: 16px;
  font-size: 16px;
  cursor: pointer;
}
.meeting-item b:hover {
  color: red;
}
</style>
