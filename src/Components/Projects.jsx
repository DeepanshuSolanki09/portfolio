import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Projects = ({ setprjects }) => {
  useEffect(() => {
    function handel(e) {
      if (e.key === "Escape") setprjects(false);
    }
    window.addEventListener("keydown", handel);

    return () => window.removeEventListener("keydown", handel);
  }, [setprjects]);
  return (
    <div className=" z-10 absolute inset-0 flex justify-center items-center p-4 sm:p-6 md:p-2 bg-black">
      <div
        className="relative h-[100%] w-full border-2 rounded-xl border-purple-600 bg-white flex flex-col items-center p-5  gap-7"
        style={{ boxShadow: "0px 0px 50px rgba(128,0,128,0.8)" }}
        tabIndex={0}
      >
        <IoClose onClick={() => setprjects(false)} className="relative self-end scale-[5] m-1 hover:border-2 hover:border-purple-100"></IoClose>
        <h1 className="text-6xl font-bold font-myfont text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-black">
          PROJECTS🕸️
        </h1>
        <div className="flex flex-col gap-5 items-center overflow-y-auto p-2 md:flex-row md:flex-wrap">
          <div className="h-auto md:h-fit w-4/5 md:w-1/3 bg-white border-2 border-black rounded-xl duration-500 p-5 flex justify-center gap-5 flex-col hover:shadow-purple-500 hover:shadow-lg">
            <h1 className="text-2xl font-myfont3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">
              My portfolio🕸️
            </h1>
            <img
              src="/png-halloween-pumpkins-border-transparent-background_53876-515982.avif"
              className="h-full w-1/2 rounded-lg object-cover self-center"
            />
            <div className="text-xs flex flex-col gap-2">
              <h1 className="text-lg font-myfont2 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">
                Skills Used:
              </h1>
              <div>
                <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  React.js 🎃
                </span>
                <span className="p-2 animate-float2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  TailwindCSS 🕷️
                </span>
                <span className="p-2 animate-float bg-purple-200  border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px]mx-1 my-[2px]">
                  Three.js 👻
                </span>
                <span className="p-2 animate-float2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  R3F 🧙
                </span>
              </div>
            </div>
            <div className="text-xs flex flex-col gap-2">
              <h1 className="text-lg font-myfont2 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">
                Description:A modern, creative portfolio website showcasing my
                skills, projects, and passion for web development.
              </h1>
              <span className="font-myfont2 inline-block">R3F</span>
            </div>
            <div className="flex justify-end">
              <button className="p-2 bg-purple-200  border-2 border-black font-myfont2 rounded-2xl duration-500 hover:border-purple-500 hover:-translate-y-2">
                View 🕸️
              </button>
            </div>
          </div>
          <div className="h-auto md:h-fit w-4/5 md:w-1/3 bg-white border-2 border-black rounded-xl duration-500 p-5 flex justify-center gap-5 flex-col hover:shadow-blue-500 hover:shadow-lg">
            <h1 className="text-2xl font-myfont3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-700 to-black">
              Weather App⛅
            </h1>
            <img
              src="/weather-app.avif"
              className="h-full w-1/2 rounded-lg object-cover self-center"
            />
            <div className="text-xs flex flex-col gap-2">
              <h1 className="text-lg font-myfont2 font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-700 to-black">
                Skills Used:
              </h1>
              <div>
                <span className="p-2 animate-float bg-blue-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  React.js 🌦️
                </span>
                <span className="p-2 animate-float2 bg-blue-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  TailwindCSS 💧
                </span>
                <span className="p-2 animate-float bg-blue-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  OpenWeather API 🌍
                </span>
                <span className="p-2 animate-float bg-blue-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  JavaScript ⚡
                </span>
                <span className="p-2 animate-float2 bg-blue-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  three.js ⚡
                </span>
                <span className="p-2 animate-float bg-blue-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  R3F ⚡
                </span>
              </div>
            </div>
            <div className="text-xs flex flex-col gap-2">
              <h1 className="text-lg font-myfont2 font-bold text-transparent bg-clip-text bg-gradient-to-t from-blue-700 to-black">
                Description: A responsive weather app providing real-time
                weather updates, forecasts, and location-based results.
              </h1>
            </div>
            <div className="flex justify-end">
              <button className="p-2 bg-blue-200 border-2 border-black font-myfont2 rounded-2xl duration-500 hover:border-blue-500 hover:-translate-y-2">
                View ⛅
              </button>
            </div>
          </div>
          <div className="h-auto md:h-fit w-4/5 md:w-1/3 bg-white border-2 border-black rounded-xl duration-500 p-5 flex justify-center gap-5 flex-col hover:shadow-purple-500 hover:shadow-lg">
            <h1 className="text-2xl font-myfont3 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">
              Books Material Chat Bot 📚🤖
            </h1>
            <img
              src="/ai-chatbot-books.avif"
              className="h-full w-1/2 rounded-lg object-cover self-center"
            />
            <div className="text-xs flex flex-col gap-2">
              <h1 className="text-lg font-myfont2 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">
                Skills Used:
              </h1>
              <div>
                <span className="p-2 animate-float2 bg-purple-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  React.js ⚛️
                </span>
                <span className="p-2 animate-float bg-purple-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  TailwindCSS 🎨
                </span>
                <span className="p-2 animate-float2 bg-purple-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  Node.js 🚀
                </span>
                <span className="p-2 animate-float bg-purple-200 border-2 border-black font-myfont2 rounded-2xl inline-block mx-[2px] my-[2px]">
                  GEMINI API 🤖
                </span>
              </div>
            </div>
            <div className="text-xs flex flex-col gap-2">
              <h1 className="text-lg font-myfont2 font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-700 to-black">
                Description: An AI-powered chatbot that provides books, study
                material, and solutions for students in an interactive way.
              </h1>
            </div>
            <div className="flex justify-end">
              <button className="p-2 bg-purple-200 border-2 border-black font-myfont2 rounded-2xl duration-500 hover:border-purple-500 hover:-translate-y-2">
                View 🤖
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
