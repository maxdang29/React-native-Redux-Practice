import callApi from './apiCaller';
const urlTask = 'http://5e0d935736b80000143db64b.mockapi.io/api';

export const getAllTaskRequest = data => {
  return callApi(urlTask + '/tasks', 'GET', data);
};
export const addTaskRequest = data => {
  return callApi(urlTask + '/tasks', 'POST', data);
};

export const deleteTaskRequest = id => {
  console.log('id object', id);
  return callApi(urlTask + '/tasks/' + id, 'DELETE', null);
};
export const updateTaskIdRequest = (id, data) => {
  console.log('id and data', id, data);
  return callApi(urlTask + '/tasks/' + id, 'PUT', data);
};
