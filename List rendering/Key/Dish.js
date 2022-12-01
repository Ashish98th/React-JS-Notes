const Dish =(props)=>{
  //  console.log(props)
  // const mylist=props.list;
  // console.log(mylist);
  
  const {heading,imageUrl,price}=props; //no need to write props.list
  // take list object from props 
    return(
      <>
      <div>
        <img className="image" src={props.imageUrl} alt="error loading image"/>
        <h4 className="heading">{props.heading}</h4>
        <p className="price">{props.price}</p>
    
      </div>
      </>
    )
  }
  export default Dish;