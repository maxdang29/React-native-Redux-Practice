import * as types from './actionTypes';
import store from '../../Store';
import {usersData} from '../../../utils/contains';

export function addUser(newUser) {
  let users = store.getState().userReducer.users;
  users.push(newUser);
  return {
    type: types.ADD_USER,
    data: users,
  };
}
export function checkLogin(userLogin) {
  let users = store.getState().userReducer.users;
  const account = users.find(
    user =>
      user.name === userLogin.name && user.password === userLogin.password,
  );
  if (account === undefined || account === null) {
    return {
      type: types.LOGIN,
      account: account,
      isLogin: false,
    };
  } else {
    return {
      type: types.LOGIN,
      account: account,
      isLogin: true,
    };
  }
}

export function getAllUser() {
  return {
    type: types.GET_ALL_USER,
    data: usersData,
  };
}

export function logOut() {
  return {
    type: types.LOGIN,
    isLogin: false,
  };
}
