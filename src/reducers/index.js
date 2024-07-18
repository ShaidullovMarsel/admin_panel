const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all',
    filtersLoadingStatus: 'idle'
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
                filteredHeroes: state.activeFilter === 'all' ?
                                action.payload : 
                                action.payload.filter(item => item.element === state.activeFilter),
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
        case 'FILTERS_FETCHED':
        return {
            ...state,
            filters: action.payload,
            filtersLoadingStatus: 'idle'
        }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all' ?
                                state.heroes : 
                                state.heroes.filter(item => item.element === action.payload),
                heroesLoadingStatus: 'idle'
        }
        default: return state
    }
}

export default reducer;