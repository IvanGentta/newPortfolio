"use client";
import { useTypeHook } from "./typeHook";
import { Contact } from "./contact/page";

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
    <main className="min-h-screen w-full bg-iviBackground pt-24">
      <div className="pt-20 flex flex-col items-center">
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
      <div className="flex justify-center">
        <Contact />
      </div>
    </main>
  );
}
