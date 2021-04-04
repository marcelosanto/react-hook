// eslint-disable-next-line no-unused-vars
export const reducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_TITLE':
            console.log('Mudar o titulo')
            return { ...state, title: 'Deu certo man' }
    }
    return { ...state }
}
