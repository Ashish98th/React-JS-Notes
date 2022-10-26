
function Student(props){
    console.log(props.name);
    return(
        <div style={{backgroundColor:"skyblue",margin:10}}>
            
            <h4>Address:{props.other.address}</h4>
        </div>
    )
}
export default Student;

//rendering the address from the passing mutiple data