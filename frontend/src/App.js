import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About } from "./pages/About";
import Home from "./pages/Home";
import { Profile } from "./pages/Profile";
import Login from "./pages/Login";





function App() {
  return (
    <div>
       <BrowserRouter> 
       <NavBar/>

       <Routes>
     
          <Route path='/' element={<Home/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/login' element={<Login/>}/>
       



       </Routes>
        
        
        </BrowserRouter>
     
    </div>
  );
}
export default App;
