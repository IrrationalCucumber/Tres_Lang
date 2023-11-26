import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-up" exact Component={SignUp} />
          
          <Route path="/profile"element={<Profile />} />
          <Route path="/log-in"element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
