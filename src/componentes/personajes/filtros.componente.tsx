import { useState } from 'react';
import './filtros.css';
import { useAppDispatch } from '../../Redux/hooks';
import { findCharactersByNamepag } from '../../Redux/characterSlice';

const Filtros = () => {
    const dispatch = useAppDispatch()

    const filterByName = (e:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(findCharactersByNamepag(e.target.value))
    }

    return <div className="filtros">
        <label htmlFor="nombre">Filtrar por nombre:</label>
        <input type="text" placeholder="Rick, Morty, Beth, Alien, ...etc" name="nombre" onChange={filterByName} />
    </div>
}

export default Filtros;