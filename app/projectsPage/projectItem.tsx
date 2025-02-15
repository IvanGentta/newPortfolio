"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { translations } from "@/app/translations";
import { useLanguage } from "@/app/LanguageContext";

interface ProjectItemProps {
  name: string;
  backgroundImg: string;
  info: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  name,
  backgroundImg,
  info,
}) => {
  const { language } = useLanguage();
  return (
    <div
      className="relative flex items-center justify-center h-auto w-full shadow-md shadow-iviShadow
    rounded-xl p-4 group hover:bg-gradient-to-br from-iviPrimary via-iviBackground to-iviBackground  md:m-0
    border-2 border-black z-10 dark:border-slate-300"
    >
      {/* Fondo degradado */}
      <div
        className="absolute top-0 left-0 w-full h-full z-0 rounded-xl
      bg-gradient-to-br from-transparent via-iviBackground to-iviSecondary"
      ></div>

      {/* Imagen de fondo */}
      <Image
        className="rounded-xl group-hover:opacity-10 z-10"
        src={backgroundImg}
        alt={name}
        width={650}
        height={450}
      />

      {/* Contenido visible al hover */}
      <div className="hidden group-hover:flex flex-col justify-center items-center absolute top-0 left-0 w-full h-full z-20 space-y-4 py-6">
        <h2 className="text-2xl tracking-widest text-center font-black">
          {name}
        </h2>
        <p className="text-md text-center font-bold">{info}</p>

        {/* Enlace dinámico */}
        <Link href={`/projectsPage/${name.toLowerCase().replace(/\s+/g, "-")}`}>
          <p
            className="text-center py-3 px-6 rounded-lg bg-iviSecondary font-black text-lg 
          border-2 border-black cursor-pointer dark:border-slate-300"
          >
            {translations[language].infoButton}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
