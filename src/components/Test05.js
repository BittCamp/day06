import React,{useEffect,useReducer,useState} from 'react';
import axios from 'axios'

const initialState = {
    data: {},
    error: null,
    loading: true
}

const reducer = (state,action) =>{
    switch(action.type){
        case 'SUCCESS':
            return{
                data: action.payload,
                error : null,
                loading: false
            }
        case 'ERROR' :
            return {
                data: {},
                error: '에러~~',
                loading: true
            }
        default:
            return state
}
}

const Test05 = () => {
    const[state,dispatch] = useReducer(reducer,initialState) // 리듀서 함수
    const[id,setId] = useState(1)
    const[search,setSearch] = useState(1) // 여기에 useEffect 걸려있음..
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/photos/${id}` //url의 내가 원하는 값만 가져오겠다. 제이슨 형식이지만 해당 페이지 없으면 제이슨 없음 페이지 가 나온다 일반 404아니다.

        axios.get(url)
            .then(response => {
                dispatch({type:'SUCCESS' ,payload: response.data })
            })
            .catch( error=> {dispatch({ type: 'ERROR'}) //catch 내장된 기능. 회색으로 써줬는데 이는 사용되지 않았음을 나타냄. 위에 response는 사용했기에 실선으로 표시됨.
            })
    },[search] )

    const onSearch = (id) =>{
        setSearch(id)
    }
    return (
        <div>
            <h3>
                ID 입력 (1~5000) : <input type='text' value={ id } onChange={e => setId(e.target.value)}/> {/* 상태변수값 잡는거해주고 */}
                <button onClick={()=> onSearch(id)}>검색</button>
            </h3>
            <h2>
                {
                    state.loading || <img src={state.data.thumbnailUrl} /> // 데이터 항목 중 thumbnailURL || 은 아니면이라는 뜻.
                }
                {
                    state.data && state.loading ? '로딩 중' : state.data.title//데이터 값 가져오기 
                }
            </h2>
            <p>
                {
                    state.error ? state.error: null 
                }
            </p>
        </div>
    );
};

export default Test05;