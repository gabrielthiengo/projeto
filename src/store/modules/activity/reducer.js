import produce from 'immer';

const INITIAL_STATE = {
  activities: [],
};

export default function activity(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@activity/UPDATE_ACTIVITY_REQUEST': {
        draft.profile = action.payload;
        break;
      }

      case '@activity/SET_ACTIVITY': {
        draft.activities = action.payload.activities;
        break;
      }

      default:
    }
  });
}
