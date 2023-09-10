import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home, Contact, About, Project } from './pages';

function App() {
  return (
    <div className='Container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/Contact' Component={Contact} />
          <Route path='/About' Component={About} />
          <Route path='/project' Component={Project} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
