import { SearchNofount } from '../search/SearchNofount.jsx'
import {Search} from '../search/Search.jsx'
import {ListMovies} from '../popularMovies/PopularMovies.jsx'
import { useState } from 'react'
import {MovieInfo} from '../movieCard/MovieInfo.jsx'
import { Link } from 'react-router-dom'
import { Square } from '../animation/Square.jsx';
import { LoadingSpinner } from '../loading/LoadingSpinner.jsx'
import './styles/popularMovies.css'

export const MoviesMain = () => {
    return (
        <>
            <h1>Peliculas populares</h1>
            <ul className='popularMovies'>
                <ListMovies/>
            </ul>
        </>
    )
}

export function Main(){
    const [searchResult, setSearchResult] = useState([]);
    const [isSearching, setIsSearching] = useState(false);
    const [loading, setLoading] = useState(false);
    const [valueInput, setValueInput] = useState("");

    const handleDataSearch = movieR => {
        setLoading(true);
        setSearchResult(movieR);
        if(movieR.length > 0) {
            setLoading(false);
        }
        setLoading(false);
    }
    
    const handleIsDataSearch = isSe => setIsSearching(isSe);

    return (
        <>
            <Search onDataSearch={handleDataSearch} onIsSearching={handleIsDataSearch}
                    valueInputSearch={(value) => setValueInput(value)}/>
            <Square/>
            {searchResult.length === 0 && isSearching ? (
                <SearchNofount/>
            ):(
                <>
                    {loading ? ( 
                        <LoadingSpinner/> 
                    ) : (
                        <>
                            {isSearching && (
                                <>
                                    <h1>Resultados de la busqueda: {valueInput}</h1>
                                    <ul className='popularMovies'>
                                        {searchResult.map(movie => {
                                            return (
                                                <li key={movie.id}>
                                                    <Link to={`/movie/${movie.id}`}>
                                                        <MovieInfo
                                                        originalTittle={movie.original_title} 
                                                        overrai={movie.overview} 
                                                        languaje={movie.original_language} 
                                                        fechaEstreno={movie.release_date}
                                                        popularidad={movie.popularity}
                                                        img={movie.poster_path}
                                                        />
                                                    </Link>
                                                </li>    
                                            )
                                        })}
                                    </ul>
                                </>
                                
                            )}
                        </>
                            
                    )}
                    {!isSearching && (
                        <MoviesMain/>
                    )}
                </>
            )}
        </>
    )
}