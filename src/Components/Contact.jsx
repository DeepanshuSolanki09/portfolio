import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const Contact = ({ setcontact }) => {
  useEffect(() => {
    function handel(e) {
      if (e.key === "Escape") setcontact(false);
    }
    window.addEventListener("keydown", handel);

    return () => window.removeEventListener("keydown", handel);
  }, [setcontact]);
  return (
    <div className=" z-10 absolute inset-0 flex justify-center items-center p-4 sm:p-6 md:p-10 bg-black">
      <div
        className="relative h-[90%] w-full md:w-1/2 border-2 rounded-xl border-purple-600 bg-white flex flex-col items-center p-5 gap-7"
        style={{ boxShadow: "0px 0px 50px rgba(128,0,128,0.8)" }}
        tabIndex={0}
      >
        <IoClose onClick={() => setcontact(false)} className="relative self-end scale-[3] m-1 hover:border-2 hover:border-purple-100"></IoClose>
        <h1 className="text-6xl font-bold font-myfont text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-black">
          Contact🕸️
        </h1>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            Email🕸️:
            <span className="text-black font-myfont2 inline-block">
              solankideepanshu2006@gmail.com
            </span>
          </h1>

          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            Phone Number🕸️:
            <span className="text-black font-myfont2 inline-block">
              +91 9871409724
            </span>
          </h1>
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            Instagram🕸️:
            <span className="text-black font-myfont2 inline-block">
              <a href='https://www.instagram.com/i_m___deepanshusolanki/?hl=en' >i_m__deepanshusolanki</a>
            </span>
          </h1>
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            LinkedIn🕸️:
            <span className="text-black font-myfont2 inline-block">
              <a href='https://www.linkedin.com/in/deepanshu-solanki-081346318/' >i_m__deepanshusolanki</a>
            </span>
          </h1>
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            Github🕸️:
            <span className="text-black font-myfont2 inline-block">
              < a href="https://github.com/DeepanshuSolanki09">DeepanshuSolanki09</a>
            </span>
          </h1>
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            LeetCode Profile🕸️:
            <span className="text-black font-myfont2 inline-block">
              < a href="https://leetcode.com/u/Deepanshu_Solanki/">Deepanshu_Solanki</a>
            </span>
          </h1>
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            Codeforces Profile🕸️:
            <span className="text-black font-myfont2 inline-block">
              <a href="https://codeforces.com/profile/solankideepanshu2006">solankideepanshu2006</a>
            </span>
          </h1>
          <h1 className="text-xl font-bold font-myfont2 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-black">
            Code Chef🕸️:
            <span className="text-black font-myfont2 inline-block">
              <a href="https://www.codechef.com/users/fave_jaguar_65">fave_jaguar_65</a>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Contact;
