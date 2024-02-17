 import { useState } from 'react';
 import './App.css';
 import { BrowserRouter, Routes, Route} from 'react-router-dom';
 
 //pages imports
 import Home from './pages/Home';
 import About from './pages/About';
 import Antrenamente from './pages/Antrenamente';
 import ErrorPage from './pages/ErrorPage';
 import SharedLayout from './components/SharedLayout';
 import Login from './pages/Login';
import Register from './pages/Register';
 

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout/>}>
          <Route index element ={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/antrenamente' element={<Antrenamente/>}/>
          <Route path='/login' element={<Login setUser={setUser}></Login>} />
          <Route path='/register' element={<Register/>}/>
          <Route path='*' element={<ErrorPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
