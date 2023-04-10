import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { Character } from '../../types/character.types';

interface GrillaPersonajesProps {
    characters: Character[]
}


/**
 * Grilla de personajes para la pagina de inicio
 * @param {Character[]} characters
 * @returns un JSX element
 */
const GrillaPersonajes = ({characters} : GrillaPersonajesProps) => {
    
    const error = characters.length === 0

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