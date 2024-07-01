
import { useState } from "react";
import Header from "./Header";
import { BG_URL } from "../utils/constant";
const Login = () => {
    const [isSignIn,setIsSignIn]=useState(true);
const clickHandle = () => {
setIsSignIn(!isSignIn);
};
    return(
        <div>
<h1>LOGIN</h1>
<Header />
<div className="absolute">
<img src={BG_URL} />
</div>
    <form className="bg-black relative p-12 w-[450px] my-36 mx-auto right-0  bg-opacity-85 left-0 text-white">
    <h1 className=" text-left text-3xl font-bold">{ isSignIn ? "Sign In" :"Sign Up"}</h1>
        <input type="text" placeholder="Email or mobile number" className="p-4 my-5 w-full border border-white bg-transparent" />
        {!isSignIn && <p className="text-center text-sm">Message and data rates may apply</p>}
        {isSignIn ?<input type="text" placeholder="Password" className="p-4 my-5 w-full border border-white bg-transparent"/> :
        <button type="submit"  className="bg-red-600 w-full my-5 p-2 rounded-lg">Send sign-in code</button>}
        {isSignIn && <button type="submit"  className="bg-red-600 w-full my-5 p-2 rounded-lg">{ isSignIn ? "Sign in" : "Sign Up"}</button>}
<p className="text-center">OR</p>
<div className="w-full p-2 my-5 bg-gray-500 text-l rounded-lg text-center">
<h4 onClick={clickHandle} className="cursor-pointer">{isSignIn ? "Use a sign-in code" : "Use Password"}</h4>
</div>
<h4 className="text-center">{isSignIn ? "Forgot Password?" : "Forgot email or phone number?"}</h4>
<div className="flex my-2"><input  className="h-10 w-5" type="checkbox"/><p className="ml-0 p-2">Remember me</p></div>
<p>New to Netflix? Sign up now.</p>

    </form>
        </div>
    )
};
export default Login;