"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { translations } from "@/app/translations";
import { useLanguage } from "@/app/LanguageContext";

export default function ProjectDetailsPage({
  params,
}: {
  params: { projectId: string };
}) {
  const { language } = useLanguage();
  const router = useRouter();
  const projectsData = [
    {
      id: "weatherapp",
      name: "Weather App",
      img: "/images/imgWeatherProject.jpg",
      repo: "https://github.com/IvanGentta/weather-app",
      deploy: "https://weather-app-two-smoky.vercel.app/",
      description: translations[language].weatherInfo,
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Axios API Calls",
        "React-Icons",
      ],
    },
    {
      id: "google-search-clone",
      name: "Google Search Clone",
      img: "/images/imgGoogleProject.jpg",
      repo: "https://github.com/IvanGentta/Google-Clon",
      deploy: "https://google-clon-ten.vercel.app/",
      description: translations[language].googleInfo,
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Firebase",
      ],
    },
    {
      id: "krooma-landing-page",
      name: "Krooma Landing Page",
      img: "/images/imgKroomaProject.jpg",
      repo: "https://gitlab.com/IvanGentta/krooma-studio",
      deploy: "https://krooma.com/",
      description: translations[language].kroomaInfo,
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Figma",
        "Gitlab",
        "CPanel",
      ],
    },
    {
      id: "chat-app",
      name: "Chat App",
      img: "/images/chatAppImage.jpg",
      repo: "https://github.com/IvanGentta/chat-challenge",
      deploy: "https://chat-challenge-one.vercel.app/",
      description: translations[language].chatAppInfo,
      technologies: [
        "React.js",
        "Next.js",
        "Tailwind CSS",
        "Node.js",
        "Firebase",
        "Firestore",
        "Redux",
      ],
    },
  ];

  // Encuentra el proyecto basado en el projectId
  const project = projectsData.find((p) => p.id === params.projectId);

  if (!project) {
    return (
      <div className="p-8 bg-iviBackground text-iviText min-h-screen">
        <h1 className="text-4xl font-bold mb-4 decoration-iviSecondary underline">
          {translations[language].notFound}
        </h1>
        <button
          className="mt-4 px-4 py-2 bg-iviPrimary font-bold rounded-lg border-2 border-black hover:bg-iviPrimary/50"
          onClick={() => router.back()}
        >
          {translations[language].backButton}
        </button>
      </div>
    );
  }

  return (
    <div className="p-8 bg-iviBackground text-iviText h-screen w-full md:overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <Image
          src={project.img}
          alt={project.name}
          width={1920}
          height={1080}
          className="w-full h-auto brightness-50"
        />
        <h1 className="absolute z-20 top-10 left-5 text-white text-4xl font-bold decoration-iviSecondary underline">
          {project.name}
        </h1>
      </div>
      <div className="absolute z-20 left-0 top-40 md:top-60 lg:top-96 bg-iviBackground w-full min-h-screen px-4 py-2">
        <div className="w-full h-auto mb-4 md:flex md:items-center md:justify-center gap-4 lg:gap-24 md:mt-2">
          <div className="w-full md:w-[700px] flex flex-col">
            <h2 className="text-iviPrimary font-bold pb-2">
              {translations[language].overview}
            </h2>
            <p className="mb-4">{project.description}</p>
          </div>

          <div className="w-[200px] p-2 border-2 border-iviSecondary rounded-lg shadow-xl shadow-iviShadow">
            <h2 className="text-xl font-semibold">
              {translations[language].techs}
            </h2>
            <ul className="list-disc ml-6 mb-2">
              {project.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-4 mt-36">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-br from-transparent via-iviBackground to-iviPrimary font-bold rounded-lg border-2 border-black "
          >
            Code
          </a>
          <a
            href={project.deploy}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gradient-to-br from-transparent via-iviBackground to-iviSecondary font-bold rounded-lg border-2 border-black "
          >
            Demo
          </a>
        </div>
        <button
          className="mt-6 font-bold rounded-lg border-0 underline "
          onClick={() => router.back()}
        >
          {translations[language].backButton}
        </button>
      </div>
    </div>
  );
}
