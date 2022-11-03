const { createStore, combineReducers } = require("redux");
// inital state
const initialState = {
  count: 0,
};

// type function reducer no 1--------------
const incrementCounterAction = () => {
  return {
    type: "INCREMENT",
  };
};

const decrementCounterAction = () => {
  return {
    type: "DECREMENT",
  };
};

const resetCounterAction = () => {
  return {
    type: "RESET",
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };

    case "RESET":
      return {
        ...state,
        count: 0,
      };

    default:
      state;
  }
};

// reducer no 1--------------

// type function reducer no 1--------------

const increment = () => {
  return {
    type: "MULTIPLY",
  };
};

const newReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MULTIPLY":
      return {
        ...state,
        count: state.count + 5,
      };
    default:
      state;
  }
};

//combineReducers ..........multiple reducer use system
const rootReducer = combineReducers({
  countR: counterReducer,
  newR: newReducer,
});
// store
const store = createStore(rootReducer);

// store subscribe
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementCounterAction());
store.dispatch(incrementCounterAction());
store.dispatch(resetCounterAction());
store.dispatch(increment());
