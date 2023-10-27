import React,{useReducer} from 'react';
//초기값
const initialState = 'pink'

//함수
const reducer = (state,action) => {
    switch(action.type){
        case 'RED':
            return 'red' //state ='red'
        case 'GREEN':
            return 'green'
        case 'BLUE':
            return 'blue'
        case 'MAGENTA':
            return 'magenta'
        case 'RESET':
            return initialState //state ='pink'
        default : 
            return state
    }
}

const Test02 = () => {
    const[color,dispatch] = useReducer(reducer,initialState) // 상태변수를 이제 setColor 이렇게 안잡고 ..dispatch 로 잡겠다.
    return (
        <div>
            <h1 style={{color:color}}>칼라 : {color} </h1> {/*  h1 style={{color}}> 두개 같으면 하나만 써줘도 된다. */}
            {/* . 스타일 객체를 React에서 사용할 때 중괄호를 두 번 사용하는 것은 틀린 문법입니다. 
            중괄호는 JavaScript 표현식을 감싸는 역할을 합니다. 
            따라서 스타일 객체 내에서는 중괄호를 하나만 사용하고, JavaScript 변수나 표현식을 중괄호 안에 씁니다. */}
            <p>
                <button onClick={ () => dispatch({ type: 'RED' }) }>빨강</button>
                <button onClick={ () => dispatch({ type: 'GREEN' }) }>초록</button>
                <button onClick={ () => dispatch({ type: 'BLUE' }) }>파랑</button>
                <button onClick={ () => dispatch({ type: 'MAGENTA' }) }>보라</button>
                <button onClick={ () => dispatch({ type: 'RESET' }) }>초기화</button>
            </p>
        </div>
    );
};

export default Test02;