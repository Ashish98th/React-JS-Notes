import React, { useState,createContext } from "react";
import {list} from "./recipelist";
import Productlist from "./Productlist";

export const ProductContext=createContext();
const Home=()=>{

    const[products,setProducts]=useState(list);

    const deleteProduct=(id)=>{
        setProducts((products)=>{
            return products.filter((item)=>{
                return item.id!==id;
            })
        })
    }
    return(
        <>
        <ProductContext.Provider value={{deleteProduct,products}}> 
        {/* passing this as an object */}
        <Productlist/>
        </ProductContext.Provider>
        </>
    )
}
export default Home;