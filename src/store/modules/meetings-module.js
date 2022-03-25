const meetingsModule = {
   state: {
      meetings: []
   },
   mutations: {
      initMeetings(state, payload) {
         state.meetings = payload.meetings;
      },
      addNewMeeting(state, payload) {
         const id = (state.meetings[state.meetings.length - 1]?.id || 0) + 1
         state.meetings.push({ ...payload.data, id });
         localStorage.setItem('meetings', JSON.stringify(state.meetings, null, 0))
      },
      updateMeeting(state, payload) {
         state.meetings.map((item) => {
            if (item.id === payload.id) item.important = !item.important;
            return item;
         });
         localStorage.setItem('meetings', JSON.stringify(state.meetings, null, 0))
      },
      deleteMeeting(state, payload) {
         state.meetings = state.meetings.filter((item) => item.id !== payload.id);
         localStorage.setItem('meetings', JSON.stringify(state.meetings, null, 0))
      }
   },
   actions: {
      initMeetings(context) {
         let meetings = [];
         if (localStorage.getItem('meetings') === null) {
            localStorage.setItem('meetings', '[]')
         } else {
            meetings = JSON.parse(localStorage.getItem('meetings'));
         }
         context.commit({
            type: 'initMeetings',
            meetings
         })
      },
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