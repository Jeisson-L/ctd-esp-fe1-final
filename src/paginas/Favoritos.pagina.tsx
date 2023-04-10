import { useAppSelector } from "../Redux/hooks";
import GrillaPersonajes from "../componentes/personajes/grilla-personajes.componente";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 * 
 * Uso: 
 * ``` <PaginaFavoritos /> ```
 * 
 * @returns la pagina de favoritos
 */
const PaginaFavoritos = () => {

    const favorites = useAppSelector(state => state.character.favorites)

    return <div className="container">
        <div className="actions">
            <h3>Personajes Favoritos</h3>
            <button className="danger">Test Button</button>
        </div>
        <GrillaPersonajes characters={favorites} />
    </div>
}

export default PaginaFavoritos