/* 버튼을 관리하는 컴포넌트 */ 
import React, { Component } from 'react';

/* 부모 컴포넌트로 부터 각 이벤트 함수 정보를 받지 못해을때 의 defaultProps 정의 */
function createWarning(functionName) {
    return () => console.warn(functionName + ' is not defined')
}
const defaultProps = {
    onPlus: createWarning('onPlus'),
    onSubtract: createWarning('onSubtract'),
    onRandomizeColor: createWarning('onRandomizeColor')   
}

class Control extends Component {

constructor(props) {
    super(props);
}

    render() {
        return (
            <div>
                <button onClick={this.props.onPlus}>+</button>
                <button onClick={this.props.onSubtract}>-</button>
                <button onClick={this.props.onRandomizeColor}>Randomize Color</button>
            </div>
        );
    }
}

export default Control;