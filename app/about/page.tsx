"use client";
import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="w-full mx-auto p-2 space-y-4 md:flex-row md:justify-around 2xl:px-48 flex flex-col items-center pb-10 relative">
      {/* Fondo con gradiente */}
      <div
        className="top-0 left-0 w-full h-full absolute z-0 rounded-b-3xl
      bg-gradient-to-br from-transparent via-iviBackground to-iviPrimary"
      ></div>

      <div className="md:w-2/5 md:h-auto relative z-10">
        <h3 className="text-iviPrimary font-bold pt-5 pb-2">About Me</h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-5">Who am I?</h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl z-50">
          I started studying on my own out of pure curiosity, and since then,
          I&apos;ve been captivated by the world of programming. I love that
          it&apos;s a constantly evolving field, which motivates me to keep
          growing and developing as a professional. Currently, I&apos;m pursuing
          a degree in Computer Programming at UNSAM. Take a look around!
        </h2>
      </div>

      <div className="flex w-full md:flex-grow justify-center max-w-[400px] relative z-10">
        <Image
          src="/images/fotoMedio.jpeg"
          alt="Foto de Iván Gentta"
          width={300}
          height={700}
          loading="lazy"
          className="border-4 border-iviSecondary rounded-3xl p-1 bg-iviBackground shadow-xl shadow-iviShadow"
        />
      </div>
    </div>
  );
}
