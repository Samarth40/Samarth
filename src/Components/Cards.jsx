import React from 'react';
import { FaFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Cards({data , reference}) {
  return (
    <motion.div drag dragConstraints={reference} 
    whileDrag= {{scale:1.2}} 
    dragTransition={{bounceStiffness:600,bounceDamping:10}} 
    className='flex-shrink-0 relative w-60 h-72 rounded-[45px] bg-zinc-900/80 px-8 py-10 text-white overflow-hidden'>
      <FaFileAlt />
      <p className='mt-5 leading-tight text-sm'>{data.desc}</p>
      <div className='footer absolute bottom-0 left-0   w-full'>
        <div className='flex justify-between items-center py-2 px-8 mb-2'>
            <h5>{data.filesize}</h5>
            <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center '>
                {data.close ? <IoClose size=".9em" color='white'/>  : <LuDownload size=".7em" color='white' /> }
            </span>
        </div>
        {
            data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagColor === "Blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center  `}>
                    <h3 className='text-md font-semibold'>{data.tag.tagTitle}</h3>
                </div>
            )
        }
      </div>
    </motion.div>
  );
}

export default Cards;