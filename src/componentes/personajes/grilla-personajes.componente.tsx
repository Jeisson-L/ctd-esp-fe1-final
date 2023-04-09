import { useAppSelector } from '../../Redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Character } from '../../types/character.types';


/**
 * Grilla de personajes para la pagina de inicio
 * 
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * 
 * 
 * @returns un JSX element 
 */
const GrillaPersonajes = () => {

    const characters = useAppSelector(state => state.character.characters)
    const error = useAppSelector(state => state.character.error)

    return <div className="grilla-personajes">
        {
            error 
                ? <p> No se encontrontaron datos.</p>
                : characters && characters.map((character: Character) => (
                    <TarjetaPersonaje character={character}
                        key={character.id} />
                    ))
        }
    </div>
}
 
export default GrillaPersonajes;