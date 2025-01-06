import Image from "next/image";
import Link from "next/link";
import { FaMoon, FaSun } from "react-icons/fa";

export default function nav() {
  return (
    <nav
      className="bg-iviBackground h-24 w-full p-3 fixed top-0
    border-b-2 border-iviSecondary shadow-md shadow-iviShadow"
    >
      <div className="flex justify-between">
        <Image
          src="/images/logoWhitePng.PNG"
          alt="Logo Gentta Iván"
          width={70}
          height={70}
          className=""
        />
        <div className="flex items-center space-x-4">
          <div>[change lang]</div>
          <div className="flex items-center">
            [theme
            <FaSun className="text-yellow-500" />
            <p className="font-bold text-xl">/</p>
            <FaMoon className="text-blue-800" />]
          </div>
          <ul className="flex space-x-3 text-lg">
            <li>
              <Link href="/">About me</Link>
            </li>
            <li>
              <Link href="/">Skills</Link>
            </li>
            <li>
              <Link href="/">Proyects</Link>
            </li>
            <li>
              <Link href="/">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
