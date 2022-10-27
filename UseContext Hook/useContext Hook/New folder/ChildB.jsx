import React from 'react'
// import ChildC from './ChildC'
import { useContext } from 'react';
import {FirstName,LastName} from "./App";
function ChildB() {
  const fname=useContext(FirstName);
  const lname=useContext(LastName);
  return (
    <>
        <h1>My name is {fname} {lname}</h1>
    </>
  )
}

export default ChildB