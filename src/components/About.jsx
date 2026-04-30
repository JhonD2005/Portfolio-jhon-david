import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto w-full">

        {/* TÍTULO */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Sobre mí
        </h2>

        {/* CONTENIDO */}
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/*FOTO GRANDE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              {/* Glow */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition"></div>

              <img
                src="/images/profile.jpg"
                alt="Jhon"
                className="relative w-90 h-90 md:w-[400px] md:h-[550px] object-cover rounded-3xl border border-gray-700"
              />
            </div>
          </motion.div>

          {/*TEXTO MÁS AMPLIO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Soy desarrollador de software con experiencia en desarrollo web y
              aseguramiento de calidad. Me especializo en Front-End utilizando
              React, JavaScript y CSS moderno, creando interfaces atractivas,
              funcionales y optimizadas para la mejor experiencia de usuario.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              También cuento con conocimientos en Back-End, bases de datos y
              testing, lo que me permite desarrollar soluciones completas y
              adaptarme a diferentes entornos tecnológicos.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              Me apasiona construir productos digitales que no solo funcionen bien,
              sino que también ofrezcan una experiencia intuitiva y moderna.
            </p>

            {/* TECNOLOGÍAS */}
            <div className="mt-8 flex flex-wrap gap-4">
              {["React", "JavaScript", "HTML", "CSS", "Angular"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-5 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
