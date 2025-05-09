import Home from "./pages/Home";
import Login from "./pages/Login";
import { BrowserRouter as Router,Routes,Route, useNavigate } from "react-router-dom";
import Signup from "./pages/Signup";
import Browse from "./pages/Browse";
import { useEffect } from "react"; 
import { addUser, removeUser } from "./utils/userSlice";
import { auth } from "./utils/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";

const App=()=>{
  const navigate=useNavigate();
  const dispatch=useDispatch();

  useEffect(()=>{
    const unSubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,displayName,email,photoURL }= user;
       dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}));
       navigate("/browse");
        // ...
      } else {
        dispatch(removeUser());
        navigate("/")
        // User is signed out
        // ...
      }
    });
    return()=> unSubscribe();
  },[])
return(
    <div>
      
    <Routes>
      <Route path="/" element={<Home />}/>
<Route path="/login" element={<Login />}/>
<Route path="/signup" element={<Signup />}/>
<Route path="/browse" element={<Browse />} />
      </Routes>
  
    </div>
  )
}
export default App;