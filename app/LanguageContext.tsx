"use client";

import { createContext, useState, useContext, ReactNode } from "react";

// Define la interfaz del contexto
interface LanguageContextProps {
  language: "en" | "es"; // Solo puede ser "en" o "es"
  switchLanguage: (lang: "en" | "es") => void; // Función para cambiar el idioma
}

// Contexto inicial
const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
);

// Proveedor del contexto
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"en" | "es">("en"); // Idioma predeterminado

  const switchLanguage = (lang: "en" | "es") => setLanguage(lang);

  return (
    <LanguageContext.Provider value={{ language, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Hook personalizado para acceder al contexto
export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
