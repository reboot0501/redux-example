/* Action 생성자 함수 */
import * as types from './ActionTypes';

/* 숫자 Action 파일로 분리 가능 */
export function increment() {
    return {
        type : types.INCREMENT
    };
}
/* 숫자 Action 파일로 분리 가능 */
export function decrement() {
    return {
        type : types.DECREMENT
    };
}
/* UI Action 생성자 파일로 분리 가능 */
export function setColor(color) {
    return {
        type : types.SET_COLOR,
        color : color
    };
}
