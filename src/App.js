import './App.css'
import Adduser from './pages/Adduser/Adduser';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Userlist from './pages/Userlist/Userlist';
function App() {
  return (
    <div className="App">
 <BrowserRouter>
<Routes>
  <Route path='/' element={<Userlist/>}/>
  <Route path='/Adduser' element={<Adduser/>}/>
  
  
  </Routes> 
 
 </BrowserRouter>
    </div>
  );
}

export default App;
