import * as types from '../actions/actionTypes';

const init = {
  tasks: [],
  error: undefined,
};

const taskReducers = (state = init, action) => {
  switch (action.type) {
    case types.GET_ALL_TASK_SUCCESS:
      return {...state, tasks: action.data};
    case types.GET_ALL_TASK_FAILED:
      return {...state, error: action.error};
    case types.ADD_TASK_SUCCESS:
      return {...state, tasks: action.data};
    case types.ADD_TASK_FAILED:
      return {...state, error: action.error};
    case types.DELETE_TASK_SUCCESS:
      return {...state, tasks: action.data};
    case types.UPDATE_TASK_SUCCESS:
      return {...state, tasks: action.data};
    default:
      return state;
  }
};

export default taskReducers;
