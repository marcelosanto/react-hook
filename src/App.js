import { useState, useEffect } from 'react'
import './App.css'

function eventFn() {
    console.log('h1 clicado')
}

function App() {
    const [counter, setCounter] = useState(0)
    const [counter2, setCounter2] = useState(0)

    // ComponentDidUpdate = executa toda vez que o componente atualiza
    // useEffect(() => {
    //     console.log('ComponentDidUpdate')
    // })

    // ComponentDidMount = executa uma vez
    // useEffect(() => {
    //     console.log('ComponentDidMount')
    // }, [])

    // ComponentDidMount = executa uma vez
    useEffect(() => {
        document.querySelector('h1').addEventListener('click', eventFn)

        // componentWillumount - limpeza
        return () => {
            document.querySelector('h1').removeEventListener('click', eventFn)
        }
    }, [])

    // Com dependência = executa toda vez que a dependência mudar
    useEffect(() => {
        console.log('Contador mudou para', counter)
    }, [counter])

    return (
        <div className="App">
            <p>3</p>
            <h1>
                C1: {counter} C2: {counter2}
            </h1>
            <button onClick={() => setCounter(counter + 1)}>+</button>
            <br />
            <button onClick={() => setCounter2(counter2 + 1)}>+</button>
        </div>
    )
}

export default App
