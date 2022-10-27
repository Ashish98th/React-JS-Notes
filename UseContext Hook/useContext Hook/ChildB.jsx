import React from 'react'
// import ChildC from './ChildC'
import { useContext } from 'react';
import {FirstName} from "./App";
function ChildB() {
  const fname=useContext(FirstName);
  return (
    <>
        <h1>My name is {fname}</h1>
    </>
  )
}

export default ChildB