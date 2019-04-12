/* counter, ui reducer 합치기 */
import { combineReducers } from 'redux';

import counter from './counter';
import ui from './ui';

const reducers = combineReducers({
    counter, ui
});

export default reducers;