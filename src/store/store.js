import { createStore } from "vuex";
import meetingsModule from "./modules/meetings-module";

const store = createStore({
   modules: {
      home: meetingsModule
   }
});


export default store;