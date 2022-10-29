import { useState } from "react";

function useTest(initialState = 0){
    const [ test, setTest ] = useState(initialState);
    const clearTest = () =>{
        setTest(0);
    }
    const addTest = () =>{
        setTest(test+1);
    }
    return { test, clearTest, addTest };
}

export default useTest;