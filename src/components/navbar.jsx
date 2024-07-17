"use client"

import Link from "next/link";
import { useState } from "react";
import NavLink from './navlink';
import {motion} from 'framer-motion';

const MenuList=[
    {url:"/",title:"Home"},
    {url:"/about",title:"About"},
    {url:"/portfolio",title:"Portfolio"},
    {url:"/contact",title:"Contact"},
];

const Navbar=()=> {

    const [open,setOpen]=useState(false)

    // Animation for hamburger menu
    const topVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    const centerVariants={
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
    }

    const bottomVariants={
        closed:{
            rotate:0,
        },
        opened:{
            rotate:-45,
            backgroundColor:"rgb(255,255,255)"
        }
    }

    // Animation for navigation links after opening hamburger menu
    const listVariants={
        closed:{
            x:"100vw"
        },
        opened:{
            x:"0",
            transition:{
                when:"beforeChildren",
                staggerChildren:0.2
            }
        }
    }

    const listItemVariants={
        closed:{
            x:-10,
            opacity:0,
        },
        opened:{
            x:0,
            opacity:1
        }
    }

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
                    <motion.div variants={topVariants}
                      animate={open?"opened":"closed"}
                     className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                    <motion.div variants={centerVariants}
                      animate={open?"opened":"closed"}
                     className="w-10 h-1 bg-black rounded "></motion.div>
                    <motion.div variants={bottomVariants}
                      animate={open?"opened":"closed"}
                     className="w-10 h-1 bg-black rounded origin-left"></motion.div>
                </button>
                {/* menu list */}
                {open &&(
                <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40">
                    {MenuList.map(item=>(
                        <motion.div variants={listItemVariants} className="" key={item.title}>
                        <Link href={item.url}>
                            {item.title}
                        </Link>
                    </motion.div>
                    ))}

                    </motion.div>
                 )}
            </div>
        </div>
    );
}

export default Navbar;