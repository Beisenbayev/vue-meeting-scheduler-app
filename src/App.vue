<template>
  <Header
    title="Meeting Scheduler"
    :formIsShown="formIsShown"
    @toggle-form-shown="handleToggleForm"
  />
  <MeetingForm v-if="formIsShown" />
  <div class="meeting-items">
    <MeetingItem
      :key="meeting.id"
      v-for="meeting in meetings"
      :id="meeting.id"
      :title="meeting.title"
      :isImportant="meeting.important"
    />
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";

import Header from "./components/Header.vue";
import MeetingForm from "./components/MeetingForm.vue";
import MeetingItem from "./components/MeetingItem.vue";

const store = useStore();
const meetings = computed(() => store.state.home.meetings);

onMounted(() => {
  store.dispatch("initMeetings");
});

const formIsShown = ref(false);
const handleToggleForm = () => {
  formIsShown.value = !formIsShown.value;
};
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
.meeting-items {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 300px;
  overflow-y: auto;
}
</style>
