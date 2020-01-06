import {put, takeLatest, call} from 'redux-saga/effects';
import * as taskActionTypes from '../actions/actionTypes';
import * as actionTask from '../actions/taskAction';
import {
  getAllTaskRequest,
  addTaskRequest,
  deleteTaskRequest,
  updateTaskIdRequest,
} from '../../../api/todo';
import store from '../../store';

function* getAllTask(actions) {
  try {
    const response = yield call(getAllTaskRequest, null);
    if (response) {
      yield put(actionTask.getAllTaskSuccess(response.data));
    }
  } catch (error) {
    alert(error);
    yield put(actionTask.getAllTaskFailed(error.message));
  }
}

function* addTask(actions) {
  let allTask = store.getState().taskReducers.tasks;
  try {
    const response = yield call(addTaskRequest, actions.data);
    if (response) {
      allTask.push(response.data);
      yield put(actionTask.addTaskSuccess(allTask));
    }
  } catch (error) {
    alert('add failed');
    console.log('error: ', error);
    yield put(actionTask.addTaskFailed(error));
  }
}

function* deleteTaskId(actions) {
  let allTask = store.getState().taskReducers.tasks;
  try {
    const response = yield call(deleteTaskRequest, actions.id);
    let newArray = allTask.filter(function(task) {
      return task.id !== response.data.id;
    });
    yield put(actionTask.deleteTaskSuccess(newArray));
  } catch (error) {
    yield put(actionTask.deleteTaskFailed(error));
    console.log('error delete', error);
    alert('error delete');
  }
}
function* updateTaskStatus(actions) {
  const tasks = store.getState().taskReducers.tasks;
  var index = tasks.findIndex(task => {
    return task.id === actions.data.id;
  });

  tasks[index].status
    ? (tasks[index].status = false)
    : (tasks[index].status = true);

  try {
    const response = yield call(
      updateTaskIdRequest,
      actions.data.id,
      tasks[index],
    );
    yield put(actionTask.updateTaskSuccess(tasks));
  } catch (error) {
    alert('error update status');
  }
}

function* updateTaskId(actions) {
  const tasks = store.getState().taskReducers.tasks;
  var index = tasks.findIndex(function(task) {
    return task.id === actions.data.id;
  });

  tasks[index] = actions.data;

  try {
    const response = yield call(
      updateTaskIdRequest,
      actions.data.id,
      actions.data,
    );
    yield put(actionTask.updateTaskSuccess(tasks));
  } catch (error) {
    alert('error update');
    console.log('error update', error);
  }
}

const rootSagaTodo = () => [
  takeLatest(taskActionTypes.GET_ALL_TASK, getAllTask),
  takeLatest(taskActionTypes.ADD_TASK, addTask),
  takeLatest(taskActionTypes.DELETE_TASK, deleteTaskId),
  takeLatest(taskActionTypes.UPDATE_TASK_STATUS, updateTaskStatus),
  takeLatest(taskActionTypes.UPDATE_TASK, updateTaskId),
];
export default rootSagaTodo();
