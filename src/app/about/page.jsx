"use client";
import { motion, useInView} from "framer-motion";
import { useRef } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSchool, faBrain,faCode } from '@fortawesome/free-solid-svg-icons';

const AboutPage = () => {
    const containerRef = useRef();

    const skillRef = useRef();
    const isSkillRefInView = useInView(skillRef, { once: true, margin: "-100px" });

    return (
        <motion.div 
            className="h-full"
            initial={{ y: "-200vh" }}
            animate={{ y: "0%" }}
            transition={{ duration: 1.5 }}
        >
            {/* CONTAINER */}
            <div className="h-full overflow-scroll" ref={containerRef}>
                {/* TEXT CONTAINER - Now full-width */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 w-full max-w-6xl mx-auto">
                    {/* BIOGRAPHY CONTAINER */}
                    <div className="flex flex-col gap-10 justify-center">
                        {/* TITLE */}
                        <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
                        
                        {/* BIOGRAPHY BOXES - MODERN STYLE */}
                        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-6">
                            {/* BOX 1: EDUCATION */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white  p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-lg font-semibold mb-3">Education</h3>
                                <p className="text-gray-700">
                                    Masters in Computer Science at University of East Anglia, with a year-long exchange at Deakin University in Melbourne, Australia. This diverse experience has enhanced my adaptability and problem-solving skills.
                                </p>
                            </motion.div>

                           

                    

                            {/* BOX 2: PASSION */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-lg font-semibold mb-3">Passion</h3>
                                <p className="text-gray-700">
                                    Web development enthusiast focused on building innovative, user-centric applications with Next.js, React.js, TypeScript, and CSS, as well as back-end technologies like MongoDB and MySQL.
                                </p>
                            </motion.div>


                           

                            {/* BOX 3: PROJECTS */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <h3 className="text-lg font-semibold mb-3">Project Experience</h3>
                                <p className="text-gray-700">
                                    Portfolio includes full-stack ecommerce store, responsive portfolio website, and AI-powered children's book generator. Focused on building secure and scalable applications with React, MongoDB, Express.js, Node.js, and TypeScript.
                                </p>




                            
                            </motion.div>

                            {/* EDUCATION PIC */}
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex items-center justify-center"
                            >
                               <FontAwesomeIcon className="text-8xl" icon={faSchool} />

                            </motion.div>


                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex items-center justify-center"
                            >
                               <FontAwesomeIcon className="text-8xl" icon={faBrain} />

                            </motion.div>


                            
                            <motion.div 
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow flex items-center justify-center"
                            >
                               <FontAwesomeIcon className="text-8xl" icon={faCode} />

                            </motion.div>


                            
                           


                        </div>
                      

                        {/* SIGNATURE */}
                        <div className="self-end">
                            <svg width="250" height="200" viewBox="0 0 499 219" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M155 2C96.2686 2 14.8733 26.427 3.72221 93.3333C-1.55504 124.997 7.92292 153.598 34.7222 172.333C46.3842 180.486 60.227 187.111 74.6667 187.667C86.665 188.128 94.5538 182.069 102.556 173.778C114.122 161.793 126.039 148.694 130.556 132.222C131.046 130.435 131.908 125.198 130.778 126.667C127.682 130.692 126.724 138.576 125.222 143.333C123.386 149.149 119.381 165.101 126 169.556C136.104 176.356 137.888 162.893 138 156C138.08 151.077 138 146.146 138 141.222C138 134.921 139.882 141.968 140.611 144.111C144.003 154.088 159.219 166.674 168.333 155.222C171.408 151.36 173 136.23 173 141.167C173 150.032 174.089 158.643 174.889 167.444C175.318 172.163 175.813 170.454 175.944 166.389C176.244 157.108 176.267 148.318 179.389 139.444C184.016 126.293 185.59 140.636 187 147.444C187.654 150.604 192.736 172.132 193 157.333C193.102 151.612 192.752 145.031 194.222 139.444C195.041 136.332 197.196 147.522 197.222 147.667C197.724 150.398 201.597 178.155 205.889 175.111C223.685 162.492 227.743 133.042 231.444 113.5C231.912 111.029 235 97.375 235 97.8333C235 111.921 234.874 126.007 236.111 140.056C236.348 142.749 238.756 178.272 244.167 161.5C245.637 156.941 247.595 145.235 252.5 142.889C257.205 140.639 258.683 157.74 259 159.556C260.178 166.294 261.881 173.238 262 180.111C262.05 183.02 259.656 181.609 257.778 180.778C250.142 177.398 242 172.863 242 163.889C242 159.241 272.008 167.172 275.667 167.778C281.517 168.747 289.393 171.106 289 162.667C288.911 160.745 286.844 159.974 285.111 160.167C281.354 160.584 283.569 169.102 284.278 170.944C289.404 184.274 314.599 183.09 325.389 183.667C337.874 184.334 350.803 184.639 363.222 182.778C367.58 182.125 372.298 181.053 375.167 177.444C383.152 167.398 370.762 157.196 361 156.111C357.473 155.719 351.188 156.266 353.111 161.556C353.936 163.824 357.019 164.754 358.556 166.444C363.402 171.775 360.181 181.439 356.889 186.556C341.059 211.157 308.42 213.454 282.111 215.333C228.791 219.142 175.089 216.194 122.111 209.667C111.661 208.379 101.073 207.114 90.7222 205.111C88.8774 204.754 85.6798 204.344 84 203C83.2355 202.388 82.9457 201.541 83.7778 200.778C88.5663 196.388 104.073 194.135 108.444 193.222C235.911 166.595 367.428 168 497 168" stroke="black" stroke-width="3" stroke-linecap="round"/>
                            </svg>
                        </div>
                        
                        {/* BIOGRAPHY SCROLL */}
                        <motion.svg
                            initial={{opacity: 0.2, y: 0}}
                            animate={{opacity: 1, y: "10px"}}
                            transition={{repeat: Infinity, duration:3, ease:"easeInOut"}}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                            className="mx-auto"
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            />
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>
                    
                    {/* SKILLS CONTAINER */}
                    <div className="flex flex-col gap-12 justify-center " ref={skillRef}>
                        {/* SKILLS TITLE */}
                        <motion.h1 
                            initial={{x: "-300px"}} 
                            animate={isSkillRefInView ? {x: "0"} : {x:"-300"}} 
                            className="font-bold text-2xl"
                        >
                            SKILLS
                        </motion.h1>

                        {/* SKILL LIST */}
                        <motion.div 
                            initial={{x: "-300px"}} 
                            animate={isSkillRefInView ? {x: "0"} : {x:"-300"}}
                            className="flex gap-4 flex-wrap pb-40 "
                        >
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Javascript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TypeScript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Mongodb</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Node.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Express.js</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">GraphQL</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Framer Motion</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Web Token</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">FireBase</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">AWS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">PostreSQL</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">mySQL</div>
                        </motion.div>
                    </div>
                    
                    
                </div>
            </div>
        </motion.div>
     );
}
 
export default AboutPage;