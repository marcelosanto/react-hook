import { createContext, useContext, useState } from 'react'
import './App.css'

const globalState = {
    title: 'O Titulo que contexto',
    body: 'O body do contexto',
    counter: 0,
}

const GlobalContext = createContext()

// eslint-disable-next-line react/prop-types
const Div = () => {
    return (
        <>
            <H1 />
            <P />
        </>
    )
}

// eslint-disable-next-line react/prop-types
const H1 = () => {
    const theContext = useContext(GlobalContext)
    const {
        contextState: { title },
    } = theContext
    return <h1>{title}</h1>
}

// eslint-disable-next-line react/prop-types
const P = () => {
    const theContext = useContext(GlobalContext)
    const {
        contextState: { body, counter },
        setContextState,
    } = theContext
    return (
        <p onClick={() => setContextState((s) => ({ ...s, counter: s.counter + 1 }))}>
            {body} {counter}
        </p>
    )
}

function App() {
    const [contextState, setContextState] = useState(globalState)

    return (
        <GlobalContext.Provider value={{ contextState, setContextState }}>
            <Div />
        </GlobalContext.Provider>
    )
}

export default App
