import "./Detalle.css";
import BotonFavorito from "../componentes/botones/boton-favorito.componente";
import TarjetaEpisodio from "../componentes/episodios/tarjeta-episodio.componente";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useEffect } from "react";
import { extractEpisodeId } from "../services/episode.services";
import { filterEpisodes } from "../Redux/characterSlice";
import { episode } from "../types/episode.types";

/**
 * Esta es la pagina de detalle. Aqui se puede mostrar la vista sobre el personaje seleccionado junto con la lista de episodios en los que aparece
 * 
 * EL TRABAJO SOBRE ESTE ARCHIVO ES OPCIONAL Y NO ES REQUISITO DE APROBACION
 * 
 * 
 * 
 * Uso: 
 * ``` <PaginaDetalle /> ```
 * 
 * @returns la pagina de detalle
 */
const PaginaDetalle = () => {
    const dispatch = useAppDispatch();
    const character = useAppSelector(state => state.character.characterSelected)
    const episodes = useAppSelector(state => state.character.episodes)
    const error = episodes.length === 0

    useEffect(()=>{
        let ids = character.episode.map((urlEpisode:string)=>{
            return extractEpisodeId(urlEpisode)
        })

        dispatch(filterEpisodes(ids.join(',')))

    }, [character.episode, dispatch])

    return character.id === 0 
    ?
        <div className="container">
            <p> No se ha seleccionado un personaje.</p> 
        </div>
    :
        <div className="container">
        <h3>{character.name}</h3>
        <div className={"detalle"}>
            <div className={"detalle-header"}>
                <img src={character.image} alt={character.name}/>
                <div className={"detalle-header-texto"}>

                    <p>{character.name}</p>
                    <p>Planeta: {character.origin.name}</p>
                    <p>Genero: {character.gender}</p>
                </div>
                <BotonFavorito character={character} />
            </div>
        </div>
        <h4>Lista de episodios donde apareció el personaje</h4>
        <div className={"episodios-grilla"}>
            {
                error || episodes.length === 0
                ? <p> No se encontrontaron datos.</p>
                : episodes && episodes.map((episode: episode) => (
                    <TarjetaEpisodio episode={episode}
                        key={episode.id} />
                    ))
            }
        </div>
    </div>
}

export default PaginaDetalle