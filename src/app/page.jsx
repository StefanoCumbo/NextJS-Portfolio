"use client";
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
const Homepage = () => {
  return (
  <motion.div className="h-full overflow-scroll" initial={{y:"-200vh"}} animate={{y:"0%"}}  transition={{duration:1.5 }}>
    <div className=" h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48">

    {/* IMAGE CONTAINER */}
    <div className="h-1/2 relative  lg:h-full lg:w-1/2">
      <Image src="/hero.png" alt ="" fill className="object-contain"></Image>

    </div>
    {/* TEXT CONTAINER */}
    <div className="h-1/2   lg:h-full lg:w-1/2   flex flex-col gap-8 justify-center items-center ">
      <h1 className=" xs:text-lg  text-4xl font-bold md:text-5xl   ">
        Welcome to my digital portfolio!
      </h1>
      <p className="md:text-xl">
      In this project I have built a responsive portfolio website using Next.js, Tailwind CSS, and Framer Motion. I used the Framer Motion library to create animations with smooth animations and Tailwind CSS to create a responsive design that ensures an excellent viewing experience on any device.I have also showcased my previous projects which also highlight my programming competence.
      </p>
      <div className="flex gap-4 w-full">
        <Link href="/portfolio">
        <button className="p-4 rounded-xl ring-1 ring-black bg-black text-white"> View my work</button>

        </Link>
        <Link href="/contact">
        <button className="p-4 rounded-xl ring-1 ring-black"> Contact me</button>

        </Link>
      </div>
      

    </div>

    </div>
  </motion.div>)
 
  
};

export default Homepage;
