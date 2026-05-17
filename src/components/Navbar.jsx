import { useEffect, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaUser,
  FaProjectDiagram,
  FaEnvelope,
  FaDownload,
  FaBars,
  FaTimes
} from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

          {/* LOGO */}
          <h1 className="font-bold text-lg">JhonDev</h1>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-6 text-sm items-center">
            <a href="#about" className="hover:text-blue-400 transition">Sobre mí</a>
            <a href="#projects" className="hover:text-blue-400 transition">Proyectos</a>
            <a href="#experience" className="hover:text-blue-400 transition">Experiencia</a>
            <a href="#certifications" className="hover:text-blue-400 transition">Certificaciones</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contacto</a>

            {/* Redes */}
            <a href="https://github.com/JhonD2005" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/jhon-david-37138933a" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            {/* CV */}
            <a
              href="/cv/Jhon david V_CV.pdf"
              download
              className="ml-2 bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg text-white flex items-center gap-2 hover:scale-105 transition"
            >
              <FaDownload /> CV
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      )}

      {/* 📱 MOBILE MENU */}
      {menuOpen && !scrolled && (
        <div className="absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-md flex flex-col items-center gap-6 py-6 md:hidden">

          <a href="#about" onClick={() => setMenuOpen(false)}>Sobre mí</a>
          <a href="#projects" onClick={() => setMenuOpen(false)}>Proyectos</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experiencia</a>
          <a href="#certifications" onClick={() => setMenuOpen(false)}>Certificaciones</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contacto</a>

          <div className="flex gap-6 text-xl">
            <a href="https://github.com/JhonD2005" target="_blank">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/jhon-david-37138933a" target="_blank">
              <FaLinkedin />
            </a>
          </div>

          <a
            href="/cv/Jhon david V_CV.pdf"
            download
            className="bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 rounded-lg flex items-center gap-2"
          >
            <FaDownload /> Descargar CV
          </a>
        </div>
      )}

      {/* 🔥 DOCK (scroll) — ya es responsive */}
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

          <a href="https://github.com/JhonD2005" target="_blank" className="hover:scale-125 transition">
            <FaGithub />
          </a>

          <a href="https://www.linkedin.com/in/jhon-david-37138933a" target="_blank" className="hover:scale-125 transition">
            <FaLinkedin />
          </a>

          <a
            href="/cv/Jhon david V_CV.pdf"
            download
            className="text-green-400 hover:scale-125 transition"
          >
            <FaDownload />
          </a>
        </div>
      )}
    </nav>
  );
}