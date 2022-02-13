let initial = false;

export const loader = (state = initial, action) => {
  console.log('Loader action', action);
  switch (action.type) {
    case 'LOADER': {
      return action.isLoading;
    }
    default: {
      return state;
    }
  }
};
