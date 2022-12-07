import React,{useContext} from "react";
import { ProductContext } from "./Home";
const Product=({imageUrl,heading,price,id})=>{
    // console.log(props)
    const{deleteProduct}=useContext(ProductContext);
    return(
        <>
        <div>
            <img className="image" src={imageUrl} alt="Error loading"/>
            <h4 className="heading">{heading}</h4>
            <p className="price">{price}</p>
            <button onClick={()=>deleteProduct(id)} >X</button>
        </div>
        </>
    )
}
export default Product;