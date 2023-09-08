import {useEffect, useState} from 'react'

export function useFetch(url, options){
    
    const [movie, setMovies] = useState([]);

    const movies = async () => {
        try {
            const response = await fetch(url, options);
            if(response.status === 200) {
                const movi = await response.json();
                setMovies([...movi.results]);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        movies()
    }, [])
    return movie;
}