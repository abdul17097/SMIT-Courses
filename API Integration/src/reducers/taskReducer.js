const initialState = {
  tasks: [],
  status: false,
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case "All_Tasks":
      return state.tasks;
    default:
      return state;
  }
};

export default taskReducer;
