import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaCopy,
  FaWhatsapp
} from "react-icons/fa";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

export default function Contact() {
  const email = "jhonda9000@gmail.com";

  const whatsappNumber = "573232180688";
  const whatsappMessage = "Hola Jhon, vi tu portafolio y me gustaría contactarte";

  const copyEmail = () => {
     navigator.clipboard.writeText(email);
     toast.success("Email copiado", {
   style: {
     background: "#111827",
     color: "#fff",
     border: "1px solid #374151",
   },
   iconTheme: {
     primary: "#3b82f6",
     secondary: "#fff",
   },
   });
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-6 py-20 flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold text-center mb-6">
        Contacto
      </h2>

      <p className="text-gray-400 text-center max-w-xl mb-12">
        ¿Tienes un proyecto, una oportunidad laboral o simplemente quieres
        hablar? Estoy disponible para colaborar y crear soluciones increíbles.
      </p>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-800/70 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-700"
      >
        {/* EMAIL */}
        <div className="flex items-center justify-between bg-gray-900 p-4 rounded-lg">
          <div className="flex items-center gap-3 text-gray-300">
            <FaEnvelope className="text-blue-400" />
            <span className="text-sm">{email}</span>
          </div>

          <button
            onClick={copyEmail}
            className="hover:text-blue-400 transition"
            title="Copiar email"
          >
            <FaCopy />
          </button>
        </div>

        {/* BOTONES */}
        <div className="flex flex-col gap-4 mt-6">

          {/* EMAIL CTA */}
          <a
            href={`mailto:${email}`}
            className="text-center bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg font-medium hover:scale-105 transition"
          >
            Enviar correo
          </a>

          {/* WHATSAPP CTA */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              whatsappMessage
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center bg-green-500 hover:bg-green-600 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition hover:scale-105"
          >
            <FaWhatsapp />
            WhatsApp
          </a>
        </div>

        {/* REDES */}
        <div className="flex justify-center gap-8 mt-8 text-2xl">
          <a
            href="https://github.com/JhonD2005"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-125"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/jhon-david-37138933a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition hover:scale-125"
          >
            <FaLinkedin />
          </a>

          {/* ICONO WHATSAPP EXTRA */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition hover:scale-125"
          >
            <FaWhatsapp />
          </a>
        </div>
      </motion.div>
    </section>
  );
}