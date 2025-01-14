import react, { createContext, useContext, useState} from "react" ;
//context created 
const AutoDealContext=createContext();

export const AutoDealProvider=({children})=>{
    const[test,testUpdate]=useState("light");

    const themeToggler=()=> {
         testUpdate((prevState)=>{
            return prevState=="light"? "dark" :"light";
         })
    }  

    return(
        <AutoDealContext.Provider value={{test,themeToggler}}>
            {children}
        </AutoDealContext.Provider>
    )
}

class Person {
    constructor(name) {
        this.name=name
    }
}

export default AutoDealContext;

