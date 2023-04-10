import { useNavigate } from 'react-router-dom';
import { actionSelectCharacter } from '../../Redux/characterSlice';
import { useAppDispatch } from '../../Redux/hooks';
import { Character } from '../../types/character.types';
import BotonFavorito from '../botones/boton-favorito.componente';
import './tarjeta-personaje.css';

interface TarjetaPersonajeProps {
    character: Character,
}

/**
 * Tarjeta para cada personaje dentro de la grilla de personajes. 
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los personajes
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaPersonaje = ({character} : TarjetaPersonajeProps) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const selectCharac = () => {
        dispatch(actionSelectCharacter(character))
        navigate('/detalle')
    }

    return <div className="tarjeta-personaje">
        <img src={character.image} alt={character.name} onClick={selectCharac}/>
        <div className="tarjeta-personaje-body">
            <span onClick={selectCharac}>{character.name}</span>
            <BotonFavorito character={character} />
        </div>
    </div>
}

export default TarjetaPersonaje;