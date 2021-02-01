import { combineReducers } from 'redux';

import categories from './modules/categories/reducers';
import connection from "./modules/connection/reducers";
import jokes from "./modules/jokes/reducers";

export default combineReducers({
  data: combineReducers({
    categories,
    connection,
    jokes
  })
});
