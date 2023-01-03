import React,{useState} from "react";
import "./App.css";
const FormBasics=()=>{
    const[firstName,setFirstName]=useState("");
    const[LastName,setLastName]=useState("");
    const[email,setemail]=useState("");

    const[formArray,setformArray]=useState([]);

    const handleSubmit=(e)=>{
    e.preventDefault();

    const users={fName:firstName,lName:LastName,emailId:email};

 if(firstName && LastName && email){
    setformArray((oldValue)=>{
        return [...oldValue,users] //putting the users inside formArray
    })
 }else{
    console.log("Should not be Blank")
 }
    }
    console.log(formArray); //everything will be inside formArray
    
    return(
        <div>
            <h1 className="heading">React Form Basics</h1>
            <hr></hr>

<form onSubmit={handleSubmit}>

<div className="container">

<div className="firstName">
    <label htmlFor="first__name">First Name:</label>
    <input value={firstName} onChange={(e)=>setFirstName(e.target.value)} type="text" name="first_name" id="first__name"/>
</div>


<div className="LastName">
    <label htmlFor="last__name">Last Name:</label>
    <input value={LastName} onChange={(e)=>setLastName(e.target.value)} type="text" name="last_name" id="last__name"/>
</div>

<div className="email">
    <label htmlFor="email">email:</label>
    <input value={email} onChange={(e)=>setemail(e.target.value)} type="text" name="email" id="email"/>
</div>

<div className="submit">
    <button type="submit">Submit</button>
</div>
</div>


    </form>
        </div>
    )
}
export default FormBasics;


//When type value onChange event will trigger
// e.target.value event object takes event.target.value means the typed value will be set inside state & it's going in firstName

//Whrn You typed some value the value will be set inside the state 