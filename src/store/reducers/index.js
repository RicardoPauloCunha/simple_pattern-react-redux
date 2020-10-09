import { combineReducers } from 'redux';
import { animesReducer } from './animes';

export const Reducers = combineReducers({
    animes: animesReducer
});