import {ADD_NEW_TASK} from './../actions/actionTypes';

const taskReducers = (tasks = [], action) => {
  switch (action.type) {
    case ADD_NEW_TASK:
      return [
        ...tasks,
        {
          taskId: action.taskId,
          taskName: action.taskName,
          completed: false,
        },
      ];
    default:
      return tasks;
  }
};

export default taskReducers;
 