import { useDispatch } from 'react-redux';
import './boton-favorito.css';
import { Character } from '../../types/character.types';
import { useAppSelector } from '../../Redux/hooks';
import { actionAddFavorite, actionRemoveFavorite } from '../../Redux/characterSlice';
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 * 
 * Deberás tipar las propiedades si usas este componente
 * 
 * 
 * @returns un JSX element 
 */

interface Props {
    character : Character
}

const BotonFavorito = ({character}: Props) => {
    const dispatch = useDispatch();
    const isFavorite = useAppSelector(state => state.character.favorites).some(c => c.id === character.id)
    const src = isFavorite ? "/imagenes/star-filled.png" : "/imagenes/star.png"

    const changeFavorite = () => {
        if (isFavorite){
            dispatch(actionRemoveFavorite(character))
        }
        else {
            dispatch(actionAddFavorite(character))
        }
    }

    return <div className="boton-favorito" onClick={changeFavorite}>
        <img src={src} alt={"favorito"} />
    </div>
}

export default BotonFavorito;