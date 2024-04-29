import Home from "./components/Home"
import { useReducer } from "react"
import { context, globalReducer, initialState } from "./store"
function App() {
  const [state, dispatch] = useReducer(globalReducer, initialState)
  const contextPayload = {
    store: state,
    setStore: dispatch
  }

  return (
    <>
      <context.Provider value={contextPayload}>
        <Home />
      </context.Provider>
    </>
  )
}

export default App
