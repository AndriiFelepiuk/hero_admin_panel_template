import {useHttp} from '../../hooks/http.hook';
import {useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {heroesFetching, heroesFetched, heroesFetchingError, heroesDelete, } from '../../actions';
import HeroesListItem from "../heroesListItem/HeroesListItem";
import Spinner from '../spinner/Spinner';
import { createSelector } from 'reselect';

// Завдання для цього компонента:
// При натисканні на "хрестик" йде видалення персонажа із загального стану
// Ускладнене завдання:
// Видалення йде і з json файлу за допомогою методу DELETE

const HeroesList = () => {

    const filteredHeroesSelector = createSelector(
        (state) => state.filters.activeFilter,
        (state) => state.heroes.heroes,
        (filters, heroes)=>{
            if(filters === 'all'){
                console.log('render')
                return heroes
            }else{
                return heroes.filter(item => item.element === filters)
            }
        }
    )
    // const filteredHeroes =  useSelector(state => {

    // })

    const heroesLoadingStatus = useSelector(state => state.heroesLoadingStatus);
    const dispatch = useDispatch();
    const {request} = useHttp();


    useEffect(() => {
        dispatch('HEROES_FETCHING');
        request("http://localhost:3001/heroes")
            .then(data => dispatch(heroesFetched(data)))
            .catch(() => dispatch(heroesFetchingError()))

        // eslint-disable-next-line
    }, []);

    const onDelete = useCallback((id) => {
        // Удаление персонажа по его id
        request(`http://localhost:3001/heroes/${id}`, "DELETE")
            .then(data => console.log(data, 'Deleted'))
            .then(dispatch(heroesDelete(id)))
            .catch(err => console.log(err));
        // eslint-disable-next-line
    }, [request]);



    if (heroesLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (heroesLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Помилка завантаження</h5>
    }

    const renderHeroesList = (arr) => {
        if (arr.length === 0) {
            return <h5 className="text-center mt-5">Героїв поки немає</h5>
        }

        return arr.map(({id, ...props}) => {
            return <HeroesListItem key={id} id={id} {...props} onDelete={(id)=>onDelete(id)}/>
        })
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const filteredHeroes = useSelector(filteredHeroesSelector);
    const elements = renderHeroesList(filteredHeroes);
    return (
        <ul>
            {elements}
        </ul>
    )
}

export default HeroesList;