export const heroesFetching = () => {
    return {
        type: 'HEROES_FETCHING'
    }
}

export const heroesFetched = (heroes) => {
    return {
        type: 'HEROES_FETCHED',
        payload: heroes
    }
}
export const heroesDelete = (id) => {
    return {
        type: 'HEROES_DELETED',
        payload: id
    }
}

export const heroCreated = (newHero)=>{
    return {
        type: 'HERO_CREATED',
        payload: newHero,
    }
}

export const heroesFetchingError = () => {
    return {
        type: 'HEROES_FETCHING_ERROR'
    }
}

export const filtersFetched = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
        payload: filters
    }
}
export const filtersFetching = (filters) => {
    return {
        type: 'FILTERS_FETCHED',
    }
}
export const filtersFetchingError = () => {
            return {
                type: 'FILTERS_FETCHING_ERROR',
            }
}

export const filterChange = (name) => {
    console.log(name)
    return {
        type: 'FILTERS_CHANGE',
        payload: name,
    }
}