import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className= " absolute text-white bg-gradient-to-r from-black pt-[20%] px-24">

<h1 className='text-4xl font-bold'>{title}</h1>
<p className=' py-6 text-lg w-1/4'>{overview}</p>

<div>
    <button className=' bg-gray-500 text-white p-4 w-10 px-16 text-lg rounded-lg hover:bg-opacity-45' >▶️ Play</button> 
    
     <button className=' bg-gray-500 text-white p-4 w-10 px-16 text-lg bg-opacity-50 rounded-lg mx-2'>More info</button>
</div>

    </div>
  )
}

export default VideoTitle