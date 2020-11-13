import { combineReducers } from 'redux';
import BookReducer from './reducer_book';
import BookDescrip from './reducer_descrip';

const rootReducer = combineReducers({
  books: BookReducer,
  decrip: BookDescrip,
});

export default rootReducer;
