import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Favorite, Start } from '../icons/Incons.jsx';
import { BtnFavorite } from '../widgets/BtnFavorite.jsx';
import './styles/movie.css'


const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYTdlZTZiNmMwNzliMDMzNGNhOTQ5ODIzZmY2YTdjMSIsInN1YiI6IjY0ZDI4YjdlMTc3OTJjMDExYzliODUyNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9bXn4crnNhqoxu9Ojnqt1zoFWpXMH8n6aOK894Xxjfc'
    }
};

const MovieBackground = ({img, 
                        originalTittle, 
                        tittle, languaje, 
                        overrai, popularidad, 
                        fechaEstreno, genero}) => {

    const date = new Date(fechaEstreno);   
    let fechaEstr = date.getFullYear();    
    let poster = img ? "https://image.tmdb.org/t/p/original"+ img : 'https://www.brasscraft.com/wp-content/uploads/2017/01/no-image-available.png'
	
    return (
        <div className='card-movie'>
            <img className='background' src={poster} alt="" />
            <div className='info-movie'>
                <img className='image' src={poster} alt="" />
                <div className="resumen">
                    <div className="titles">
                        <h1>{originalTittle}</h1>
                        <h2>{tittle}</h2>
                    </div>

                    <span className='languaje'>Idioma original: {languaje}</span>
                    <section>
                        <p className="overview-movie">{overrai}</p>
                    </section>
                    <ul>
                        <span className='genre'>{genero}</span>
                    </ul>
                    <span className='popularity'>Popularidad: {popularidad} <Start/></span>
                    <span className='fecha-estreno'>Fecha de estreno: {fechaEstr}</span>
                    <BtnFavorite/>
                </div>
            </div>
        </div>
    )
}

const Movie = () => {
    const { id } = useParams();
    const [movi, setMovie] = useState(null);
    const url = `https://api.themoviedb.org/3/movie/${id}?language=en-US`;


    useEffect(() =>{
        const movie = async () => {
            try {
                const response = await fetch(url, options);
                if(response.ok){
                    const movie = await response.json();
                    setMovie(movie);
                }
                } catch (error) {
                    console.log('el error es: ', error);
                }
        }
        movie()
    }, [id]);


    return (
        <>  
            <main className='main-movie'>
                {movi &&(
                    <MovieBackground className='movieBackground'
                    originalTittle={movi.original_title} 
                    overrai={movi.overview} 
                    languaje={movi.original_language} 
                    fechaEstreno={movi.release_date}
                    popularidad={movi.popularity}
                    img={movi.poster_path}
                    genero={movi.genres.map(genre => genre.name).join(', ')}
                    />
                )}
            </main>
        </>
    )
}
export default Movie;