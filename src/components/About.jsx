export default function About() {
  return (
    <section id="about" className="p-10 max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold">Sobre mí</h2>

      <p className="mt-6 text-gray-400 leading-relaxed">
        Soy desarrollador de software con experiencia en desarrollo web y
        aseguramiento de calidad. Me especializo en Front-End utilizando React,
        JavaScript y CSS moderno, creando interfaces atractivas, funcionales y
        optimizadas para la mejor experiencia de usuario.
      </p>

      <p className="mt-4 text-gray-400 leading-relaxed">
        También cuento con conocimientos en Back-End, bases de datos y testing,
        lo que me permite entender y desarrollar soluciones completas.
      </p>

      {/* Tecnologías */}
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {["React", "JavaScript", "HTML", "CSS", "Angular"].map((tech, i) => (
          <span
            key={i}
            className="bg-gray-800 px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
          >
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
}