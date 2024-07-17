"use client"
import {motion} from "framer-motion"

const About=()=> {
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{duration:1}}>
        <div>
            About
        </div>
        </motion.div>
    );
}

export default About;