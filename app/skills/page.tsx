"use client";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Image from "next/image";
import { translations } from "../translations";
import { useLanguage } from "../LanguageContext";

export default function Skills() {
  const { language } = useLanguage();
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 20 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 3, spacing: 30 },
      },
    },
  });

  const panelsData = [
    { title: "TailwindCSS", img: "/images/skills/tailwind.png" },
    { title: "Next", img: "/images/skills/Next.png" },
    { title: "HTML", img: "/images/skills/html.png" },
    { title: "GitHub", img: "/images/skills/github.png" },
    { title: "GitLab", img: "/images/skills/gitlab.png" },
    { title: "Javascript", img: "/images/skills/javascript.png" },
    { title: "Typescript", img: "/images/skills/typesripts.jpg" },
    { title: "React", img: "/images/skills/react.png" },
    { title: "MongoDB", img: "/images/skills/mongoDB.png" },
    { title: "Node JS", img: "/images/skills/node.png" },
  ];

  const handlePrev = () => instanceRef.current?.prev();
  const handleNext = () => instanceRef.current?.next();

  return (
    <div className="w-full h-auto pb-10 flex flex-col items-center">
      <div className="relative w-full max-w-[1200px]">
        <div className="absolute left-0">
          <h3 className="text-iviPrimary font-bold pt-5 pb-2">
            {translations[language].skillsTitle}
          </h3>
          <h1 className="text-3xl md:text-4xl font-bold">
            {translations[language].whatIKnow}
          </h1>
        </div>
        <div className="relative mt-24">
          {/* Flechas */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 transition hover:scale-110 hover:text-iviText"
          >
            <FaChevronLeft size={40} />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 transition hover:scale-110 hover:text-iviText"
          >
            <FaChevronRight size={40} />
          </button>
          <div ref={sliderRef} className="keen-slider cursor-grab">
            {panelsData.map((panel, index) => (
              <div
                key={index}
                className="keen-slider__slide flex flex-col items-center justify-center bg-gradient-to-br
                from-iviPrimaryDark via-iviBackground to-iviPrimaryDark border-4 border-black
                rounded-lg shadow-lg h-60"
              >
                <Image
                  src={panel.img}
                  alt={panel.title}
                  width={112}
                  height={112}
                  className="w-28 h-28 object-contain mb-4"
                />
                <h2 className="text-2xl font-bold text-iviText">
                  {panel.title}
                </h2>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
