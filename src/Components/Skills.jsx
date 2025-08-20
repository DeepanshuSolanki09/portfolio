import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Skills = ({setshow}) => {

  useEffect(() => {
    function handel(e){
      if(e.key === 'Escape') setshow(false);
    }
    window.addEventListener('keydown',handel);

    return () => window.removeEventListener('keydown',handel);
  },[setshow])
  return (
    <div className=" z-10 absolute inset-0 flex justify-center items-center p-4 sm:p-6 md:p-10 bg-black">
      <div
        className="relative h-[90%] w-full md:w-1/2 border-2 rounded-xl border-purple-600 bg-white flex flex-col items-center p-5 gap-7"
        style={{ boxShadow: "0px 0px 50px rgba(128,0,128,0.8)" }}
        tabIndex={0}
        onKeyDown={e => e.key === 'Escape' && setshow(false)}
      > 
      <IoClose onClick={() => setshow(false)} className="relative self-end scale-[3] m-1 hover:border-2 hover:border-purple-100"></IoClose>
        <h1 className="text-6xl font-bold font-myfont text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-black">
           SKILLS🕸️
        </h1>
        <div className="flex flex-col gap-7">
          <div>
            <h1 className="text-2xl font-myfont3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">👾Programming & Technical Skills🧛</h1>
            <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">C++💀</span>
            <span className="p-2 animate-float2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">JavaScript🕷️</span>
            <span className="p-2 animate-float2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">HTML5 / CSS3🧟</span>
            <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block"> Data Structures & Algorithms⚰️</span>
          </div>
          <div>
            <h1 className="text-2xl font-myfont3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">🕸️Web Development🦇</h1>
            <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">React.js 🎃</span>
            <span className="p-2 animate-float2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">Node.js 🦴</span>
            <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">MongoDB 🧛</span>
            <span className="p-2 animate-float2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">TailwindCSS 🕷️</span>
            <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">Three.js 👻</span>
            <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl m-2 inline-block">R3F 🧙</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
