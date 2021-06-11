import produce from 'immer';

const INITIAL_STATE = {
  loading: false,
};

export default function loading(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@loading/UPDATE_LOADING_STATUS': {
        draft.loading = action.payload;
        break;
      }
      default:
    }
  });
}
