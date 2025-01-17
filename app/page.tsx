"use client";
import About from "./about/page";
import Contact from "./contact/page";
import ProjectsPage from "./projectsPage/page";
import Skills from "./skills/page";
import { useTypeHook } from "./typeHook";

export default function Home() {
  const { text, showCursor } = useTypeHook(
    [
      "Based on Argentina!!",
      "Let's create something amazing together!",
      "Yet another generic programmer phrase.",
      "I love coding and keep on learning.",
      "I know this effect is kinda overdone, but just look how cool it looks!",
    ],
    120 // Velocidad de escritura
  );

  return (
    <main className="w-full h-auto bg-iviBackground">
      <div className="min-h-screen flex flex-col items-center justify-center text-center mx-1">
        <p className="flex items-center h-7 relative font-mono">
          {text}
          {showCursor && (
            <span className="w-[2px] h-6 bg-black animate-blink absolute top-0 left-full" />
          )}
        </p>
        <h1 className="text-[40px]">
          Hi! My name is <span className="text-iviPrimary font-bold">Iván</span>
        </h1>
        <h1 className="text-[40px]">
          Welcome to my
          <span className="text-iviPrimary font-bold"> Web Developer</span>{" "}
          portfolio
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-iviText via-transparent to-transparent opacity-50 rounded-3xl"></div>
      <div className="flex flex-col items-center w-full">
        <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="proyects">{/* <ProjectsPage /> */}</section>
        <section id="contact" className="w-full h-auto p-2">
          <Contact />
        </section>
      </div>
    </main>
  );
}
