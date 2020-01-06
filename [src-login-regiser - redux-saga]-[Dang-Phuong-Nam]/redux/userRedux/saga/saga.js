import * as userActionTypes from '../actions/actionTypes';
import {put, takeLatest, call} from 'redux-saga/effects';
import * as actionsUser from '../actions/userAction';
import {register, login} from '../../../api/user';

import {AsyncStorage} from 'react-native';

function* addUserRequest(action) {
  try {
    const response = yield call(register, action.data);
    if (response.data.token) {
      yield put(actionsUser.addUserSuccess(response));
      yield AsyncStorage.setItem('token', response.data.token);
    }
  } catch (e) {
    alert(e);
    yield put(actionsUser.addUserFailed(e.message));
  }
}

function* loginRequest(action) {
  try {
    const response = yield call(login, action.data);
    if (response.data.token) {
      yield AsyncStorage.setItem('token', response.data.token);
      yield put(actionsUser.loginSuccess(response));
    }
  } catch (error) {
    yield put(actionsUser.loginFailed(error.message));
  }
}

const rootSagaUser = () => [
  takeLatest(userActionTypes.ADD_USER, addUserRequest),
  takeLatest(userActionTypes.LOGIN, loginRequest),
];

export default rootSagaUser();
