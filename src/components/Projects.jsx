import { projects } from "../data/projects";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="p-10 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center">Proyectos</h2>

      <div className="grid md:grid-cols-3 gap-8 mt-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: i * 0.2, // efecto escalonado
            }}
            viewport={{ once: true }}
            className="bg-gray-800 p-6 rounded-2xl hover:scale-105 transition transform hover:shadow-xl"
          >
            <h3 className="text-xl font-bold">{project.title}</h3>

            <p className="text-gray-400 mt-3">
              {project.description}
            </p>

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

            <div className="flex gap-4 mt-6">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}