import * as types from '../actions/ActionTypes';

/* 초기 상태 값 */
const initialState = {
    number : 0,
    dummy : 'dumbdumb',
    dumbObject : {
        d : 0,
        u : 1,
        m : 2,
        b : 3
    }

}

export default function counter(state = initialState, action) {

    // eslint-disable-next-line default-case
    switch(action.type) {
        case types.INCREMENT :
            return {
                ...state, /* spread 문법 */
                number : state.number + 1,
                dumbObject : { ...state.dumbObject, u : 0}
            };
        case types.DECREMENT :
            return {
                ...state,
                number : state.number - 1
            };
        default :
            return state;
    }
}