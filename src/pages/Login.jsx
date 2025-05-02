import { signInWithEmailAndPassword } from "firebase/auth";
import Button from "../components/Button";
import Header from "../components/Header";
import { ValidateForm } from "../utils/validate";
import { auth } from "../utils/firebase";
import { useRef } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const navigate=useNavigate();
  const emailOrNumber=useRef(null);
  const password=useRef(null);
      const[errorMessage,setErrorMessage]=useState(null);
  
  const handleSignIn=(e)=>{
  e.preventDefault();
  const emailValue=emailOrNumber.current.value.trim();
  const passwordValue=password.current.value.trim();
  const signInMsg=ValidateForm(emailValue,passwordValue);
       setErrorMessage(signInMsg);
  if(signInMsg) return;

  signInWithEmailAndPassword(auth, emailValue, passwordValue)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user); 
    navigate("/browse");
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + errorMessage);
  });
  localStorage.setItem('user',JSON.stringify('userName'));
  }

    return(
        <div className="text-white">
<Header className={"relative z-10"}/>
<img src="/loginBg.jpeg" alt="" className="absolute top-0 " />

<form action="" className="px-15 py-10 min-h-150 w-[450px] mx-auto bg-black opacity-90">

<h1 className="text-3xl font-bold mb-4">Sign In</h1>
<input type="text" ref={emailOrNumber}
 name="text" className="h-13 w-full px-4 mb-4 border border-white"  placeholder="Email or mobile number"/>

<input type="password"
ref={password}
name="password" className="h-13 mb-3 px-4 border border-white w-full" placeholder="Password" />

{<p className="text-red-500 mb-2 text-sm text-center">{errorMessage}</p>}


<Button text={"Sign In"} onClick={handleSignIn}
 className={"bg-red-600 w-full mb-2 h-10 rounded-lg"} />
<h1 className=" text-center mb-2">OR</h1>

<Button className={"bg-gray-400 w-full h-10 rounded-lg mb-4"} text={"Use a sign-in code"}/>
<a href="" className="text-center underline text-md hover:text-gray-500 ">Forgot password?</a>

<div className="flex gap-4 mt-2 items-center mb-2">
    <input type="checkbox" className="size-4"/>
    <p className="text-sm">Remember me?</p>
</div>

<p className="text-white mb-2 text-sm">New to Netflix?<span className="font-bold cursor-pointer">Sign up now.</span></p>
<p className="text-gray-400 text-sm">The page is protected by Google reCAPTCHA to ensure you're not a robot.</p>

<a href="" className="underline text-[14px]  text-sky-400">Learnmore</a>

</form>
        </div>
    )
}
export default Login;