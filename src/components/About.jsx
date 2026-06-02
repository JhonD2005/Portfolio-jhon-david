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

          {/* FOTO */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex justify-center"
          >
            <div className="relative group">
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition"></div>

              <img
                src="/images/profile.jpg"
                alt="Jhon"
                className="relative w-90 h-90 md:w-[400px] md:h-[550px] object-cover rounded-3xl border border-gray-700"
              />
            </div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-gray-300 leading-relaxed text-lg">
              Soy desarrollador de software con enfoque en QA Manual y aseguramiento de calidad,
              con experiencia en validación funcional de aplicaciones web y móviles,
              pruebas de APIs y análisis de incidencias en entornos empresariales.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              Cuento con conocimientos en testing manual, SQL, Postman y herramientas de
              desarrollo, además de bases en programación con Java, JavaScript y React,
              lo que me permite comprender el ciclo completo de desarrollo de software.
            </p>

            <p className="mt-6 text-gray-400 leading-relaxed text-lg">
              Actualmente me encuentro fortaleciendo mis habilidades en automatización de
              pruebas y calidad de software, con el objetivo de seguir creciendo
              profesionalmente en el área de QA.
            </p>

            {/* TECNOLOGÍAS */}
            <div className="mt-8 flex flex-wrap gap-4">
              {["React", "JavaScript", "HTML", "CSS", "Tailwind CSS", "Angular", "Python", "Java", "Node.js", "MySQL"].map((tech, i) => (
                <span
                  key={i}
                  className="bg-gray-800 px-5 py-2 rounded-lg text-sm hover:bg-gray-700 transition hover:scale-110"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 🎓 EDUCACIÓN EPICA */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-28"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Educación
          </h3>

          <div className="flex justify-center">
            <div className="relative group w-full max-w-3xl">

              {/* Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-40 group-hover:opacity-70 transition"></div>

              {/* Card */}
              <div className="relative bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl hover:scale-[1.02] transition">

                {/* Header */}
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div>
                    <h4 className="text-2xl font-bold">
                      TL - Desarrollo de aplicaciones informaticas
                    </h4>

                    <p className="text-blue-400">
                      Cesde - La pintada
                    </p>
                  </div>

                  <span className="text-sm text-gray-400">
                    Agosto 2024 - Febrero 2026
                  </span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gray-700 my-6"></div>

                {/* Descripción */}
                <p className="text-gray-300 leading-relaxed">
                  Formación enfocada en desarrollo de software, estructuras de datos,
                  bases de datos y desarrollo web. Complemento mi aprendizaje con
                  proyectos prácticos y formación autodidacta para mantenerme
                  actualizado en tecnologías modernas.
                </p>

                {/* EXTRA VISUAL */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {["Desarrollo Web", "Front end", "Back end", "Bases de Datos", "Estructuras de Datos", "POO"].map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gray-700 px-3 py-1 rounded-lg"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
