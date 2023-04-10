import { episode } from '../../types/episode.types';
import './tarjeta-episodio.css';

interface TarjetaEpisodioProps {
    episode: episode
}

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 * 
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * 
 * 
 * @returns un JSX element 
 */
const TarjetaEpisodio = ({episode}:TarjetaEpisodioProps) => {
    const options : Intl.DateTimeFormatOptions  = {
        year: "numeric",
        month: "long",
        day: "numeric",
      };

    return <div className="tarjeta-episodio">
            <h4>{episode.name}</h4>
            <div>
                <span>{episode.episode}</span>
                <span>Lanzado el: {new Date(Date.parse(episode.created)).toLocaleDateString('en-US', options)}</span>
            </div>
    </div>
}

export default TarjetaEpisodio;