import React from "react";
import { useState } from "react";

function Profile(){

const[login,setlogin]=useState(2);


    return(
        <div>
            {login==1?<h1>Welcome User1 </h1>
            :login==2?<h1>Welocme User2</h1>
            :<h1>Welcome user3</h1>}
        </div>
    )

 
}
export default Profile;


//Ternary Operator
//else if