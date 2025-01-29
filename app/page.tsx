"use client";
import About from "./about/page";
import Contact from "./contact/page";
import ProjectsPage from "./projectsPage/page";
import Skills from "./skills/page";
import { useTypeHook } from "./typeHook";
import { useLanguage } from "./LanguageContext";
import { translations } from "./translations";

export default function Home() {
  const { language } = useLanguage();

  const { text, showCursor } = useTypeHook(
    [
      `${translations[language].type1}`,
      `${translations[language].type2}`,
      `${translations[language].type3}`,
      `${translations[language].type4}`,
      `${translations[language].type1}`,
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
          {translations[language].hi}{" "}
          <span className="text-iviPrimary font-bold">Iván</span>
        </h1>
        <h1 className="text-[40px]">
          {translations[language].welcome}
          <span className="text-iviPrimary font-bold">
            {translations[language].developer}
          </span>{" "}
          {translations[language].portfolio}
        </h1>
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-iviText via-transparent to-transparent opacity-50 rounded-3xl"></div>
      <div className="flex flex-col items-center w-full">
        <section
          id="about"
          className="min-h-screen flex flex-col justify-center items-center"
        >
          <About />
        </section>
        <section id="skills" className="w-full h-auto p-2">
          <Skills />
        </section>
        <section id="proyects" className="mb-14">
          <ProjectsPage />
        </section>
        <section id="contact" className="w-full h-auto p-2 mb-14">
          <Contact />
        </section>
      </div>
    </main>
  );
}
