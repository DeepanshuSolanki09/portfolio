import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Model from "./Components/Model";
import Navbar from "./Components/Navbar";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  function oncreated(state) {
    state.gl.setClearColor("#000000", 1);
  }

  const [show, setshow] = useState(false);
  const [projects, setprojects] = useState(false);
  const [contact, setcontact] = useState(false);
  const [loader, setloader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
        const tl = gsap.timeline();
        tl.to('.loaderclass',{
          scale:0.8,
          ease:'power3.inOut',
          duration:2,
        })
        tl.to('.loaderclass',{
          duration:4,
          height:500,
          y:60
        })
        tl.to('.loaderclass',{
          duration:2,
          x:1000,
        })
    }, 10);
  }, [loader]);

  return (
    <>
      {loader ? (
        <div className="h-dvh w-screen absolute z-20 bg-black loaderclass">
          <video
            src="/1755705305173183expMp4.mp4"
            autoPlay
            muted
            loop
            className="object-cover size-full md:object-contain"
          />
        </div>
      ) : (
        <span></span>
      )}
      <Navbar />
      {show ? <Skills setshow={setshow} /> : <div></div>}
      {projects ? <Projects setprjects={setprojects} /> : <div></div>}
      {contact ? <Contact setcontact={setcontact} /> : <div></div>}
      <Canvas onCreated={oncreated} shadows camera={{ position: [0, 0, 15] }}>
        <Model
          show={show}
          setshow={setshow}
          setprjects={setprojects}
          setcontact={setcontact}
          setloader={setloader}
        />
      </Canvas>
    </>
  );
}

export default App;
