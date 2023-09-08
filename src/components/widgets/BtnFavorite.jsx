import { Favorite } from '../icons/Incons.jsx'
import { useState } from 'react';

export const BtnFavorite = () => {
    const [favori, setFavori] = useState(false);

    const classFavorite = favori ? 'heart isFavorite' : 'heart';	
    return (
        <button className="favorite" onClick={() => setFavori(!favori)}><Favorite isFavorite={classFavorite}/></button>
    )
}