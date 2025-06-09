
// import { Link } from "react-router-dom";
import { AuroraText } from "@/components/magicui/aurora-text";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Header = () => {
    const [isvisible, Setisvisible] = useState()

    useEffect(() => {

        navigator.onLine ? Setisvisible(true) : Setisvisible(false)

    }, [])

    return (
        <div className="header flex items-center justify-between w-full px-3 py-3 mx-auto max-w-8xl lg:px-4
    ">
            <Link to="./">   <h1 className="text-4xl font-bold tracking-tighter md:text-5xl lg:text-7xl">
                Film<AuroraText
                  speed = {2}
                    colors={["#e5e059", "#B9314F", "#3A4F41","#e5625e",]}
                >Hunt</AuroraText>
            </h1>
            </Link>
          
        </div>
    )
}
export default Header