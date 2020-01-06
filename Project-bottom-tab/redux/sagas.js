import rootSagaUser from './userRedux/saga/saga';
import rootSagaTodo from './todoListRedux/saga/saga';
import {all} from 'redux-saga/effects';
export default function* root() {
  yield all([...rootSagaUser, ...rootSagaTodo]);
}
