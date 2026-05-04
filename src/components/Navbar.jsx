import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaDownload
} from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed z-50 transition-all duration-500 ${
        scrolled
          ? "bottom-6 left-1/2 -translate-x-1/2 bg-gray-900/80 backdrop-blur-md px-6 py-3 rounded-2xl shadow-xl flex gap-6 items-center"
          : "top-0 left-0 w-full bg-transparent"
      }`}
    >
      {/* NAVBAR NORMAL */}
      {!scrolled && (
        <div className="flex justify-between items-center p-5 max-w-6xl mx-auto w-full">
          <h1 className="font-bold text-lg">JhonDev</h1>

          <div className="flex gap-6 text-sm items-center">
            <a href="#about" className="hover:text-blue-400 transition">
              Sobre mí
            </a>
            <a href="#projects" className="hover:text-blue-400 transition">
              Proyectos
            </a>
            <a href="#certifications" className="hover:text-blue-400 transition">
              Certificaciones
            </a>
            <a href="#contact" className="hover:text-blue-400 transition">
              Contacto
            </a>

            {/* 🔗 Redes */}
            <a
              href="https://github.com/JhonD2005"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
            >
              <FaGithub className="hover:text-blue-400 transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/jhon-david-37138933a"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
            >
              <FaLinkedin className="hover:text-blue-400 transition" />
            </a>

            {/* BOTÓN CV */}
            <a
              href="/cv/cv.pdf"
              download
              className="ml-4 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white text-sm font-medium flex items-center gap-2 transition hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
            >
              <FaDownload />
              CV
            </a>
          </div>
        </div>
      )}

      {/* MODO DOCK (scroll) */}
      {scrolled && (
        <div className="flex gap-6 text-xl items-center">
          <a href="#about" className="hover:scale-125 transition">
            <FaUser />
          </a>

          <a href="#projects" className="hover:scale-125 transition">
            <FaProjectDiagram />
          </a>

          <a href="#contact" className="hover:scale-125 transition">
            <FaEnvelope />
          </a>

          <a
            href="https://github.com/JhonD2005"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="hover:scale-125 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jhon-david-37138933a"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:scale-125 transition"
          >
            <FaLinkedin />
          </a>

          {/* ICONO CV */}
          <a
            href="/cv/Jhon-David-CV.pdf"
            download
            title="Descargar CV"
            className="text-green-400 hover:scale-125 transition"
          >
            <FaDownload />
          </a>
        </div>
      )}
    </nav>
  );
}