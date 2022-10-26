import React from 'react'
import { useState } from 'react';
import ChildA from './ChildA';

function Parent() {

const[name,setName]=useState("Ananda");
  return (
    <>
        <h1>Parent</h1>
        <ChildA firstName={name} />
        
    </>
  )
}

export default Parent;