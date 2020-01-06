import * as types from './actionTypes';

export function addUser(newUser) {
  return {
    type: types.ADD_USER,
    data: newUser,
  };
}

export const addUserSuccess = data => {
  return {
    type: types.ADD_USER_SUCCESS,
    data,
  };
};

export const addUserFailed = error => {
  return {
    type: types.ADD_USER_FAILED,
    error,
  };
};

export function login(userLogin) {
  return {
    type: types.LOGIN,
    data: userLogin,
  };
}

export const loginSuccess = data => {
  return {
    type: types.LOGIN_SUCCESS,
    data,
  };
};

export const loginFailed = data => {
  return {
    type: types.LOGIN_FAILED,
    data,
  };
};

export function getAllUser() {
  return {
    type: types.GET_ALL_USER,
    data: usersData,
  };
}

export function logOut() {
  return {
    type: types.LOG_OUT,
  };
}
