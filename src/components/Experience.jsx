import { motion } from "framer-motion";

const experience = [
  {
    company: "Globant",
    role: "QA Manual",
    period: "2025 - 2026",
    logo: "/images/globant.png",
    achievements: [
      "Ejecución de pruebas funcionales en aplicaciones web",
      "Reporte y seguimiento de bugs en entornos ágiles",
      "Colaboración con equipos de desarrollo para mejorar calidad",
      "Validación de flujos críticos de usuario"
    ],
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen px-6 py-20">
      <h2 className="text-4xl font-bold text-center mb-20">
        Experiencia
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">

        {/* TIMELINE IZQUIERDA */}
        <div className="relative">

          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className={`mb-16 flex ${
                i % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <div className="relative group w-full max-w-md">

                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-50 transition"></div>

                {/* Card */}
                <div className="relative bg-gray-800/80 backdrop-blur-md p-6 rounded-2xl border border-gray-700 shadow-xl hover:scale-105 transition">

                  {/* Header */}
                  <div className="flex items-center gap-4">
                    <img
                      src={exp.logo}
                      alt={exp.company}
                      className="w-12 h-12 object-contain rounded-lg bg-white p-1"
                    />

                    <div>
                      <h3 className="text-xl font-bold">
                        {exp.role}
                      </h3>
                      <p className="text-blue-400">
                        {exp.company}
                      </p>
                      <span className="text-sm text-gray-400">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-gray-700 my-4"></div>

                  {/* Logros */}
                  <ul className="text-gray-300 text-sm space-y-2">
                    {exp.achievements.map((item, index) => (
                      <li key={index} className="flex gap-2">
                        <span className="text-blue-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CARD DERECHA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition"></div>

          {/* Card */}
          <div className="relative bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl">

            {/* Estado */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-green-400 font-medium">
                Disponible para trabajar
              </p>
            </div>

            {/* Título */}
            <h3 className="text-2xl font-bold mb-4">
              Buscando nuevas oportunidades
            </h3>

            {/* Texto */}
            <p className="text-gray-300 leading-relaxed">
              Actualmente me encuentro en búsqueda de nuevas oportunidades en el área de QA Manual
              y aseguramiento de calidad de software, donde pueda aportar mis conocimientos en pruebas funcionales, 
              validación de APIs y análisis de incidencias, mientras continúo fortaleciendo mis habilidades en automatización 
              de pruebas y calidad de software.

            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-6 bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 rounded-lg font-medium hover:scale-105 transition"
            >
              Contáctame
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}