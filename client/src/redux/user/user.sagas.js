import { all, call, put, takeLatest } from 'redux-saga/effects';
import {
  auth,
  googleProvider,
  createUserProfileDocument,
  getCurrentUser,
} from '../../firebase/firebase.utils';
import {
  signInFailureAction,
  signInSuccessAction,
  signOutFailureAction,
  signOutSuccessAction,
  signUpFailureAction,
  signUpSuccessAction,
} from './user.actions';
import UserActionTypes from './user.types';

// Generator Actions

function* getUserSnapshopFromAuth(userAuth, additionalData) {
  try {
    const userRef = yield call(
      createUserProfileDocument,
      userAuth,
      additionalData
    );
    const userSnapshot = yield userRef.get();
    yield put(
      signInSuccessAction({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (error) {
    yield put(signInFailureAction(error));
  }
}

function* isUserAuthenticated() {
  try {
    const userAuth = yield getCurrentUser();
    if (!userAuth) return;
    yield getUserSnapshopFromAuth(userAuth);
  } catch (error) {
    yield put(signInFailureAction(error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(googleProvider);
    yield getUserSnapshopFromAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error));
  }
}

function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshopFromAuth(user);
  } catch (error) {
    yield put(signInFailureAction(error));
  }
}

function* signOut() {
  try {
    yield auth.signOut();
    yield put(signOutSuccessAction());
  } catch (error) {
    yield put(signOutFailureAction(error));
  }
}

function* signUp({ payload: { email, password, displayName } }) {
  try {
    const { user } = yield auth.createUserWithEmailAndPassword(email, password);
    yield put(signUpSuccessAction({ user, additionalData: { displayName } }));
  } catch (error) {
    yield put(signUpFailureAction(error));
  }
}

function* signInAfterSignUp({ payload: { user, additionalData } }) {
  yield getUserSnapshopFromAuth(user, additionalData);
}

// Listeners

function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield takeLatest(UserActionTypes.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

function* onSignUpStart() {
  yield takeLatest(UserActionTypes.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield takeLatest(UserActionTypes.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export default function* userSagas() {
  yield all([
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onCheckUserSession),
    call(onSignOutStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
  ]);
}
