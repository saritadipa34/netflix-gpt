import { useState } from "react";
import Button from "./Button";

const Header=()=>{
  const [isHome,setIsHome]=useState(true);

    return(
        <div className="w-full ">
            <div className=" flex justify-between items-center bg-gradient-to-b from-black ">
           <img className="h-20 w-45 relative z-10 " src="/logo.jpeg" alt="logo" />
           { isHome && <div className="flex gap-5">
            <Button text={" English"} className={"bg-transparent text-white px-4 h-8 py-1 rounded-3xl"} />
            <Button text={"Sign in"} className={"bg-white px-4 py-1 h-8 rounded-3xl"}/>
            </div>}
          </div>
            </div>

    )
}
export default Header;