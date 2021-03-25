import { useState } from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0)

    const handlerIncrement = () => {
        setCounter((counter) => counter + 1)
    }

    return (
        <div className="App">
            <h1>Contador: {counter}</h1>
            <p>
                <button type="button" onClick={handlerIncrement}>
                    Increment
                </button>
            </p>
        </div>
    )
}

export default App
