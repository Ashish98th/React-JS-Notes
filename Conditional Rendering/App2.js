import React from "react";
import { useState } from "react";

function Profile(){

const[login,setlogin]=useState(false);


    return(
        <div>
            {login?<h1>Welcome Ashish </h1>:<h1>Welocme Ash</h1>}

            //if ||                            //else ||
        </div>
    )

 
}
export default Profile;