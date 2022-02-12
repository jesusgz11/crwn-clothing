import UserActionTypes from './user.types';

export const setCurrentUserAction = (user) => ({
  type: UserActionTypes.SET_CURRRENT_USER,
  payload: user,
});
