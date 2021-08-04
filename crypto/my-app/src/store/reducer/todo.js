const initialState = {
    todos : [],
    favorites : []
}

export default function reducer(state  = initialState, action) {
    const { payload, type } = action
    switch (type) {
        case 'addMyQoute':
            return {...state, todos: state.todos.concat( payload )};
        case 'addFavorites':
            return {...state, favorites: state.favorites.concat( payload )}
        default:
            return state
    }
}