import { createContext, useState } from "react";
import runChat from "../config/Gemini";
import Hero from "./Hero";
export const context = createContext();

const ContextProvider = (props) =>{

    const [input , setInput] = useState("")
    const [reacentPrompt , setRecentPrompt] = useState("");
    const [prevPrompts , setPrevPrompts] = useState([]);
    const [showResult , setShowResult] = useState(false);
    const [loading , setLoading] = useState(false);
    const [resultData , setResultData] = useState("");

const onSent = async (prompt) =>{
    setResultData("")
    setLoading(true)
    setShowResult(true)
    setRecentPrompt(input)
    const response = await runChat(input)
    let responseArray = response.split("**");
    let newResponse;
    for(let i = 0 ; i<responseArray.length; i++){
        if(i === 0 || i%2!==1){
            newResponse += responseArray[i];
        }else{
            newResponse += "<b>"+responseArray[i]+ "</b>"
        }
    }
    setResultData(newResponse)
    setLoading(false)
    setInput("")
}


    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        reacentPrompt,
        setRecentPrompt,
        showResult,
        loading,
        resultData,
        input,
        setInput

    }
    return(
        <context.Provider value={contextValue}>
            {props.children}
        </context.Provider>
    )
}
export default ContextProvider