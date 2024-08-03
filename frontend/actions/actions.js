import * as types from '../constants/actionTypes.js';

export const setLocation = (userLocation) => {
  return {
    type: types.SET_LOCATION,
    payload: userLocation,
  };
};

export const setUser = (user) => {
  return {
    type: types.SET_USER,
    payload: user,
  };
};
