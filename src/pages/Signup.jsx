import { ValidateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef,useState } from "react";
import Button from "../components/Button";
import { updateProfile } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import addUser from "../utils/appStore"

const Signup=()=>{
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const name=useRef(null);
    const email=useRef(null);
    const password=useRef(null);
    const[errorMessage,setErrorMessage]=useState(null);


const handleSignUp=(e)=>{
    e.preventDefault();
    const nameValue=name.current.value;
    const emailValue=email.current.value.trim();
    const passwordValue=password.current.value.trim();
    const message=ValidateForm(nameValue,emailValue,passwordValue);
       setErrorMessage(message);
    if(message) return;
    
    createUserWithEmailAndPassword(auth, emailValue, passwordValue)
    .then((userCredential) => {
      const user = userCredential.user;
     
updateProfile(user, {
  displayName: nameValue, photoURL:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/640px-User_icon_2.svg.png"
}).then(() => {
  const {uid,displayName,email,photoURL }= auth.currentUser;
  console.log(user)
  console.log(auth.currentUser)
dispatch(addUser({uid:user.uid,email:user.email,displayName:user.displayName ,photoURL:user.photoURL}));

  // Profile updated!
  // ...
}).catch((error) => {

  // An error occurred
  // ...
});
navigate("/browse");

    console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode + errorMessage);
    });
    
    }

    return(
        <div className=" h-full w-full text-white flex items-center justify-center">
<form action="" className="px-15 py-10 min-h-100 w-[450px]  bg-black opacity-90">

<h1 className="text-3xl font-bold mb-4">Sign up</h1>

<input type="text"
ref={name}
name="name" className="h-13 mb-3 px-4 border border-white w-full" placeholder=" Enter your Name" required/>

<input type="text" ref={email}
 name="text" className="h-13 w-full px-4 mb-4 border border-white"  placeholder="Enter your Email" required/>

<input type="password"
ref={password}
name="password" className="h-13 mb-3 px-4 border border-white w-full" placeholder="Enter your Password" required/>

{<p className="text-red-500 mb-2 text-sm text-center">{errorMessage}</p>}

<Button text={"Sign In"} onClick={handleSignUp}
 className={"bg-red-600 w-full mb-2 h-10 rounded-lg"} />
<h1 className=" text-center mb-2">OR</h1>
        </form>
        </div>
    )
}
export default Signup;