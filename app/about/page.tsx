import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex">
      <h2>
        I started studying on my own out of pure curiosity, and since then,
        I&apos;ve been captivated by the world of programming. I love that
        it&apos;s a constantly evolving field, which motivates me to keep
        growing and developing as a professional. Currently, I&apos;m pursuing a
        degree in Computer Programming at UNSAM. Take a look around!
      </h2>
      <Image
        src="/images/fotoCarnet1(730px).jpeg"
        alt="Foto de Iván Gentta"
        width={300}
        height={730}
        className="hidden"
      />
    </div>
  );
}
