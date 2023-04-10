import Filtros from "../componentes/personajes/filtros.componente"
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente"
import Paginacion from "../componentes/paginacion/paginacion.componente";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { actionCleanFilter, findCharactersByNamepag, getPaginatedCharacters } from "../Redux/characterSlice";
import { useEffect } from "react";
 
/**
 * Esta es la pagina principal. Aquí se debera ver el panel de filtros junto con la grilla de personajes.
 * 
 * Uso: 
 * ``` <PaginaInicio /> ```
 * 
 * @returns la pagina de inicio
 */
const PaginaInicio = () => {
    const dispatch = useAppDispatch();
    const characters = useAppSelector(state => state.character.characters)
    const filter = useAppSelector( state => state.character.filter)

    const clean = () => {
        dispatch(actionCleanFilter())
    }

    useEffect(()=>{
        dispatch(findCharactersByNamepag(filter))
    }, [filter, dispatch])

    return <div className="container">
        <div className="actions">
            <h3>Catálogo de Personajes</h3>
            <button className="danger" onClick={clean}>Limpiar Filtros</button>
        </div>
        <Filtros />
        <Paginacion />
        <GrillaPersonajes characters={characters} />
        <Paginacion />
    </div>
}

export default PaginaInicio