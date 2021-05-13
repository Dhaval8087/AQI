import { combineReducers } from 'redux';

import { airQualityReducers } from './airquality';

export const reducers = combineReducers({
    airquality: airQualityReducers
})