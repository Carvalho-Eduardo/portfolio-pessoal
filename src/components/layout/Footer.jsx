import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const anoAtual = 2026;
  const location = useLocation();
  const navigate = useNavigate();
  const [secaoPendente, setSecaoPendente] = useState(null);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (location.pathname === "/" && secaoPendente) {
      const id = secaoPendente;
      requestAnimationFrame(() => {
        if (id === "inicio") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }
        setSecaoPendente(null);
      });
    }
  }, [location.pathname, secaoPendente]);

  function navegarParaSecao(id) {
    if (location.pathname !== "/") {
      setSecaoPendente(id);
      navigate("/");
      return;
    }
    if (id === "inicio") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  const links = [
    { label: "Início", id: "inicio" },
    { label: "Sobre mim", id: "sobre" },
    { label: "Tecnologias", id: "tecnologias" },
    { label: "Contato", id: "contato" },
  ];

  return (
    <>
      {/* Botão voltar ao topo */}
      <button
        type="button"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-200 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-[#0f1621]/90 text-slate-400 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-blue-400/40 hover:text-blue-400 ${
          showTop
            ? "translate-y-0 opacity-100"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
        aria-label="Voltar ao topo"
      >
        <FaArrowUp size={13} />
      </button>

      <footer className="relative border-t border-white/5 bg-[#080c12]">
        {/* Linha brilhante no topo */}
        <div className="absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2 bg-linear-to-r from-transparent via-blue-500/30 to-transparent" />

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-start sm:gap-10">
            {/* Marca */}
            <div className="max-w-xs">
              <Link
                to="/"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="text-xl font-black tracking-tight text-white transition-opacity hover:opacity-70"
              >
                Eduardo
                <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  {" "}Carvalho
                </span>
                <span className="text-blue-400">.</span>
              </Link>

              <p className="mt-3 sm:mt-4 text-sm leading-7 text-slate-400">
                Desenvolvedor de Software · Java & Web.
                <br />
                Estudante de ADS, apaixonado por tecnologia.
              </p>

              <div className="mt-5 flex items-center gap-4">
                <a
                  href="https://github.com/Carvalho-Eduardo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-white"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/e-duardo-carvalho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href="mailto:e.duardo.carvalho@outlook.com"
                  aria-label="Enviar e-mail"
                  className="text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400"
                >
                  <FaEnvelope size={19} />
                </a>
              </div>
            </div>

            {/* Navegação */}
            <div>
              <h2 className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Navegação
              </h2>
              <nav className="flex flex-col gap-2.5 sm:gap-3">
                {links.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => navegarParaSecao(link.id)}
                    className="cursor-pointer text-left text-sm text-slate-400 transition-colors hover:text-slate-200"
                  >
                    {link.label}
                  </button>
                ))}
                <Link
                  to="/projetos"
                  className="text-sm text-slate-400 transition-colors hover:text-slate-200"
                >
                  Projetos
                </Link>
              </nav>
            </div>

            {/* Contato */}
            <div>
              <h2 className="mb-3 sm:mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Contato
              </h2>
              <a
                href="mailto:e.duardo.carvalho@outlook.com"
                className="group block break-all text-sm text-slate-400 transition-colors hover:text-blue-400"
              >
                e.duardo.carvalho@outlook.com
                <span className="ml-1 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                  →
                </span>
              </a>
              <div className="mt-4 flex items-center gap-2">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-green-400" />
                </span>
                <span className="text-xs text-slate-400">
                  Disponível para contato
                </span>
              </div>
            </div>
          </div>

          {/* Rodapé inferior */}
          <div className="mt-10 sm:mt-12 flex flex-col items-center justify-between gap-3 sm:gap-4 border-t border-white/5 pt-6 sm:pt-8 text-center sm:flex-row sm:text-left">
            <p className="text-xs text-slate-400">
              © {anoAtual} Eduardo Carvalho. Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-400">
              Desenvolvido com React + Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
