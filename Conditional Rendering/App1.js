import React from "react";
import { useState } from "react";

function Profile(){

const[login,setlogin]=useState(true);

if(login){
    return(
        <div>
            <h1>Welcome Ashish</h1>
        </div>
    )
}else{
    return(
        <div>
            <h1>Welcome Ash</h1>
        </div>
    )
}
 
}
export default Profile;