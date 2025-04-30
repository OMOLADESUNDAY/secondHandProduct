import { useReducer } from 'react';

const initialState = {
  isOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'TOGGLE_MENU':
      return { ...state, isOpen: !state.isOpen };
    case 'CLOSE_MENU':
      return { ...state, isOpen: false };
    default:
      return state;
  }
}

export const useNavReducer = () => useReducer(reducer, initialState);