"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/LanguageContext";
import { translations } from "@/app/translations";

export default function Nav() {
  const { language, switchLanguage } = useLanguage();

  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [theme, setTheme] = useState<"light" | "dark">("light");

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  // Evitar renderizar el contenido si estamos en una página específica (las de los proyectos)
  const shouldRenderNav = !(
    pathname.startsWith("/projectsPage/") && pathname !== "/projectsPage"
  );

  const activateLightTheme = () => {
    setTheme("light");
    if (typeof document !== "undefined") {
      document.documentElement.classList.remove("dark");
    }
  };

  const activateDarkTheme = () => {
    setTheme("dark");
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("dark");
    }
  };

  return shouldRenderNav ? (
    <>
      {/* Overlay oscuro */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[150] transition-opacity md:hidden"
          onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      <nav
        className="bg-iviBackground h-24 w-full p-3 fixed top-0 z-[200]
        border-b-2 border-iviSecondary shadow-md shadow-iviShadow text-iviText"
      >
        <div className="flex justify-between w-full">
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              className="dark:filter dark:invert"
              src="/images/logoWhitePng.PNG"
              alt="Logo Gentta Iván"
              width={70}
              height={70}
            />
          </Link>

          <div className="flex items-center">
            {/* Botón hamburguesa */}
            <button
              onClick={toggleMenu}
              className="text-3xl md:hidden focus:outline-none"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* Menú desplegable */}
            <div
              className={`absolute top-24 left-0 w-full border-2 bg-iviBackground border-iviSecondary shadow-md shadow-iviShadow rounded-b-2xl
              md:static md:translate-y-0 md:opacity-100 md:flex md:items-center md:space-x-4 md:border-none md:shadow-none 
              transition-all duration-500 ease-in-out z-[200]${
                isMenuOpen
                  ? "translate-y-0 opacity-100 p-4"
                  : "-translate-y-[-20] opacity-0 "
              }`}
            >
              {/* Cambiar idioma y tema */}
              <div className="flex items-center pb-4 md:pb-0">
                {/* idioma */}
                <div>
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                      switchLanguage(language === "en" ? "es" : "en");
                    }}
                    className={`px-2 py-1 mx-1 font-bold rounded-lg border-2 border-black dark:border-slate-300 ${
                      language === "en"
                        ? "bg-gradient-to-br from-transparent via-iviBackground to-iviPrimary"
                        : "bg-gradient-to-br from-transparent via-iviBackground to-iviSecondary"
                    }`}
                  >
                    {language === "en" ? "Español" : "English"}
                  </button>
                </div>
                {/* tema */}
                <div className="flex items-center px-2">
                  <FaSun
                    onClick={activateLightTheme}
                    className={`w-6 h-6 cursor-pointer ${
                      theme === "light" ? "text-yellow-500" : "text-gray-400"
                    }`}
                  />
                  <p className="text-3xl">/</p>
                  <FaMoon
                    onClick={activateDarkTheme}
                    className={`w-6 h-6 cursor-pointer ${
                      theme === "dark" ? "text-blue-800" : "text-gray-400"
                    }`}
                  />
                </div>
              </div>

              {/* Lista de enlaces */}
              <div>
                <div className="mb-4 border-b border-iviExtraDark md:hidden dark:border-iviText" />
                <ul
                  className="flex flex-col text-lg space-y-3
                  md:flex-row md:space-x-3 md:space-y-0"
                >
                  <li className="hover:underline decoration-2 underline-offset-4 decoration-iviSecondary">
                    <Link href="#about" onClick={() => setIsMenuOpen(false)}>
                      {translations[language].about}
                    </Link>
                  </li>
                  <li className="hover:underline decoration-2 underline-offset-4 decoration-iviSecondary">
                    <Link href="#skills" onClick={() => setIsMenuOpen(false)}>
                      {translations[language].skills}
                    </Link>
                  </li>
                  <li className="hover:underline decoration-2 underline-offset-4 decoration-iviSecondary">
                    <Link href="#proyects" onClick={() => setIsMenuOpen(false)}>
                      {translations[language].projects}
                    </Link>
                  </li>
                  <li className="hover:underline decoration-2 underline-offset-4 decoration-iviSecondary">
                    <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
                      {translations[language].contact}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  ) : null;
}
