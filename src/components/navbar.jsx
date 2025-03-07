"use client";
import Link from "next/link";
import { useState } from "react";
import Image from 'next/image'
import NavLink from "./navLink";
import {motion} from "framer-motion"
import { useTheme } from "next-themes";



const links = [

    {url: "/", title: "home"},
    {url: "/about", title:"about"},
    {url: "/portfolio", title: "portfolio"},
    {url: "/contact", title: "contact"}

];

const Navbar = () => {


    const [open,setOpen] = useState(false)

    const {theme,setTheme} = useTheme()
 

    const topVariants = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:45,
            backgroundColor:"rgb(255,255,255)",

        }
         
    }
    const centreVariants = {
        closed:{
            opacity:1,
        },
        opened:{
            opacity:0,
        }
         
    }
    const bottomVariants = {
        closed:{
            rotate:0,
        },
        opened:{
            rotate:- 45,
            backgroundColor:"rgb(255,255,255)",

        }
         
    }

    const listVariants = {
        closed:{
            x: "100vw",
        },
        opened:{
            x:0,
        }
    }




    return ( 
        <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 ">
            {/* LINKS */}
            <div className="hidden md:flex gap-4 w-1/3 text-xl">
                {links.map((link)=>(
                     <NavLink link={link} key={link.title}/>
                ))}
            </div>

 
            {/* LOGO */}
            <div className="md:hidden lg:flex w-1/3  xl:justify-center"> 
                <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center">
                    <span className="text-white mr-1">Stef</span>
                    <span className="w-12 h-8 rounded bg-white text-black flex items-center justify-center">.Dev</span>
                </Link>
            </div>


            {/* SOCIAL */}
            <div className="hidden md:flex gap-4 w-1/3">
                <Link href="https://github.com/StefanoCumbo">
                    <Image src="/github.png" alt="" width={24} height={24} />
                </Link>

                

                <Link href="https://www.linkedin.com/in/stefano-cumbo-884761193/">
                    <Image src="/linkedin.png" alt="" width={24} height={24} />
                </Link>

               





             {/* THEME TOGGLE */}
            <button className="flex items-center justify-center" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
             {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#9333ea">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                     </svg>
             ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9333ea" className="w-6 h-6">
                     <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </svg>
             )}
             </button>

                



                
            </div>


            <button className="md:hidden p-6 " onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
             {theme === 'dark' ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 20 20" fill="#9333ea">
                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                     </svg>
             ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#9333ea" className="w-6 h-6">
                     <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clipRule="evenodd" />
                    </svg>
             )}
             </button>


            {/* responsive Menu */}
            <div className="md:hidden w-1/6">
                <button className="w-10 h-8 flex flex-col justify-between z-50 relative " onClick={()=>setOpen(!open)}>
                    <motion.div
                     variants={topVariants}
                     animate={open ? "opened" : "closed"} 
                     className="w-10 h-1 bg-black origin-left">
                        
                     </motion.div>

                    <motion.div 
                    variants={centreVariants}
                    animate={open ? "opened" : "closed"} 

                     className="w-10 h-1 bg-black">
                    
                     </motion.div>

                    <motion.div 
                    variants={bottomVariants}
                    animate={open ? "opened" : "closed"} 

                     className="w-10 h-1 bg-black origin-left">

                     </motion.div>

                  


                </button>

                {/* MENU LIST */}
                {open && (
                     <motion.div variants={listVariants} initial="closed" animate="opened" className="absolute top-0 left-0 w-screen h-screen bg-black text-4xl text-white flex flex-col items-center justify-center gap-8 z-10
                     bg-black text-4xl text-white flex flex-col items-center justify-center gap-8 z-10">
                        {links.map((link)=>(
                            <Link href={link.url} key={link.title}>{link.title}</Link>
                        ))}
    
                    </motion.div>

                )}

               
            </div>
            
           
        </div>
     );
}
 
export default Navbar;