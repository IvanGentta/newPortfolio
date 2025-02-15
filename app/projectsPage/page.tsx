"use client";
import React from "react";
import ProjectItem from "./projectItem";
import { translations } from "@/app/translations";
import { useLanguage } from "@/app/LanguageContext";

export default function ProjectsPage() {
  const { language } = useLanguage();
  const projects = [
    {
      name: "WeatherApp",
      backgroundImg: "/images/imgWeatherProject.jpg",
      info: translations[language].weatherDesc,
    },
    {
      name: "Google Search Clone",
      backgroundImg: "/images/imgGoogleProject.jpg",
      info: translations[language].googleDesc,
    },
    {
      name: "Krooma Landing Page",
      backgroundImg: "/images/imgKroomaProject.jpg",
      info: translations[language].kroomaDesc,
    },
    {
      name: "Chat App",
      backgroundImg: "/images/imgChatAppProject.jpg",
      info: translations[language].chatappDesc,
    },
  ];

  return (
    <div className="relative w-full max-w-[1200px] px-2">
      <div className="">
        <h3 className="text-iviPrimary font-bold pt-5 pb-2">
          {translations[language].projectsTitle}
        </h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          {translations[language].built}
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 gap-4 space-y-4 md:space-y-0">
        {projects.map((project) => (
          <ProjectItem
            key={project.name}
            name={project.name}
            backgroundImg={project.backgroundImg}
            info={project.info}
          />
        ))}
      </div>
    </div>
  );
}
