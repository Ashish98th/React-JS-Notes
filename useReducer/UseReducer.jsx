import React,{ useReducer } from "react"

const initialState=0;
const reducer=(state,action)=>{
    console.log(state,action)
    if(action.type==="increment"){
        return state+1;
    }else{
        return state-1;
    }
   
}
const Usereducer=()=>{

    // const[count,setCount]=useState(0);


    const[state,dispatch]=useReducer(reducer,initialState);
    return(
        <>
        {/* <p>{count}</p> */}
        <p>{state}</p>
        {/* <button onClick={()=>setCount(count+1)} >Inc</button> */}
        <button onClick={()=>dispatch({type:"increment"})} >Inc</button>
        <button onClick={()=>dispatch({type:"decrement"})} >Dec</button>
        
        </>
    )
}
export default Usereducer;