
function Student(props){  //Here props is an object
    console.log(props.name); //Accessing the value name
    return(
        <div>
            <h1>Hello {props.name}</h1>
        </div>
    )
}
export default Student;