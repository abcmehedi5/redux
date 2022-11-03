const { createStore } = require("redux");
// inital state
const initialState = {
  products: ["mobile", "laptop"],
  count: 0,
};

// action
const addProductAction = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        products: [...state.products, action.payload], // dispatch
        count: state.count + 1, // increas count value
      };

    default:
      return state;
  }
};

// store
const store = createStore(counterReducer);

// store subscribe
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProductAction("smart watch")); // smart watch send to action
