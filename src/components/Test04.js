import React,{useEffect,useReducer} from 'react';
import axios from 'axios';

const initialState = {
    data: {},
    error: null,
    loading: true 
}

const reducer = (state, action) =>{
    switch(action.type){
        case 'SUCCESS':
            return{
                data: action.payload,
                error: null,
                loading: false
            }
        case 'ERROR':
            return{
                data: {},
                error: '에러~~~',
                loading: true
            }
        default:
            return state
    }
}

const Test04 = () => {
    const [state,dispatch] = useReducer(reducer, initialState)

    useEffect(()=>{
        const url = 'https://jsonplaceholder.typicode.com/posts/3'

        axios.get(url)
              .then(response => {
                dispatch({ type: 'SUCCESS' , payload: response.data}) 
              }) //axios then 응답성공
              .catch(error => { dispatch({ type: 'ERROR' }) 
              }) //캐치는 응답 실패임.
    },[]) //useEffect ~결과가 생기면 작동하게하겠다.

    return (
        <div>
            <h2>
                {
                    state.data && state.loading ? '로딩 중' : state.data.title
                }
            </h2>
            <p>
                {
                    state.error ? state.error: null //에러가 참이면 에러로 
                }
            </p>
        </div>
    );
};

export default Test04;