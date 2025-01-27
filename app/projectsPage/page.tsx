import React from "react";
import ProjectItem from "./projetItem";

export default function ProjectsPage() {
  const projects = [
    {
      name: "WeatherApp",
      backgroundImg: "/images/imgWeatherProject.jpg",
      info: "Web app to know what is the weather like in any place in the world",
    },
    {
      name: "Google Search Clone",
      backgroundImg: "/images/imgGoogleProject.jpg",
      info: "A Google clon where you can actually search what you want",
    },
    {
      name: "Krooma Landing Page",
      backgroundImg: "/images/imgKroomaProject.jpg",
      info: "My first real job!",
    },
  ];

  return (
    <div className="relative w-full max-w-[1200px] px-2">
      <div className="">
        <h3 className="text-iviPrimary font-bold pt-5 pb-2">Projects</h3>
        <h1 className="text-3xl md:text-4xl font-bold mb-5">
          What I&apos;ve built!
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
