import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";
import { onAuthStateChanged } from "firebase/auth";


const App=()=>{
const dispatch=useDispatch();

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const {uid,displayName,email }= user;
     dispatch(addUser({uid:uid,email:email,displayName:displayName}));
      // ...
    } else {
      dispatch(removeUser());
      // User is signed out
      // ...
    }
  });
},[])

  return(
    <div>
      <Router>
    <Routes>
      <Route path="/" element={<Home />}/>
<Route path="/login" element={<Login />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/browse" element={<Browse />} />
      </Routes>
      </Router>
    </div>
  )
}
export default App;