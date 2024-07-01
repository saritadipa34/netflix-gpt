import React from "react";

import { LOGO_URL } from "../utils/constant";
const Header=()=>{
    return(
    <div>
        <div className="absolute bg-gradient-to-b from-black py-2 pl-16 px-8 z-10">
            <img src={LOGO_URL} alt="logo" className="w-full h-20"/>
            </div>
        </div>
    )
}
export default Header;