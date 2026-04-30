export default function Contact() {
  return (
    <section id="contact" className="p-10 text-center">
      <h2 className="text-4xl font-bold">Contacto</h2>

      <p className="mt-4 text-gray-400">
        ¿Tienes un proyecto o quieres trabajar conmigo? Contáctame.
      </p>

      <div className="mt-6 flex flex-col items-center gap-3 text-gray-300">
        <p>Email: jhonda9000@gmail.com</p>

        <div className="flex gap-6 mt-4">
          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="hover:text-blue-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}