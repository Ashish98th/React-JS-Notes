const Dish =(props)=>{
  //  console.log(props)
  const mylist=props.list;
  // console.log(mylist);
  
  // const {heading,imageUrl,price}=props.list;
  // take list object from props 
    return(
      <>
      <div>
        <img className="image" src={mylist.imageUrl} alt="error loading image"/>
        <h4 className="heading">{mylist.heading}</h4>
        <p className="price">{mylist.price}</p>
    
      </div>
      </>
    )
  }
  export default Dish;