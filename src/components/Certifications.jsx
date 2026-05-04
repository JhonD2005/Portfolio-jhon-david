import { motion } from "framer-motion";

const certifications = [
  {
    title: "Curso de N8N",
    platform: "Udemy",
    file: "/certificates/Certificado N8N.pdf",
  },
  {
    title: "Curso QA Testing",
    platform: "Udemy",
    file: "/certificates/QA Certificado.pdf",
  },
  {
    title: "Principios SOLID y Clean Code",
    platform: "Udemy",
    file: "/certificates/SOLID.pdf",
  },
  {
    title: "Curso Git y GitHub",
    platform: "Udemy",
    file: "/certificates/git y github basico.pdf",
  },
  {
    title: "Certificado de inglés básico",
    platform: "Udemy",
    file: "/certificates/English course.pdf",
  },
  {
    title: "Curso de Front-End",
    platform: "Nodo EAFIT",
    file: "/certificates/Certificado_eafit_jhon-david-vanegas-gallo.pdf",
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="min-h-screen px-6 py-20">

      {/* TÍTULO */}
      <h2 className="text-4xl font-bold text-center mb-6">
        Certificaciones
      </h2>

      {/* DESCRIPCIÓN */}
      <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16 leading-relaxed">
        Como parte de mi formación continua, he realizado cursos de manera
        autodidacta en plataformas como Udemy, fortaleciendo mis habilidades
        en desarrollo web y manteniéndome actualizado en nuevas tecnologías.
      </p>

         {/* CERTIFICACIÓN DESTACADA */}
      <div className="max-w-4xl mx-auto mb-16">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition"></div>

          <div className="relative bg-gray-900 p-6 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold">
              Certificación Profesional - Globant
            </h3>

            <p className="text-gray-400 mt-3">
              Reconocimiento otorgado por <span className="text-white font-semibold">Globant</span> 
              por la finalización del programa de prácticas 
              <span className="text-blue-400"> New Generation</span>, donde adquirí
              experiencia profesional en entornos reales de desarrollo.
            </p>

            <a
              href="/certificates/Globant.pdf"
              download
              className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 px-5 py-2 rounded-lg transition"
            >
              Ver certificado
            </a>
          </div>
        </div>
      </div>

      {/* GRID DE CERTIFICADOS */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {certifications.map((cert, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
            viewport={{ once: true }}

            whileHover={{ y: -10, scale: 1.03 }}
            className="relative group cursor-pointer"
          >
            {/* Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition duration-300"></div>

            {/* Card */}
            <div className="relative bg-gray-800/70 backdrop-blur-md p-6 rounded-2xl border border-gray-700 transition duration-300 group-hover:border-blue-500">

              <h3 className="text-lg font-bold">{cert.title}</h3>

              <p className="text-gray-400 mt-2 text-sm">
                {cert.platform}
              </p>

              <a
                href={cert.file}
                download
                className="inline-block mt-6 text-sm bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition"
              >
                Ver certificado
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}