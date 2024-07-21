
const initialState = {
    heroes: [],
    heroesLoadingStatus: 'idle',
    filters: [],
    activeFilter: 'all',
    filteredHeroes: []
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
                heroesLoadingStatus: 'idle',
            }
        case 'HEROES_FETCHING_ERROR':
            return {
                ...state,
                heroesLoadingStatus: 'error'
            }
        case 'HERO_DELETED':
            let newHeroDeletedList = state.heroes.filter(item => item.id !== action.payload)
            return {
                ...state,
                heroes: newHeroDeletedList,
                filteredHeroes: state.activeFilter === 'all' ? 
                        newHeroDeletedList : 
                        newHeroDeletedList.filter(item => item.element === state.activeFilter)         
            }
        case 'HERO_CREATED':
            let newHeroCreatedList = [...state.heroes, action.payload]
            return {
                ...state,
                heroes: newHeroCreatedList,
                filteredHeroes: state.activeFilter === 'all' ? 
                        newHeroCreatedList : 
                        newHeroCreatedList.filter(item => item.element === state.activeFilter)   
            }
        case 'FILTERS_FETCHED':
            return {
                ...state,
                filters: action.payload
            }
        case 'ACTIVE_FILTER_CHANGED':
            return {
                ...state,
                activeFilter: action.payload,
                filteredHeroes: action.payload === 'all' ?
                                state.heroes :
                                state.heroes.filter(item => item.element === action.payload)
            }
        default: return state
    }
}

export default reducer;