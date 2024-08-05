/**
 * ************************************
 *
 * @module  apiReducer
 * @author
 * @date
 * @description reducer for.... uhhh...
 *
 * ************************************
 */

import * as types from '../constants/actionTypes';

const initialState = {
    location: '',
    user: '',
};

const apiReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_LOCATION: {
            return { 
                ...state 
            }
        }
        default: {
            return state;
        }
    }
};

export default apiReducer;