import './filtros.css';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import { actionFilter, findCharactersByNamepag } from '../../Redux/characterSlice';

const Filtros = () => {
    const dispatch = useAppDispatch()
    const filter = useAppSelector( state => state.character.filter)
    
    const filterByName = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(actionFilter(e.target.value));
        dispatch(findCharactersByNamepag(e.target.value))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={filterByName} value={filter} />
    </div>
}

export default Filtros;