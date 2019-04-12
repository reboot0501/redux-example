import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { createStore } from 'redux';

import reducers from './reducers';

import { Provider } from 'react-redux';

/* action에 따른 상태 변화 확인 */
//import * as actions from './actions';

const store = createStore(reducers);

/* action에 따른 상태 변화 확인 */
//console.log("store 의 현재 상태 확인\n" + store.getState());
//const unsubsribe = store.subscribe(() => console.log(store.getState()));
//store.dispatch(actions.increment());
//store.dispatch(actions.increment());
//store.dispatch(actions.decrement());
//store.dispatch(actions.setColor([200, 200, 200]));
//unsubsribe(); // 상태를 더 이상 구독하지 않음 
//store.dispatch(actions.setColor([210, 210, 210]));
/* action에 따른 상태 변화 확인 */

ReactDOM.render(
    <Provider store={store}>
       <App />
    </Provider>, 
    document.getElementById('root')
);
