"use client"

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import {useRef} from "react";

const About = () => {
const containerRef=useRef();
const skillRef=useRef()
// const isSkillRefInView=useInView(skillRef,{once:true})
const isSkillRefInView=useInView(skillRef,{once:true,margin:"-50px"})

const expeienceRef=useRef()
// const expeienceRefInView=useInView(experienceRef,{once:true})
const expeienceRefInView=useInView(expeienceRef,{once:true,margin:"-50px"})

    const {scrollYProgress}=useScroll({container:containerRef})
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            {/* Container */}
            <div className="h-full overflow-y-scroll lg:flex" ref={containerRef}> 

                {/* Text container */}
                <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64  lg:w-2/3 lg:pr-0">
                    {/* Biography container */}
                    <div className="flex flex-col gap-12 justify-center">
                        {/* Biograpy Title */}
                        <h1 className="font-bold text-2xl">Biography</h1>
                        {/* Biograpy Description*/}
                        <p className="text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat blanditiis distinctio mollitia sed rem nemo veniam atque deleniti quos quae optio doloribus fuga non praesentium ea aut eum, consequuntur voluptatem laudantium id tempora aliquam quaerat maxime. Harum dolorem adipisci amet.</p>
                        {/* Biography quote */}
                        <span className="italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, voluptatibus.</span>
                        {/* Biography Sign */}
                        <div className="self-end">
                            <svg width="507" height="273" viewBox="0 0 507 273" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M90 2C106.658 62.1693 125.992 121.424 145.667 180.667C153.812 205.194 162.083 229.683 169.5 254.444C171.057 259.643 173.037 265.28 173.944 270.722C174.008 271.106 173.992 269.945 174 269.556C174.439 249.12 176.07 228.69 177.778 208.333C181.209 167.435 188 126.119 188 85C188 81.1461 190.666 37.6569 187.278 38.0556C141.901 43.3941 42.5571 107.188 102 157.778C107.684 162.615 115.473 169.53 122.778 171.778C131.802 174.554 132.635 141.766 132.778 140.444C136.19 108.939 138.536 76.9757 131.667 45.8333C131.522 45.1773 130 35.8748 130 40.3333C130 67.4652 125.505 95.5375 128.556 122.556C129.09 127.29 129.944 132.085 130.778 136.778C130.814 136.981 131.101 141.233 131.167 141.222C134.098 140.734 134.928 133.487 137.667 133.222C141.799 132.822 148.113 148.604 150.333 151.667C159.972 164.962 160.19 138.228 155.444 133.167C152.346 129.861 145.261 136.531 148.444 139.556C153.955 144.791 163.235 144.55 168.778 140.444C173.027 137.297 171.564 138.814 174.444 144C175.238 145.428 178.147 148.098 180 147.833C182.072 147.537 181.465 145.035 183 144.222C186.226 142.514 187.104 150.538 189.667 149C190.071 148.757 190.477 148.432 190.667 148C192.938 142.821 195.861 130.523 196.667 127.111C202.129 103.965 210.211 77.6502 208.556 53.5556C208.34 50.4214 205.883 39.9581 201.556 38.7778C199.103 38.1089 195.961 91.3222 195.889 93.7778C195.423 109.733 195.608 125.154 198.944 140.722C200.809 149.423 204.487 140.106 206.889 136.722C212.985 128.133 219.063 129.925 228.111 133.778C233.154 135.925 238.979 143.003 245 142C247.29 141.618 242.557 131.851 236 136.222C226.806 142.352 237.861 134.722 241.111 132.667C246.6 129.195 249.545 127.853 254 132.944C257.108 136.497 258.154 140.846 262.556 136.444C267.694 131.306 271.881 128.235 279.278 131.111C286.772 134.025 294.672 134.911 302.667 135C305.601 135.033 308.629 134.773 311.389 136C311.525 136.061 311.902 136.139 311.778 136.222C306.318 139.888 300.149 142.374 294.222 145.222C261.075 161.151 227.531 176.255 193.722 190.722C150.434 209.246 105.936 229.573 60.3333 242C41.0429 247.257 23.7385 249.673 4.22222 249C3.74895 248.984 0.727811 248.547 2.77778 248C16.0361 244.464 32.2197 241.077 44.6667 238.111C125.233 218.911 205.775 199.452 286.889 182.667C355.038 168.564 423.538 156.82 492.556 148.056C497.547 147.422 501.128 146.904 505 144" stroke="#130202" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </div>
                        {/* Biography Scroll SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* Skills container */}
                    <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
                        {/* Skill title */}
                        <motion.h1 initial={{x:"-100vw"}} animate={isSkillRefInView?{x:"0"}:{}} transition={{delay:0.2}} className="font-bold text-2xl">SKILLS</motion.h1>
                        {/* Skill list */}
                        <motion.div initial={{x:"-100vw"}} animate={isSkillRefInView?{x:"0"}:{}} transition={{delay:0.2}} className="flex gap-4 flex-wrap">
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">NextJs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Typecript</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Reactjs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MUI</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">TailwindCSS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Nodejs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Expressjs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Nestjs</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">AWS</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">API</div>
                            <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git-Github/Gitlab</div>
                        </motion.div>
                        {/* Skill scroll SVG */}
                        <motion.svg
                            initial={{ opacity: 0.2, y: 0 }}
                            animate={{ opacity: 1, y: "10px" }}
                            transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={50}
                            height={50}
                        >
                            <path
                                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path
                                d="M15 11L12 14L9 11"
                                stroke="#000000"
                                strokeWidth="1"
                            ></path>
                        </motion.svg>
                    </div>

                    {/* Experience container */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={expeienceRef}>
                        {/* Experience Title */}
                        <motion.h1 className="font-bold text-2xl" initial={{x:"-100vw"}} animate={expeienceRefInView?{x:"0"}:{}} transition={{delay:0.2}}>EXPERIENCE</motion.h1>

                        {/* Experience List */}
                        <motion.div className="" initial={{x:"-100vw"}} animate={expeienceRefInView?{x:"0"}:{}} transition={{delay:0.2}}>
                            {/* Experience List Item */}
                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3">
                                    {/* Job Title */}
                                    <div className="bg-white p-3 w-fit font-semibold rounded">Software Developer(FullStack)</div>
                                    {/* Job Description */}
                                    <div className="p-3 text-sm italic">Created frontend and backend of E-commerce websites using Next.js+MUI at front and Nest.js+MongoDB at back and DB.</div>
                                    {/* Job Date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">Apr 2024 - Present</div>
                                    {/* Job Company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Eshopstride</div>
                                </div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* Line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-1/3">

                                </div>
                            </div>

                            <div className="flex justify-between h-48">
                                {/* Left */}
                                <div className="w-1/3">

                                </div>
                                {/* Center */}
                                <div className="w-1/6 flex justify-center">
                                    {/* Line */}
                                    <div className="w-1 h-full bg-gray-600 rounded relative">
                                        {/* Line circle */}
                                        <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className="w-1/3">
                                    {/* Job Title */}
                                    <div className="bg-white p-3 font-semibold rounded">Frontend Developer</div>
                                    {/* Job Description */}
                                    <div className="p-3 text-sm italic">Build an ATS checker website using React+tailwind. Worked on Modals and responsiveness.</div>
                                    {/* Job Date */}
                                    <div className="p-3 text-red-400 text-sm font-semibold">Mar 2024 - Apr 2024</div>
                                    {/* Job Company */}
                                    <div className="p-1 rounded bg-white text-sm font-semibold w-fit">Apnabot</div>
                                </div>
                            </div>


                        </motion.div>
                    </div>

                </div>
                {/* SVG Container */}
                <div className="hidden lg:block w-1/3 sticky top-0 z-30">
                    <Brain scrollYProgress={scrollYProgress}/>
                </div>
            </div>
        </motion.div>
    );
}

export default About;