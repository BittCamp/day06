import React,{useReducer} from 'react';

//초기값
const initialState = 0

//함수 
const reducer = (state,action) =>{
    switch(action.type){
        case 'INCREMENT' : 
            return state + 1 
        case 'DECREMENT' : 
            return state - 1 
        case 'RESET' : 
            return 0 
        default : //default는 반드시 작성해야 한다.
            return false
    }
}

const Test01 = () => {
    //count=>state, dispatch=>action으로 전달한다.
    const[count,dispatch] = useReducer(reducer,initialState) //현재 상태값과 이벤트를 반영함.

    return ( //state랑 dispatch는 거의 지정어임.
        
        <div>
            <h1>카운트 : { count }</h1>
            <p>
                <button onClick={ () => dispatch({ type: 'INCREMENT' }) }>증가</button>
                <button onClick={() => dispatch({ type: 'DECREMENT'})}> 감소</button>
                <button onClick={() => dispatch({ type: 'RESET'})}> 초기화</button> 
                {/* 타입에 들어가는 값은 상수로 들어가니 대문자로 하면된다. */}
            </p>
        </div>
    );
};

export default Test01;

/*
useReducer()
React에서 컴포넌트의 상태 관리를 위해서 useState를 사용해서 상태를 업데이트를 하는데,
useReducer를 사용하게 되면 컴포넌트와 상태 업데이트 로직을 분리하여 컴포넌트 외부에서도 상태 관리를 할 수 있다.
즉, 현재 컴포넌트가 아닌 다른 곳에 state를 저장하고 싶을 때 유용하게 사용할 수 있다. 

[사용법]
const [state, dispatch] = useReducer(reducer, initialState);

state : 현재 상태
dispatch : action을 발생시키는 함수
reducer : state와 action를 받아 새로운 state를 반환하는 함수
initialState : 초기값
*/
