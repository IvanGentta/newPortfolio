"use client";
import Image from "next/image";
import React from "react";
import { translations } from "@/app/translations";
import { useLanguage } from "@/app/LanguageContext";

export default function About() {
  const { language } = useLanguage();
  return (
    <div className="w-full mx-auto p-2 space-y-4 md:flex-row md:justify-around 2xl:px-48 flex flex-col items-center pb-10 relative">
      {/* Fondo con gradiente */}
      <div
        className="top-0 left-0 w-full h-full absolute z-0 rounded-b-3xl
      bg-gradient-to-br from-transparent via-iviBackground to-iviPrimary"
      ></div>

      <div className="md:w-2/5 md:h-auto relative z-10">
        <h3 className="text-iviPrimary font-bold pt-5 pb-2">
          {translations[language].aboutMe}
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          {translations[language].whoAmI}
        </h1>
        <h2 className="text-lg md:text-2xl lg:text-3xl z-50">
          {translations[language].aboutMeText}
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
