import Button from "../components/Button";
import Header from "../components/Header";


const Login=()=>{
    return(
        <div className="text-white">
<Header className={"relative z-10"}/>
<img src="/loginBg.jpeg" alt="" className="absolute top-0 " />
<form action="" className="p-15 min-h-150 w-[450px]  absolute mx-auto left-0 right-0 bg-black opacity-90">
<div className="flex flex-col gap-5">
<h1 className="text-3xl font-bold">Sign In</h1>
<input type="text" name="text" className="h-13  w-full px-4 border border-white"  placeholder="Email or mobile number"/>
<input type="password" name="password" className="h-13 px-4 border border-white w-full" placeholder="Password" />
<Button text={"Sign In"}  className={"bg-red-600 w-full h-10 rounded-lg"}/>
<h1 className=" text-center">OR</h1>
<Button className={"bg-gray-400 w-full h-10 rounded-lg"} text={"Use a sign-in code"}/>
<a href="" className="text-center underline mb-2">Forgot password?</a>
</div>
<div className="flex gap-4 items-center mb-2">
    <input type="checkbox" className="size-4" />
    <p >Remember me?</p>
</div>
<p className="text-gray-400 mb-2">New to Netflix?<span className="font-bold cursor-pointer hover:text-white">Sign up now.</span></p>
<p className="text-gray-400">The page is protected by Google reCAPTCHA to ensure you're not a robot.</p>
</form>
        </div>
    )
}
export default Login;