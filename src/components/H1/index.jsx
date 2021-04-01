import { useContext } from 'react'
import { GlobalContext } from '../../contexts/App'

// eslint-disable-next-line react/prop-types
export const H1 = () => {
    const theContext = useContext(GlobalContext)
    const {
        state: { title },
    } = theContext
    return <h1>{title}</h1>
}
