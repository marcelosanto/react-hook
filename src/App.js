import { useReducer } from 'react'
import './App.css'

const initialState = {
    title: 'O titulo do contexto',
    body: 'o body do contexto',
    counter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'muda': {
            console.log('Chamou muda')
            return { ...state, title: 'Mudou' }
        }
        case 'inverter': {
            console.log('Chamou inverter')
            const { title } = state
            return { ...state, title: title.split('').reverse().join('') }
        }
        case 'contador': {
            console.log('Chamou contador')
            const { counter } = state
            return { ...state, counter: counter + 1 }
        }
    }

    return { ...state }
}

function App() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { counter, title, body } = state

    return (
        <div>
            <h1>
                {title} {counter}
            </h1>
            <p>{body}</p>
            <button onClick={() => dispatch({ type: 'muda' })}>Click</button>
            <button onClick={() => dispatch({ type: 'inverter' })}>Inverter</button>
            <button onClick={() => dispatch({ type: 'contador' })}>Contador</button>
        </div>
    )
}

export default App
