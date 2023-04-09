import { useEffect } from 'react';
import { getPaginatedCharacters } from '../../Redux/characterSlice';
import { useAppDispatch, useAppSelector } from '../../Redux/hooks';
import './paginacion.css';

/**
 * Componente que contiene los botones para paginar
 * 
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 * 
 * 
 * @returns un JSX element 
 */
const Paginacion = () => {

    const dispatch = useAppDispatch()
    const urlPreviusPage = useAppSelector(state => state.character.infoPages.prev)
    const urlNextPage = useAppSelector(state => state.character.infoPages.next)

    const previusPage = () =>{
        dispatch(getPaginatedCharacters(urlPreviusPage))
    }
    
    const nextPage = () =>{
        dispatch(getPaginatedCharacters(urlNextPage))
    }
    
    return <div className="paginacion">
        <button disabled={urlPreviusPage === null} className={"primary"} onClick={previusPage}>Anterior</button>
        <button disabled={urlNextPage === null} className={"primary"} onClick={nextPage}>Siguiente</button>
    </div>
}

export default Paginacion;