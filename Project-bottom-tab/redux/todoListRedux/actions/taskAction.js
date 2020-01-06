import * as types from './actionTypes';

export function getAllTask() {
  return {
    type: types.GET_ALL_TASK,
  };
}

export const getAllTaskSuccess = data => {
  return {
    type: types.GET_ALL_TASK_SUCCESS,
    data,
  };
};

export const getAllTaskFailed = error => {
  return {
    type: types.GET_ALL_TASK_FAILED,
    error,
  };
};

export const addTask = newTask => {
  return {
    type: types.ADD_TASK,
    data: newTask,
  };
};
export const addTaskSuccess = data => {
  return {
    type: types.ADD_TASK_SUCCESS,
    data,
  };
};
export const addTaskFailed = error => {
  return {
    type: types.ADD_TASK_FAILED,
    error,
  };
};

export function deleteTask(idTask) {
  return {
    type: types.DELETE_TASK,
    id: idTask,
  };
}
export const deleteTaskSuccess = data => {
  return {
    type: types.DELETE_TASK_SUCCESS,
    data,
  };
};

export const deleteTaskFailed = error => {
  return {
    type: types.DELETE_TASK_FAILED,
    error,
  };
};

export function updateTaskStatus(item) {
  return {
    type: types.UPDATE_TASK_STATUS,
    data: item,
  };
}

export const updateTaskSuccess = data => {
  return {
    type: types.UPDATE_TASK_SUCCESS,
    data,
  };
};

export function updateTaskId(taskUpdate) {
  return {
    type: types.UPDATE_TASK,
    data: taskUpdate,
  };
}
