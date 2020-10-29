import { combineReducers, applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const CreateStore = () => {
    const store = createStore(combineReducers({}), applyMiddleware(thunk, logger))
    return store;
}