const { createStore } = require("redux");
// inital state
const initialState = {
  count: 0,
};

// type function
const incrementCounterAction = () => {
  return {
    type: 'INCREMENT',
  };
};

const decrementCounterAction = () => {
  return {
    type: 'DECREMENT',
  };
};

const resetCounterAction = () => {
  return {
    type: 'RESET',
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      };

    case 'RESET':
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// store
const store = createStore(counterReducer);

// store subscribe
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCounterAction());
store.dispatch(decrementCounterAction());
store.dispatch(resetCounterAction());
