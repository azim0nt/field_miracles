import { globalReducer } from "./helpers";
import { createContext } from "react";

const initialState = {
    isPlaying:true
}

const context = createContext()
export{
    globalReducer,
    initialState,
    context
}