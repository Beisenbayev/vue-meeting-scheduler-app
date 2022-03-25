<template>
  <form>
    <div class="input-group">
      <label>Title</label>
      <input type="text" v-model="state.title" placeholder="meeting title" />
    </div>
    <div class="checkbox-group">
      <label>Important</label>
      <input type="checkbox" v-model="state.important" />
    </div>
    <Button title="Save new meeting" @handle-click="handleSaveMeeting" />
  </form>
</template>

<script setup>
import { reactive } from "vue";
import { useStore } from "vuex";
import Button from "./Button.vue";

const store = useStore();
const state = reactive({
  title: "",
  important: false,
});

const handleSaveMeeting = () => {
  if (state.title === "") {
    alert("Meeting title must not be empty!");
    return;
  }
  store.dispatch("addNewMeeting", { ...state });
  state.title = "";
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 30px 0;
}
.input-group {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.checkbox-group {
  display: flex;
  align-items: ceter;
}
.checkbox-group input {
  margin-left: 10px;
}
</style>
