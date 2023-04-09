import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import './grilla-personajes.css';
import TarjetaPersonaje from './tarjeta-personaje.componente';
import { getPaginatedCharacters } from '../../Redux/characterSlice';
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

    return <div className="grilla-personajes">
        {characters && characters.map((character: Character) => (
                <TarjetaPersonaje character={character}
                    key={character.id} />
            ))}
    </div>
}
 
export default GrillaPersonajes;