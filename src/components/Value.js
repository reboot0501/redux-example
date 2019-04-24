/* 숫자를 관리하는 컴포넌트 */ 
import React, { Component } from 'react';

/* 부로부터 props로 값을 전달 받지 못 할 경우 defaultProps 정의*/
const defaultProps = {
    number : -1
}

class Value extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>{this.props.number}</h1>
            </div>
        );
    }
}

export default Value;