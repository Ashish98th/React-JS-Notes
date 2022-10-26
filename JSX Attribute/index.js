import React from "react";
import ReactDOM from "react-dom";

const name="Ashish Nath";
const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/210/300"
const img3="https://picsum.photos/250/300"

const link="https://www.w3schools.com";
ReactDOM.render(
  <>
<h1 contentEditable="true" >My name is {name}</h1>
<img src={img1} alt="randomImage"/>
<img src={img2} alt="randomImage"/>

<a href="link" target="_bla">
  
<img src={img3} alt="randomImage"/>
</a>


</>,
document.getElementById("root"));