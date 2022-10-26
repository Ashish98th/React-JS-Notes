import React from "react";
import ReactDOM from "react-dom";

const name="Ashish Nath";
const img1="https://picsum.photos/200/300"
const img2="https://picsum.photos/200/300"
const img3="https://picsum.photos/200/300"


const heading={
  color:"#fa9191",
  textAlign:"center",
  textTransform:"capitalize",
  
 
  fontFamily: "'Josefin Sans', sans-serif",
  margin:"50px",
}

ReactDOM.render(
  <>
<h1 style={heading}>My name is {name}</h1>

<div className="div_tag">
  <img src={img1} alt="randomImage"/>
<img src={img2} alt="randomImage"/>
  
<img src={img3} alt="randomImage"/>

</div>



</>,
document.getElementById("root"));