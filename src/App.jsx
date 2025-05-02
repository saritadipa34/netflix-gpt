import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from "./pages/Signup";

const App=()=>{
  return(
    <div>
      <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
<Route path="/login" element={<Login />}/>
<Route path="/signup" element={<Signup />}/>
      </Routes>
      </Router>
    </div>
  )
}
export default App;