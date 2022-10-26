
function Student(props){
    console.log(props.name);
    return(
        <div>
            <h1>Hello {props.name}</h1>
            <h2>Email : {props.Email}</h2>
        </div>
    )
}
export default Student;

//passinf two data