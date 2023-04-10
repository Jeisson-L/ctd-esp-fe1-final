import { useDispatch } from "react-redux";
import { useAppSelector } from "../Redux/hooks";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";
import { actionRemoveAllFaverites } from "../Redux/characterSlice";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {
    const dispatch = useDispatch()
    const favorites = useAppSelector(state => state.character.favorites)

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger" onClick={() => dispatch(actionRemoveAllFaverites())}>Eliminar Todos</button>
        </div>
        {
            favorites.length == 0 ?
            <p><strong>No seleccionaste ningun personaje como favorito</strong></p>:
            <GrillaPersonajes characters={favorites} />
        }
    </div>
}

export default PaginaFavoritos