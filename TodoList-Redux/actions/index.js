import {ADD_NEW_TASK} from './actionTypes';

let newTaskId = 0;
//action: 'add new task'
export const addNewTask = taskName => {
  return {
    type: ADD_NEW_TASK,
    taskId: newTaskId++,
    taskName: taskName,
  };
};
