import { all, put, takeLatest, call } from 'redux-saga/effects';
import { clearCart } from './cart.actions';
import UserActionTypes from '../user/user.types';

function* clearCartOnSignOut() {
  yield put(clearCart());
}

function* onSignOutSuccess() {
  yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut);
}

export default function* cartSagas() {
  yield all([call(onSignOutSuccess)]);
}
