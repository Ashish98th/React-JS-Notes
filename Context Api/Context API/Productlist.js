import React, { useContext } from "react";
import Product from "./Product";
import { ProductContext } from "./Home";
const Productlist=()=>{
  const{products}=useContext(ProductContext);
    return(
        <>
          <div>
            <div className="container"> 

             {
                products.map((item)=>{
                    return <Product key={item.id} {...item}/>
                })
             }
            </div>
          </div>
        </>
    )
}
export default Productlist;