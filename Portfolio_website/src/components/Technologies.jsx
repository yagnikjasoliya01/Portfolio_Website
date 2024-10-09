import { BiLogoPostgresql } from "react-icons/bi"
import {  DiJavascript1 } from "react-icons/di"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { SiMongodb } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"
import { motion } from "framer-motion"
import { DiGit } from "react-icons/di"

const iconVariants = (duration) => ({
    initial: { y: -10},
    animate: {
        y: [10 , -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }
    },
})

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <motion.h2 
        initial={{y: -100 , opacity: 0}}
        whileInView={{y:0, opacity:1,}}
        transition={{duration: 1.5}}
        className="my-20 text-center text-4xl">
            Technologies
        </motion.h2>

        <motion.div 
        initial={{x: -100 , opacity: 0}}
        whileInView={{x:0, opacity:1,}}
        transition={{duration: 1.5}}
        className="flex flex-wrap items-center justify-center gap-4">
            <motion.div 
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </motion.div>

            <motion.div
            variants={iconVariants(3)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <TbBrandNextjs className="text-7xl "/>
            </motion.div>

            <motion.div 
            variants={iconVariants(5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiMongodb className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiGit className="text-7xl text-[#E84D31]"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(6)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(4)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </motion.div>

            <motion.div 
            variants={iconVariants(2)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiJavascript1 className="text-7xl text-[#F0DC54]"/>
            </motion.div>
        </motion.div>
    </div>
  )
}

export default Technologies