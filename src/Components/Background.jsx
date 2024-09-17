import React from 'react'

function Background() {
  return (
    <>
        <div className='fixed w-full h-screen z-[2]'>
            <div className='absolute top-[5%] py-10 text-zinc-600 w-full text-xl flex justify-center font-semibold'>Documents</div>
            <h1 className='absolute top-1/2 left-1/2 text-[13vw] text-zinc-900 -translate-x-[50%] -translate-y-[50%] '>Docs.</h1>
        </div>
    </>
  )
}

export default Background
