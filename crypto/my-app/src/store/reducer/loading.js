const initialState = {
    loading : false
}
export default function reducer(state  = initialState, action) {
    const { payload, type } = action
    switch (type) {
        case 'isLoading':
            return {...state, payload: payload}
        default:
            return state
    }
}