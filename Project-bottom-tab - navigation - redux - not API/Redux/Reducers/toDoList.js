import * as types from '../Actions/TodoList/actionTypes';

const init = {
  tasks: [],
};

const taskReducers = (state = init, action) => {
  switch (action.type) {
    case types.GET_ALL_TASK:
      return {...state, tasks: action.data};
    case types.ADD_TASK:
      return {...state, tasks: action.data};
    case types.DELETE_TASK:
      return {...state, tasks: action.data};
    case types.UPDATE_TASK:
      return {...state, tasks: action.data};
    default:
      return state;
  }
};

export default taskReducers;
