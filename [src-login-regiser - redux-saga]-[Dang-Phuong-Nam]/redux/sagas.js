import rootSagaUser from './userRedux/saga/saga';
import { all } from 'redux-saga/effects';
export default function* root() {
  yield all([...rootSagaUser]);
}
