import Button from "./Button";

const Header=()=>{
    return(
        <div className="w-full ">
            <div className=" flex justify-between items-center bg-gradient-to-b from-black ">
           <img className="h-20 w-45 relative z-10 " src="/logo.jpeg" alt="logo" />
            <div className="flex gap-5">
            <Button text={" English"} className={"bg-transparent px-4 h-8 py-1 rounded-3xl"} />
            <Button text={"Sign in"} className={"bg-white px-4 py-1 rounded-3xl"}/>
            </div>
            </div>

            <div className="absolute z-20 top-70 w-150 mx-auto left-0 right-0 ">
            <div className="text-white flex flex-col gap-5 text-xl">
                <h1 className="text-6xl font-bold text-center">Unlimited movies,TV shows and more </h1>
                <p className="font-bold text-center">Starts at ₹149.Cancel at any time.</p>
                <p className="text-center">Ready to watch? Enter your email to create or restart your membership.</p>
                <div>
                <input type="text" placeholder="Email address" className="h-13 w-90  rounded-3xl px-4 border "/>
                <Button className={"bg-red-600 h-13 w-58 py-1 px-10 rounded-3xl ml-2"} text={"Get Started"}/>
            </div>
                        </div>
            </div>
        </div>
    )
}
export default Header;