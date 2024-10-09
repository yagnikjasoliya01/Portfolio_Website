import { HERO_CONTENT } from "../constants"
import profilePic from "../assets/yagnikProfile.png" 
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: {x: -100 , opacity: 0},
    visible: {
        x:0,
        opacity:1,
        transition: { duration: 0.5 , delay: delay}
    }
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex flex-wrap lg:ml-32">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 
                     variants={container(0)}
                     initial="hidden"
                     animate="visible"
                     className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-7xl">
                        Yagnik Jasoliya
                    </motion.h1>

                    <motion.span 
                    variants={container(0.4)}
                    initial="hidden"
                    animate="visible"
                    className="bg-gradient-to-r from-pink-300 via bg-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
                        Full Stack Developer
                    </motion.span>

                    <motion.p 
                    variants={container(0.8)}
                    initial="hidden"
                    animate="visible"
                    className="my-2 max-w-xl py-6 font-light tracking-tighter">
                        { HERO_CONTENT }
                    </motion.p>

                    <motion.a 
                    variants={container(1.2)}
                    initial="hidden"
                    animate="visible"
                    href="https://drive.google.com/file/d/1-qzjQzPe9sLgy5f1i7K74jVHgwuHLcgk/view?usp=drive_link"
                    className="bg-stone-400 hover:bg-stone-300 font-bold text-stone-950  p-3 lg:p-4 inline-block rounded-2xl mb-5"
                    // href={HERO_CONTENT.resumeLink}
                    download
                    rel="noopener noreferrer"
                    target="_blank"
                    >
                        Download Resume
                    </motion.a>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-2 ">
                <div className="flex justify-center ">
                    <motion.img 
                    className="h-[500px]  rounded-2xl shadow-lg shadow-[#54355f]"
                    initial={{x: 100 , opacity: 0}} 
                    animate={{x:0, opacity:1,}}
                    transition={{duration: 1 , delay: 1.2}}
                    src={profilePic} alt="Yagnik Jasoliya  " />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero