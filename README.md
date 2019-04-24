## 프로젝트 설명
간단한 React Redux 예제 입니다.
버튼을 클릭할때 숫자 카운터가 변경되는 것과 
(버튼 1: 값 1씩 증가, 버튼2: 값 1씩 감소)
화면 배경색을 바꾸는 기능 구현
(버튼3: 배경화면 색상 랜덤화)
## 폴더 구성

▼ src>
        ▼ components : UI 제어 와 랜더링과 관련 컴포넌트
          ▷ App.js : 
            - 부모 Component인 Counter 렌더링
          ▷ Value.js : 
            - 숫자를 관리하는 컴포넌트
            - 부모로 부터 props로 숫자 값 전달을 받음
          ▷ Control.js : 
            - 버튼을 관리하는 컴포넌트
            - 부모로 부터 props로 버튼 이벤트함수 정보를 전달 받음
          ▷ Counter.js : 똑똑한 컴포넌트, redux와 연결
            - 자식 Component인 Value, Control 을 담고 있는 컴포넌트
            - 자식 컴포넌트에게 props로 값, 버튼 이벤트 정보를 전달
            - 각 제어에 대한 reducer를 만들고 난후 redux 로 연결
              . 액션type에 따라 변화된 state를 자식 컴포넌트에
                넘거줄 props 정의
              . 액션type에 따라 할 이벤트 함수 정보를 
                자식 컴포넌트에 넘거줄 props 정의
              . 내보낼 컴포넌트를 리덕스를
                (mapStateToPops, mapDispathchProps)로 연결해서 새로운 컴포넌트로 내보내기
        ▼ actions : 작업에 대한 정보를 지니고 있는 객체
          - 값을 1씩 증가 시키기
          - 값을 1씩 감소 시키기
          - 새로운 색상 설정하기
          ▷ ActionTypes.js : 작업에 대한 액션 정보를 정의하고 내보내는 컴포넌트
          ▷ index.js : 액션생성자 컴포넌트
            - 작업에 대한 액션 정보를 함수형태로 생성해서 내보내는 컴포넌트         

        ▼ reduces : 변화를 일으키는 함수
          - http 같은 비동기 작업 X
          - 인수 변경 X ( 동일한 인수 동일한 결과 산출 ) 
           . DateNow()나 Randomize() 쓰면 안된다
          - 이전 상태와 액션을 받아서 새로운 상태를 반환하는 것
           . ( previousState, action ) => newState
           . reduce 안에서 이전 상태를 직접변경하는 것이 아니라
             그저 새로운 상태를 반환하는 것
             ( 기존 상태를 복사하고 액션에 따라 상태를 변화를 주어 반환)
          ▷ counter.js : 액션 type에 따라 number state 상태 값을 변경
          ▷ ui.js : 액션 type에 따라 color state 상태 값을 변경
          ▷ index.js : counter, ui reducer 합쳐서 내보내는 컴포넌트
          
        ▶ index.js : index.html에 최종적으로 랜더링하는 컴포넌트
          - 컴포넌트와 Reducer가 연결되고나면 그 리듀서를 불러와서 그 상태를 담고 있는
            store를 생성해서 랜더링 할 App 컴포넌트를 <Provider store={store}><App /></Provider>로 감싸서 랜더링
          - store의 액션
            . dispatch(action) : action을 reducer 보낸다.
            . dispatch가 실행되면 store는 현재 상태와 action을 reducer로 전달
            . reducer가 어떠한 변화가 필요한지 알아내서 변화를 주고
              새 상태를 주면 store는 현상태를 새 상태로 갈아 끼운다
            . getState() : 현상태를 반환하는 함수
            . subscibe(listener) : 상태가 바뀔때 마다 실행할 콜배함수를 등록하는 것
          - Provider : 컴포넌트에서 리덕스에서 사용하도록 해주는 컴포넌트
            <Provider store={store}></Provider>