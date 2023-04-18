import React from 'react'
import {
  BrowserRouter as Router,
 Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Singlepage from './pages/Singlepage.jsx/Singlepage';


const App = () => {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/hotels' element={<List/>}/>
        <Route path='/hotels/:id' element={<Singlepage/>}/>
    
      </Routes>
    </Router>
    </>
  )
}

export default App