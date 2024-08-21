import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';  
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Signup } from './components/Signup/Signup';


function App() {

  return (
    <Router>
      <Routes>
        
        <Route path='/' element={<Home />} />,
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </Router>
  )
}

export default App
