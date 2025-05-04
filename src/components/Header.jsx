
import Button from "./Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { IoIosNotifications } from "react-icons/io";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header=({className})=>{
const location=useLocation()
const isHome=location.pathname === "/";
const isBrowse=location.pathname === "/browse";
const navigate=useNavigate();

const handleSignOut=()=>{
signOut(auth).then(() => {
  navigate("/login");
  // Sign-out successful.
}).catch((error) => {
  navigate("/Home");
  // An error happened.
  console.log(error);
});

  console.log("sign out");
}

    return(
        <div className="w-full">
          
            <div className=" flex justify-between items-center bg-gradient-to-b from-black ">
           <img className="h-20 w-45 relative z-10 " src="/logo.jpeg" alt="logo" />
           { isHome && <div className="flex gap-5">
            <Button text={"English"} className={`bg-transparent text-white px-4 h-8 py-1 rounded-3xl ${className} `} />
            <Link to="/login" className={"bg-white px-4 py-1 h-8 rounded-3xl"}>Sign in</Link>
            </div>}

{
  isBrowse && <div className="flex gap-40 justify-between items-center">
<ul className="flex text-white gap-5 text-sm">
  <Link>Home</Link>
  <Link>TV Shows</Link>
  <Link>Movies</Link>
  <Link>Games</Link>
  <Link>New & Popular</Link>
  <Link>My List</Link>
  <Link>Browse by Languages</Link>
</ul>

<div className=" flex gap-5 text-sm items-center text-white">
<IoSearch />
<Link>Children</Link>
<IoIosNotifications />
<img src="https://www.wackybuttons.com/designcodes/0/110/1108492.png" className="h-8 w-8 rounded-xl" alt="" />
<button onClick={handleSignOut} className="border border-white text-white p-2 cursor-pointer">sign out</button>
</div>
    </div>
}
</div>
          </div>

    )
}
export default Header;