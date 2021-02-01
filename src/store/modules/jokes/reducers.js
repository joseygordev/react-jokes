// Actions
import SAVE_JOKES from './types';

const initialState = {
  byId: {},
  allIds: [],
};

export default function(state = initialState, action) {
  let allIds;
  
  switch (action.type) {
  /**
   * Add or updates jokes.
   */
  case SAVE_JOKES:
    if (state.allIds.indexOf(action.payload.id) !== -1)
      allIds = [...state.allIds];
    else
      allIds = [...state.allIds, action.payload.id]; 

    return {
      byId: {
        ...state.byId,
        [action.payload.id]: action.payload
      },
      allIds
    };

  default:
    return state;
  }
}
