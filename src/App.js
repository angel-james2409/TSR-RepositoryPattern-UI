import logo from './logo.svg';
import './App.css';
import {Home} from './Home';
import {Properties} from './Properties';
import {User} from './User';
import {Navigation} from './Navigation';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
     <h3 className="m-3 d-flex justify-content-center">
       React JS Tutorial
     </h3>

     <Navigation/>

     <Routes>
       <Route path='/' element={<Home/>} exact/>
       <Route path='/properties' element={<Properties/>}/>
       <Route path='/user' element={<User/>}/>
     </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;