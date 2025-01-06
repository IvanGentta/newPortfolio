import { useState, useEffect } from "react";

export function useTypeHook(strings: string[], typingSpeed: number) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [pause, setPause] = useState(false); // Para controlar pausas

  useEffect(() => {
    if (pause) return;

    const timeout = setTimeout(
      () => {
        if (isDeleting) {
          if (charIndex > 0) {
            setCharIndex((prev) => prev - 1);
            setText(strings[index].slice(0, charIndex - 1));
          } else {
            // Cuando termina de borrar, cambia a la siguiente frase
            setIsDeleting(false);
            setIndex((prev) => (prev + 1) % strings.length);
            setPause(true); // Pausa antes de empezar a escribir la siguiente frase
            setTimeout(() => setPause(false), 1000); // Pausa de 1 segundo
          }
        } else {
          if (charIndex < strings[index].length) {
            setCharIndex((prev) => prev + 1);
            setText(strings[index].slice(0, charIndex + 1));
          } else {
            // Pausa al terminar de escribir
            setPause(true);
            setTimeout(() => {
              setPause(false);
              setIsDeleting(true);
            }, 2000); // Pausa de 2 segundos
          }
        }
      },
      isDeleting ? typingSpeed / 3 : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, pause, index, strings, typingSpeed]);

  // Manejo del parpadeo del cursor
  useEffect(() => {
    const cursorBlink = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorBlink);
  }, []);

  return { text, showCursor };
}
