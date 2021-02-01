// Actions
import {
  SAVE_CATEGORIES,
  SAVE_JOKE_ID_BY_CATEGORY
} from './types';

const initialState = {
  byId: {},
  allIds: [],
};

export default function(state = initialState, action) {
  switch (action.type) {

  /**
   * Add or updates categories.
   */
  case SAVE_CATEGORIES:
    return {
      ...state,
      allIds: action.payload
    };

  /**
   * Add or updates categories.
   */
  case SAVE_JOKE_ID_BY_CATEGORY:
    let byId = [];

    if (state.byId[action.payload.category]) {
      byId = [...state.byId[action.payload.category]];
      if (!state.byId[action.payload.category].includes(action.payload.id))
        byId = [...byId, action.payload.id];
    } else {
      byId = [...byId, action.payload.id];
    }
  
    return {
      ...state,
      byId: {
        ...state.byId,
        [action.payload.category]: byId
      }
    };

  default:
    return state;
  }
}
