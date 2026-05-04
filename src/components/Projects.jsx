import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Proyectos
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            viewport={{ once: true }}

            whileHover={{ y: -10, scale: 1.03 }}
            className="relative group cursor-pointer"
          >
            {/* 🔥 Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur opacity-0 group-hover:opacity-60 transition"></div>

            {/* 📦 Card */}
            <div className="relative bg-gray-800/80 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700">

              {/* ⭐ BADGE PROYECTO REAL */}
              {project.featured && (
                <span className="absolute top-3 right-3 bg-yellow-400 text-black text-xs px-3 py-1 rounded-full font-bold z-10">
                  Proyecto Real
                </span>
              )}

              {/* 🖼️ IMAGEN */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition duration-500"
                />
              </div>

              {/* 📄 CONTENIDO */}
              <div className="p-5">
                <h3 className="text-lg font-bold">{project.title}</h3>

                <p className="text-gray-400 mt-2 text-sm">
                  {project.description}
                </p>

                {/* 🛠️ TECNOLOGÍAS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, index) => (
                    <span
                      key={index}
                      className="text-xs bg-gray-700 px-2 py-1 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* 🔗 LINKS */}
                <div className="flex gap-4 mt-6 items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition text-sm"
                  >
                    GitHub
                  </a>

                  {project.demo ? (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-400 hover:text-green-300 transition text-sm"
                    >
                      Live Demo
                    </a>
                  ) : (
                    <span className="text-xs text-gray-500">
                      Solo código
                    </span>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}