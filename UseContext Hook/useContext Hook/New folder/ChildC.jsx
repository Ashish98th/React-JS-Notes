import React from 'react'
import {FirstName} from './App';
import {LastName} from "./App";
function ChildC() {
  return (
    <>
   <FirstName.Consumer>{(fname)=>{
    return(
      
      <LastName.Consumer>{(lname)=>{
        return(
          <h5>My name is {fname} {lname}</h5>
        )
      
      }}</LastName.Consumer>
      
    ) 
    
    
    
   }}</FirstName.Consumer>

    

    </>
  )
}

export default ChildC;