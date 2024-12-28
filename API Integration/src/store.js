import { combineReducers, createStore } from "redux";
import counterReducer from "./reducers/counterReducer";
import taskReducer from "./reducers/taskReducer";

const allReducers = combineReducers({
  counter: counterReducer,
  task: taskReducer,
});

const store = createStore(allReducers);

export default store;
