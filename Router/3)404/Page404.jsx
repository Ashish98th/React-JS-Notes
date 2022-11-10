import React from "react";
import {Link} from "react-router-dom";
function Page404(){
    return(
        <>
        <h1>This url doesn't exist</h1>
        <Link to="/" >Go to Home Page</Link>
        </>
    )
}
export default Page404;