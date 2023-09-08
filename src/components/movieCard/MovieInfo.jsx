import { BtnFavorite } from '../widgets/BtnFavorite.jsx'
import './styles/movieCard.css'


export function MovieInfo({originalTittle, tittle, 
                            languaje, overrai, popularidad, 
                            fechaEstreno, img}){
    const date = new Date(fechaEstreno);   
    let fechaEstr = date.getFullYear();  
    
    let poster = img ? "https://image.tmdb.org/t/p/original"+ img : 'https://www.brasscraft.com/wp-content/uploads/2017/01/no-image-available.png'
                            
    return (
        
        <div className='card'>
            <img src={poster} alt="" />
            <div className='info'>
                <h1>{originalTittle}</h1>
                <h2>{tittle}</h2>
                <div className="resumen">

                    <span>Idioma original: {languaje}</span>
                    <section>
                        <p className="overview">{overrai}</p>
                    </section>
                    <span>Popularidad: {popularidad}</span>
                    <span>Fecha de estreno: {fechaEstr}</span>
                    <BtnFavorite/>
                </div>
            </div>
        </div>
        
    )
}