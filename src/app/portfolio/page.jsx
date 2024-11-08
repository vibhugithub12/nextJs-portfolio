"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Agrismart",
    desc: "An agriculture based website to help farmers find the nearest markets for their crops and the current prices for each crop",
    img: "https://asmart-n4tm-srajitm9161s-projects.vercel.app/assets/LogoAg-cbnFLPSb.png",
    link: "https://asmart-n4tm-srajitm9161s-projects.vercel.app/",
    textlink:"Visit Website"
  },
    {
      id: 2,
      color: "from-blue-300 to-violet-300",  
      title: "Footy Kingdom",
      desc: "A football website containing everything related to the football world - matches, fixtures, odds, everything.",
      img: "https://images.pexels.com/photos/46798/the-ball-stadion-football-the-pitch-46798.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "",
      textlink:"Under Construction"
    },
    // {
    //   id: 3,
    //   color: "from-violet-300 to-purple-300",
    //   title: "Vanilla Book App",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    //   img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    //   link: "https://lama.dev",
    //   textlink:"Visit Website"

    // },
    // {
    //   id: 4,
    //   color: "from-purple-300 to-red-300",
    //   title: "Spotify Music App",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    //   img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    //   link: "https://lama.dev",
    //   textlink:"Visit Website"
    // },
];

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-65%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col gap-4 text-white">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-80 h-54 md:w-96 md:h-52 xl:w-[300px] xl:h-[220px]">
                    <Image src={item.img} alt="" fill />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} className="flex justify-end">
                    <button className="p-2 text-sm md:p-4 md:text-md lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">{item.textlink}</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      {/* <div className="w-screen flex flex-col pt-8 items-center justify-center text-center">
        <h1 className="text-4xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[450px] md:h-[450px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-lg">
                Full Stack Developer 
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-36 md:h-36 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          > Have a chat?
          </Link>
        </div>
      </div> */}
      <motion.div className="w-screen h-[70vh] flex flex-col gap-8 rounded items-center justify-center"
        animate={{
          scale: [1,0.9, 1],
        }}
        transition={{
          duration: 2, 
          repeat: Infinity, // Repeat the animation infinitely
          ease: "easeInOut", 
        }}
        style={{ transformOrigin: 'center' }}
      >
      <h1 className="text-4xl">Do you have a project?</h1>
      {/* <Link
            href="/contact" className="p-4 bg-black text-white">Get in touch
      </Link> */}
      <motion.div
      className="relative inline-block"
      whileHover="hover"
    >
      <Link
        href="/contact"
        className="relative p-4 bg-black text-white overflow-hidden inline-block rounded-3xl"
      >
        <motion.span
          className="relative z-10"
          variants={{
            hover: { color: "#000000" },
          }}
        >
          Get in touch
        </motion.span>
        <motion.div
          className="absolute inset-0 bg-white z-0"
          initial={{ translateX: "-100%" }}
          variants={{
            hover: { translateX: 0 },
          }}
          transition={{
            duration: 0.5,
            ease: "easeInOut",
          }}
          style={{ background: 'linear-gradient(90deg, #FF7E5F, #FEB47B)' }}
        ></motion.div>
      </Link>
    </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;