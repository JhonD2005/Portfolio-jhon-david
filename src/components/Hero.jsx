import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import ParticlesBg from "./ParticlesBg";

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden
      bg-gradient-to-r from-blue-900 via-gray-900 to-black
      bg-[length:200%_200%] animate-[gradientMove_10s_ease_infinite]">

      {/* PARTÍCULAS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <ParticlesBg />
      </div>

      {/*OVERLAY SUAVE (para que no distraiga) */}
      <div className="absolute inset-0 bg-black/50 z-[1]"></div>

      {/*CONTENIDO */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Hola, soy <span className="text-blue-500">Jhon David</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6 text-gray-300 max-w-xl text-lg"
        >
          <Typewriter
            words={[
              "QA Manual Analyst",
              "Apasionado por la calidad de software",
              "Enfocado en testing y validación",
              "Aprendiendo automatización de pruebas"
            ]}
            loop
            cursor
            cursorStyle="|"
          />
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-8 flex gap-4 justify-center"
        >
          <a
            href="#projects"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg transition"
          >
            Ver proyectos
          </a>

          <a
            href="#contact"
            className="border border-gray-500 hover:border-white px-6 py-3 rounded-lg transition"
          >
            Contacto
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}