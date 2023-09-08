import {MovieInfo} from '../movieCard/MovieInfo.jsx'
import {useFetch} from '../../fetching/useFetch.js'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LoadingSpinner } from '../loading/LoadingSpinner.jsx';

const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTdlZTZiNmMwNzliMDMzNGNhOTQ5ODIzZmY2YTdjMSIsInN1YiI6IjY0ZDI4YjdlMTc3OTJjMDExYzliODUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bXn4crnNhqoxu9Ojnqt1zoFWpXMH8n6aOK894Xxjfc'
    }
};
export function ListMovies(){

    const [loading, setLoading] = useState(true);

    const listMovie = useFetch(url, options);
    
    useEffect(() => {
        if (listMovie > 0) {
            setLoading(false);
        }
    }, []);

    return (
        <>
            {listMovie.map(m => {
            {loading && <LoadingSpinner/>}
                return ( 
                        <li key={m.id} >
                            <Link to={`/movie/${m.id}`}>
                                <MovieInfo
                                originalTittle={m.original_title} 
                                overrai={m.overview} 
                                languaje={m.original_language} 
                                fechaEstreno={m.release_date}
                                img={m.poster_path}
                                popularidad={m.popularity}
                                />    
                            </Link>
                        </li>
                )
            })}
        </>
    )
}