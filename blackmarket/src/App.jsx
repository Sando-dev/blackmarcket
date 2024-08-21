import './App.css'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';  
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Signup } from './components/Signup/Signup';
import { useContext } from 'react';
import { UserSessionContext } from './context/UserSessionProvider';


function App() { 

  const {isLoggedIn, handleLoging} = useContext(UserSessionContext);

  return (
    <Router>
      <Routes>
        
        <Route path='/' element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />,
        <Route path='/login' element={isLoggedIn ? <Navigate to="/login" /> : <Login />} />
        <Route path='/signup' element={<Signup />} />

      </Routes>
    </Router>
  )
}

export default App
