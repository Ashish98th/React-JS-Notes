import React,{useState,useRef} from "react";
import "./App.css";
const FormBasics=()=>{

    const[Firstname,setFirstname]=useState("");
    const[LastName,setLastName]=useState("");
    const[formArray,setFormArray]=useState([]);
    console.log(formArray);

    const container=useRef();
    console.log(container.current)

    const backgroundChange=()=>{
       container.current.style.backgroundColor="blue";
    }
    function submitHandler(e){
        e.preventDefault();

        const users=[{fname:Firstname,lname:LastName}]

        if(Firstname && LastName){
            setFormArray((oldvalue)=>{
                return [...oldvalue,users]
            })
            setFirstname("")
            setLastName("")
            
        }else{
            console.log("Shouldn't be Blank")
        }
      
    }
  
    return (
        <div>
<form onSubmit={submitHandler}>
    <div>
    <label htmlFor="Firstname" >First Name:</label>
    <input value={Firstname} onChange={(e)=>setFirstname(e.target.value)} type="text" name="Firstname" id="firtsname" />
    </div>

    <div>
    <label htmlFor="Lastname" >Last Name:</label>
    <input value={LastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="Firstname" id="LastName" />
    </div>

<div>
    <button type="submit">Submit</button>
</div>
</form>

<div ref={container}>My Div</div>
<button type="button" onClick={backgroundChange}>Change Background</button>
        </div>
    )
}
export default FormBasics;
