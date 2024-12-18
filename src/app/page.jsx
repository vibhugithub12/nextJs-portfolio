"use client"

import Image from "next/image";
import {motion} from "framer-motion";
import Link from 'next/link';

const Homepage = () => {
  return(
    <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
     <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
    {/* Image container */}
    <div className="h-1/2 relative lg:h-full lg:w-1/2">
      <Image src="/hero.png" alt="myImg" fill className="object-contain" />
    </div>

    {/* Text container */}
    <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
      {/* Title */}
      <h1 className="text-4xl font-bold md:text-6xl">Your Vision, My Code </h1>
      {/* Ḍescription */}
      <p className="md:text-xl">Turning your dream website into a reality with the latest techonology and precision.</p>
      {/* Buttons */}
      <div className="flex w-full gap-4 justify-center lg:justify-start">
      <Link href="/portfolio">
        <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View my work</button>
        </Link>
        <Link href="/contact">
        <button className="p-4 rounded-lg ring-1 ring-black ">Contact me</button>
        </Link>
      </div>
    </div>
  </div>
  </motion.div>
  )
};

export default Homepage;
