import {useState} from 'react'
import { useEffect } from 'react';
import './styles/search.css'

export function Search({onDataSearch, onIsSearching, valueInputSearch}){
    const [valueInput, setValueInput] = useState("");
    const [isSearching, setIsSearching] = useState(false);
    
    const handleInputChange = e => setValueInput(e.target.value);

    const handleClick = e => {
        e.preventDefault();
        setIsSearching(true);
        valueInputSearch(valueInput);
    }
    useEffect(() =>{
        const handleSearch = async () =>{
            const url = `https://api.themoviedb.org/3/search/movie?query=${valueInput}&include_adult=false&language=en-US&page=1`;
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTdlZTZiNmMwNzliMDMzNGNhOTQ5ODIzZmY2YTdjMSIsInN1YiI6IjY0ZDI4YjdlMTc3OTJjMDExYzliODUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bXn4crnNhqoxu9Ojnqt1zoFWpXMH8n6aOK894Xxjfc'
                }
            }
            try {
                const response = await fetch(url, options);
                if(response.status === 200){
                    const movie = await response.json();
                    onDataSearch(movie.results);
                    onIsSearching(isSearching);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if(isSearching) {handleSearch()};
        return () => {
            setIsSearching(false);
        }
    }, [isSearching])
    return (
        <form>
            <input type="text" onChange={handleInputChange}/>
            <button onClick={handleClick} type="submit">Buscar</button>
        </form>
    )
}