const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'HEROES_FETCHING':
            return {
                ...state,
                heroesLoadingStatus: 'loading'
            }
        case 'HEROES_FETCHED':
            return {
                ...state,
                heroes: action.payload,
                heroesLoadingStatus: 'idle'
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HEROE_DELETE':
            const newHeroesMassive = state.heroes.filter(item => item.id !== action.payload)
            return {
                ...state,
                heroes: newHeroesMassive   
            }
        case 'HEROE_ADD':
            const newHeroesList = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: newHeroesList 
            }
        default: return state
    }
}

export default reducer;