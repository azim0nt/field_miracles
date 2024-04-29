import { globalReducer } from "./helpers";
import { createContext } from "react";

const initialState = {
    isPlaying:false
}

const context = createContext()
export{
    globalReducer,
    initialState,
    context
}