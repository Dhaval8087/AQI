import { createStore } from 'redux';
import { enableBatching } from 'redux-batched-actions';

import { reducers } from './reducers';


export const store = createStore(
    enableBatching(reducers),
    {}
);
