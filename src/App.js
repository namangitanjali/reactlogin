
import Home from './components/Home';
import Login from './components/Login';
import Details from './components/Details';
import Errror from './components/Errror';
import {BrowserRouter,Routes,Route} from "react-router-dom"


function App() {
  return (
  <>
  <BrowserRouter>
    
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
      <Route path='*' element={<Errror />} />
    </Routes>
  
    </BrowserRouter>
  </>
  );
}

export default App;