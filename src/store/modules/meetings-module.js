const meetingsModule = {
   state: {
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
   },
   mutations: {
      addNewMeeting(state, payload) {
         state.meetings.push(payload.data);
      },
      updateMeeting(state, payload) {
         state.meetings.map((item) => {
            if (item.id === payload.id) item.important = !item.important;
            return item;
         });
      },
      deleteMeeting(state, payload) {
         state.meetings = state.meetings.filter((item) => item.id !== payload.id);
      }
   },
   actions: {
      addNewMeeting(context, data) {
         context.commit({
            type: 'addNewMeeting',
            data
         });
      },
      updateMeeting(context, id) {
         context.commit({
            type: 'updateMeeting',
            id
         });
      },
      deleteMeeting(context, id) {
         context.commit({
            type: 'deleteMeeting',
            id
         });
      }
   }
}


export default meetingsModule;