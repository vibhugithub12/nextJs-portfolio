"use client"

import Link from "next/link";
import { useState } from "react";
import NavLink from './navlink'

const MenuList=[
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/portfolio",title:"Portfolio"},
    {url:"/contact",title:"Contact"},
];

const Navbar=()=> {

    const [open,setOpen]=useState(false)

    return (
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
            {/* Name logo */}
            <div className="md:hidden lg:flex">
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                <span className="text-white mr-1">Vaibhav</span>
                <span className="h-8 rounded bg-white text-black flex items-center justify-center">Chauhan</span>
                </Link>
            </div>
            <div className="hidden md:flex gap-4">
            {MenuList.map((item)=>(
                // <Link href={item.url}>{item.title}</Link>
                // Importing the navlink component so that we can style the link too.
                <NavLink link={item} key={item.title}/>

            ))}
            </div>

            {/* Socials */}
            <div className="hidden md:flex gap-4">
                <Link href="https://www.github.com/vibhugithub12">
                <img src="/github.png" alt=""  width={24} height={24}/>
                </Link>
                <Link href="https://www.instagram.com/vaibhavchauhan._/">
                <img src="/instagram.png" alt=""  width={24} height={24}/>
                </Link>
                <Link href="https://www.linkedin.com/in/vaibhav-chauhan-0o0/">
                <img src="/linkedin.png" alt=""  width={24} height={24}/>
                </Link>

            </div>


            {/* Responsive menu */}
            <div className="md:hidden">
                {/* menu button */}
                <button onClick={()=>setOpen((prev)=>!prev)} className="w-10 h-8 flex flex-col justify-between z-50 relative">
                    <div className="w-10 h-1 bg-white rounded "></div>
                    <div className="w-10 h-1 bg-white rounded "></div>
                    <div className="w-10 h-1 bg-white rounded "></div>
                </button>
                {/* menu list */}
                {open &&(
                <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
                    {MenuList.map(item=>(
                        <Link href={item.url} key={item.title}>
                            {item.title}
                        </Link>
                    ))}
                    </div>
                 )}
            </div>
        </div>
    );
}

export default Navbar;