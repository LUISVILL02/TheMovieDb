import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Layaout from './components/layaout/Layaout.jsx';
import { Header } from './components/header/Header.jsx';
import { Main } from './components/main/Main.jsx';
import Movie from './components/movie/Movie.jsx';
import './components/main/styles/popularMovies.css';


function App() {

  return (
    <>
      <Router>
        <header className='header-'>
          <Header/>
        </header>
        <Routes>
          <Route index element={<Layaout/>}></Route>
          <Route path='/' element={ <main> <Main/> </main> }></Route>
          <Route path='populares' element={ <main> <Main/> </main> }></Route>
          <Route path='search' element={ <main> <Main/> </main> }></Route>
          <Route path="/movie/:id" Component={Movie} />
        </Routes>
      </Router>
    </>
  )
}

export default App
