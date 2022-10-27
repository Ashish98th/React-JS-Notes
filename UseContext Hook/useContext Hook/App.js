
import React,{createContext} from "react";
import ChildA from './ChildA';

const FirstName=createContext();
const LastName=createContext();
const App = () => {
  return (
    <>
    <FirstName.Provider value="Ashish">

        <LastName.Provider value="Nath">
        <ChildA/>
        </LastName.Provider>
        
        </FirstName.Provider>
        </>
  )
}

export default App;
export {FirstName};
export {LastName};