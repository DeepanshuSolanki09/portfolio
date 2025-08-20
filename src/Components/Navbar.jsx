import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { GiSoundOn } from "react-icons/gi";

const Navbar = () => {

  const [play,setplay] = useState(true);
  return (
    <div className='absolute text-white font-bold h-[30px] z-10 w-full md:p-10 mt-4 p-5 flex justify-end items-center'>
      {play && (
        <audio src="/Demented-Nightmare-MP3(chosic.com).mp3" autoPlay loop />
      )}
      <div className='flex gap-5'>
         <button onClick={() => setplay(false)} className='p-4 bg-orange-600  rounded-xl h-4/5 z-20' ><GiSoundOn className='scale-150'></GiSoundOn></button>
      </div>
    </div>
  )
}

export default Navbar