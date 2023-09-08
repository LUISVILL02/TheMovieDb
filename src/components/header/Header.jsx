import { Link } from "react-router-dom"
import { SearchIcon } from "../icons/Incons.jsx"
import './styles/header.css'
import './styles/iconSearch.css'

export function Header(){
    return (
        <nav className="navigator glass">
            <ul className="list">
                <li className="effect-h"> 
                    <Link to='/'>Inicio</Link>
                </li>
                <li className="effect-h">
                    <Link to='/populares'>Populares</Link>
                </li>
                <li className="effect-h">
                    <Link to='/favorites'>Favoritas</Link>
                </li>
                <li className="effect-h">
                    <Link to='/allMovies'>Mas</Link>
                </li>
                <li className="searchLi">
                    <Link to='/search'><SearchIcon/> Buscar</Link>
                </li>
            </ul>
        </nav>
    )
}

