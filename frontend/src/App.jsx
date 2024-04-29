
import { useReducer } from "react"
import { context, globalReducer, initialState } from "./store"
import { BrowserRouter} from "react-router-dom"
import AllComponents from "./components/AllComponents"

function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  const contextPayload = {
    store: state,
    setStore: dispatch
  }

  return (
    <>
      <context.Provider value={contextPayload}>
        <BrowserRouter>
          <AllComponents/>
        </BrowserRouter>
      </context.Provider>
    </>
  )
}

export default App
