import P from 'prop-types'
import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'

const Post = ({ post, handleClick }) => {
    console.log('O Filho renderizou')
    return (
        <div className="post" key={post.id}>
            <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}

Post.propTypes = {
    post: P.shape({
        id: P.number,
        title: P.string,
        body: P.string,
    }),
    handleClick: P.func,
}

function App() {
    const [posts, setPosts] = useState([])
    const [value, setValue] = useState('')
    const input = useRef(null)
    const contador = useRef(0)

    console.log('O pai renderizou')

    const handleClick = (value) => {
        setValue(value)
    }

    // Component did mount
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((r) => r.json())
                .then((r) => setPosts(r))
        }, 5000)
    }, [])

    useEffect(() => {
        input.current.focus()
        console.log(input.current)
    }, [value])

    useEffect(() => {
        contador.current++
    })

    return (
        <div className="App">
            <h1>Redenrizou: {contador.current}x</h1>
            <p>
                <input ref={input} type="search" value={value} onChange={(e) => setValue(e.target.value)} />
            </p>
            {useMemo(() => {
                return (
                    posts.length > 0 &&
                    posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />)
                )
            }, [posts])}

            {posts.length <= 0 && <h1>Carregando Posts...</h1>}
        </div>
    )
}

export default App
