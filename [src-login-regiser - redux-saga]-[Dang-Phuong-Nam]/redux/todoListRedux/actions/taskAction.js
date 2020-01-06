import {todoData} from '../../../utils/contains';
import * as types from './actionTypes';
import store from '../../store';

export function getAllTask() {
  return {
    type: types.GET_ALL_TASK,
    data: todoData,
  };
}

export function addTask(newTask) {
  const tasks = store.getState().taskReducers.tasks;
  tasks.push(newTask);
  return {
    type: types.ADD_TASK,
    data: tasks,
  };
}

export function deleteTask(idTask) {
  const tasks = store.getState().taskReducers.tasks;
  var newArray = tasks.filter(function(task) {
    return task.id !== idTask;
  });
  return {
    type: types.DELETE_TASK,
    data: newArray,
  };
}

export function updateTask(idTask) {
  const tasks = store.getState().taskReducers.tasks;
  var index = tasks.findIndex(function(task) {
    return task.id === idTask;
  });
  tasks[index].status
    ? (tasks[index].status = false)
    : (tasks[index].status = true);

  return {
    type: types.UPDATE_TASK,
    data: tasks,
  };
}

export function updateAllInforTask(taskUpdate) {
  const tasks = store.getState().taskReducers.tasks;
  var index = tasks.findIndex(function(task) {
    return task.id === taskUpdate.id;
  });

  tasks[index] = taskUpdate;
  return {
    type: types.UPDATE_TASK,
    data: tasks,
  };
}
