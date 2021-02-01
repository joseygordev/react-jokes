// Actions
import SET_CONNECTION  from './types';

const initialState = {
  isDisconnected: false
};

export default function(state = initialState, action) {
  switch (action.type) {
  /**
   * Set connection
   */
  case SET_CONNECTION:
    return {
      isDisconnected: action.payload
    };

  default:
    return state;
  }
}
