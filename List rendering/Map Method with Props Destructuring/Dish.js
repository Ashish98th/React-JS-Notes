const Dish =(props)=>{
  //  console.log(props)
  // const mylist=props.list;
  // console.log(mylist);
  
  const {heading,imageUrl,price}=props.list;
  // take list object from props 
    return(
      <>
      <div>
        <img className="image" src={imageUrl} alt="error loading image"/>
        <h4 className="heading">{heading}</h4>
        <p className="price">{price}</p>
    
      </div>
      </>
    )
  }
  export default Dish;