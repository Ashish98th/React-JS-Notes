import React from "react";
import "./App.css";
function App(){

  const firstDish={
    heading:"chicken-boneless-biryani" ,
    price:"Rs.325",
     imageUrl:"https://firebasestorage.googleapis.com/v0/b/ruchika-rasoi.appspot.com/o/images%2Fproducts%2F3-12-23-chicken-boneless-biryani.jpg?alt=media&token=1cb41302-82cb-4e0f-9ac3-32e008e06542"
  }

  const secondDish={
    heading:"chicken-masala" ,
    price:"Rs.325",
     imageUrl:"https://firebasestorage.googleapis.com/v0/b/ruchika-rasoi.appspot.com/o/images%2Fproducts%2F3-19-21-chicken-masala.jpg?alt=media&token=4aac2b3a-9e9b-421b-bf38-ee1590202fd2"
  }

  const thirdDish={
    heading:"egg-curry" ,
    price:"Rs.425",
     imageUrl:"https://firebasestorage.googleapis.com/v0/b/ruchika-rasoi.appspot.com/o/images%2Fproducts%2F3-34-59-egg-curry.jpg?alt=media&token=206c3870-df44-49cd-ba63-62c503a83133"
  }
  return(
    <>
    <div className="container">

    <Dish title={firstDish.heading} 
    image={firstDish.imageUrl}
     amt={firstDish.price}/>

    <Dish title={secondDish.heading} 
    image={secondDish.imageUrl}
     amt={secondDish.price}/>

    <Dish title={thirdDish.heading}
     image={thirdDish.imageUrl} 
     amt={thirdDish.price}/> 

    </div>
    </>
  )
}


const Dish =({title,image,amt})=>{
  // const{title,image,amt}=props;
  return(
    <>
    <div>
      <img className="image" src={image} alt="error loading image"/>
      <h4 className="heading">{title}</h4>
      <p className="price">{amt}</p>
    </div>
    </>
  )
}
export default App;