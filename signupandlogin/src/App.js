import react from 'react'
import Signup from './components/Signup';
import Login from './components/Login';

import {BrowserRouter,Routes,Route, Router} from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import Home from './components/Home';


function App() {
  return (
   <BrowserRouter>
   <Routes>
   
   <Route path='/' element={<Home />}></Route>
   <Route path='/register' element={<Signup />}></Route>
   <Route path='/Login' element={<Login />}></Route>
   <Route path='/Home' element={<Main />}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
