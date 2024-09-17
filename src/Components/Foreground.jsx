import React from 'react'
import Cards from './Cards'
import { useRef } from 'react';

function Foreground() {
    const ref = useRef(null);
    
    const data = [
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize :".9mb",
            close : true,
            tag :{isOpen: true, tagTitle:"Download Now!",tagColor:"Green" },
        },
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize :".9mb",
            close : true,
            tag :{isOpen: true, tagTitle:"Upload Now!",tagColor:"Blue" }
        },
        {
            desc : "Lorem ipsum dolor, sit amet consectetur adipisicing.",
            filesize :".9mb",
            close : true,
            tag :{isOpen: true, tagTitle:"Download Now!",tagColor:"Green" }
        }
    ]
  return (
   <>
        <div ref={ref} className='w-full h-full z-[3] fixed top-0 left-0 flex gap-5 flex-wrap p-5  '>
            {data.map((item,index)=>(
                <Cards data={item} reference={ref}/>
            )
            )}
        </div>
      
   </>
  )
}

export default Foreground