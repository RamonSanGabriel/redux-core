import { combineReducers, createStore } from '@reduxjs/toolkit';
import { localReducer } from './localSlice';
import { devToolsEnhancer } from '@redux-devtools/extension';

const rootReducer = combineReducers({
  locale: localReducer,
});

export const store = createStore(rootReducer, devToolsEnhancer());
