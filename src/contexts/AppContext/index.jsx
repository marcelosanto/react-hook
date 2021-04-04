import P from 'prop-types'
import { createContext, useReducer } from 'react'
import { reducer } from '../../reducers/reducer'

import { globalState } from './data'

export const GlobalContext = createContext()

export const AppContext = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [state, dispatch] = useReducer(reducer, globalState)

    return <GlobalContext.Provider value={{ state, dispatch }}>{children}</GlobalContext.Provider>
}

AppContext.propTypes = {
    children: P.node,
}
