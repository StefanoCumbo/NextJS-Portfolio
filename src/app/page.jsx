"use client";
import Image from "next/image";
import {motion} from "framer-motion"
import Link from "next/link";
const Homepage = () => {
  return (
  <motion.div className="h-full overflow-hidden" initial={{y:"-200vh"}} animate={{y:"0%"}}  transition={{duration:1.5 }}>
    <div className=" h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48  ">
    

    {/* IMAGE CONTAINER */}
  <div className="h-1/2 relative xs:w-full xs:h-1/4 lg:h-full lg:w-1/2 flex items-center justify-center">
  <div className="relative xs:w-48 xs:h-48 xs:mt-10 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[450px] xl:h-[450px] rounded-full overflow-hidden border-4 border-white shadow-lg">
    <Image
      src="/stefano4.jpg"
      alt="Stefano portrait"
      fill
      className="object-cover transition-all duration-500 ease-in-out hover:brightness-110"
      priority
    />
  </div>
</div>
  
  
  

    
    {/* TEXT CONTAINER */}
    <div className="h-1/2   lg:h-full lg:w-1/2   flex flex-col gap-8 justify-center items-center ">
      <h1 className=" xs:text-xl xs:mt-20 xs:pt-20 ms:pl-5 text-4xl font-bold md:text-5xl transition-transform duration-300 hover:scale-110  ">
        Welcome to my digital portfolio!
      </h1>

      <div className="">
      <p className="  xs:p-10 md:text-xl">
       Hi im Stefano, a Full Stack Software Engineer from London, passionate about building innovative solutions and constantly improving.
      </p>

      </div>
     
      <div className="flex mt-5 gap-4 w-full items-center justify-center">
        <Link href="/portfolio">
        <button className="p-4 rounded-xl ring-1 ring-black bg-black text-white transition-transform duration-300 hover:scale-110"> View my work</button>

        </Link>
        <Link href="/contact">
        <button className="   p-4 rounded-xl ring-1 ring-black transition-transform duration-300 hover:scale-110"> Contact me</button>

        </Link>
      </div>
      

    </div>

    </div>
  </motion.div>)
 
  
};

export default Homepage;
