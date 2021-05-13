import { handleActions } from 'redux-actions';

import { airQualityDataSuccess } from '../actions/airquality';

const defaultState = {
    airData: []
};
const fetchAirQualityDataSuccessReducer = (state, { payload }) => ({
    ...state,
    airData: payload.airData,
    date: payload.date
});
export const airQualityReducers = handleActions(
    {
        [airQualityDataSuccess]: fetchAirQualityDataSuccessReducer,

    },
    defaultState
);
