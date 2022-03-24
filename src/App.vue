<template>
  <Header
    title="Meeting Scheduler"
    :formIsShown="formIsShown"
    @toggle-form-shown="handleToggleForm"
  />
  <MeetingForm v-if="formIsShown" @add-new-meeting="handleAddNewMeeting" />
  <div class="meeting-items">
    <MeetingItem
      :key="meeting.id"
      v-for="meeting in state.meetings"
      :id="meeting.id"
      :title="meeting.title"
      :isImportant="meeting.important"
      @update-meeting="handleUpdateMeeting"
      @delete-meeting="handleDeleteMeeting"
    />
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue';

import Header from './components/Header.vue';
import MeetingForm from './components/MeetingForm.vue';
import MeetingItem from './components/MeetingItem.vue';

const formIsShown = ref(false);
let state = reactive({
  meetings: [
    {
      id: 1,
      title: 'First meeting',
      important: false,
    },
    {
      id: 2,
      title: 'Second meeting',
      important: false,
    },
    {
      id: 3,
      title: 'Third meeting',
      important: true,
    }
  ]
});

const handleToggleForm = () => {
  formIsShown.value = !formIsShown.value;
}

const handleAddNewMeeting = (data) => {
  state.meetings.push(data);
}

const handleUpdateMeeting = (id) => {
  state.meetings.map(item => {
    if (item.id === id) item.important = !item.important;
    return item;
  });
}

const handleDeleteMeeting = (id) => {
  state.meetings = state.meetings.filter(item => item.id !== id);
}
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

