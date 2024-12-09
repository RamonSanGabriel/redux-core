const localInitialState = {
  status: 'failed',
};

export const localReducer = (state = localInitialState, action) => {
  switch (action.type) {
    case 'LOCAL_STATUS_CHANGED':
      return { ...state, status: action.payload };
    default:
      return state;
  }
};

export const setStatus = (newStatus) => {
  return {
    type: 'LOCAL_STATUS_CHANGED',
  };
  payload: 'newStatus';
};
