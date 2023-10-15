import { combineReducers } from 'redux';
import favoritesReducer from './movieReducer';
import movieReducer from './movieReducer';

const rootReducer = combineReducers({
    movieReducer,
    favoritesReducer
})

export default movieReducer;