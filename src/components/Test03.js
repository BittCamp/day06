import React,{useReducer} from 'react';

const initialState = { color : 'pink' } // 칼라를 핑크로 객체값으로 들어오게 한다.

const reducer = (state,action) => {
    switch(action.type){
        case 'CHANGE_COLOR':
            return { color: action.text } //객체로 들어온다.
        case 'RESET':
            return initialState 
        default : 
            return state

    }
}

const Test03 = () => {
    const[state,dispatch] = useReducer(reducer,initialState) // 객체로 넘기기 때문에 state를 써야된다. Test02는 문자열을 넘긴거라 color를 써도 되었다. 

    return (
        <div>
        <h1 style={{color:state.color}}>색 : {state.color} </h1> 
        <p>
            <button onClick={ () => dispatch({ type: 'CHANGE_COLOR', text: 'red' }) }>빨강</button>
            <button onClick={ () => dispatch({ type: 'CHANGE_COLOR', text: 'green' }) }>초록</button>
            <button onClick={ () => dispatch({ type: 'CHANGE_COLOR', text: 'blue' }) }>파랑</button>
            <button onClick={ () => dispatch({ type: 'CHANGE_COLOR', text: 'magenta' }) }>보라</button>
            <button onClick={ () => dispatch({ type: 'RESET' }) }>초기화</button>
        </p>
    </div>
    );
};

export default Test03;