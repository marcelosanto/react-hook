import P from 'prop-types'
import { useEffect, useMemo, useState } from 'react'
import './App.css'

const Post = ({ post }) => {
    console.log('O Filho renderizou')
    return (
        <div className="post" key={post.id}>
            <h1>{post.title}</h1>
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
}

function App() {
    const [posts, setPosts] = useState([])
    const [value, setValue] = useState('')

    console.log('O pai renderizou')

    // Component did mount
    useEffect(() => {
        setTimeout(() => {
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then((r) => r.json())
                .then((r) => setPosts(r))
        }, 5000)
    }, [])

    return (
        <div className="App">
            <p>
                <input type="search" value={value} onChange={(e) => setValue(e.target.value)} />
            </p>
            {useMemo(() => {
                return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />)
            }, [posts])}

            {posts.length <= 0 && <h1>Carregando Posts...</h1>}
        </div>
    )
}

export default App
