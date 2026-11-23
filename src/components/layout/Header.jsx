import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [secaoPendente, setSecaoPendente] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  /* Barra de progresso e estilo do header ao rolar (otimizado via RAF) */
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const doc = document.documentElement;
          const total = doc.scrollHeight - doc.clientHeight;
          setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Oculta a barra de progresso quando não está na Home */
  const showProgress = location.pathname === "/";

  /* Detecta seção ativa via IntersectionObserver */
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["inicio", "sobre", "tecnologias", "projetos", "contato"];
    const observers = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 },
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [location.pathname]);

  /* Navega para seção pendente após mudar de rota */
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
    setMobileOpen(false);
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
    { label: "Início", sectionId: "inicio" },
    { label: "Sobre", sectionId: "sobre" },
    { label: "Tecnologias", sectionId: "tecnologias" },
    { label: "Projetos", href: "/projetos" },
    { label: "Contato", sectionId: "contato" },
  ];

  const isActive = (link) => {
    if (link.href) return location.pathname === link.href;
    return activeSection === link.sectionId;
  };

  return (
    <header
      className={`fixed top-0 z-100 w-full transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-[#080c12]/95 shadow-2xl shadow-black/40 backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      {/* Barra de progresso de scroll */}
      {showProgress && (
        <div className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white/5">
          <div
            className="h-full bg-linear-to-r from-blue-600 via-blue-400 to-cyan-400 transition-all duration-100"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      )}
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 py-3.5 sm:py-4">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group relative text-base sm:text-lg font-black tracking-tight text-white transition-opacity duration-300 hover:opacity-80"
        >
          <span>Eduardo</span>
          <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            {" "}Carvalho
          </span>
          <span className="text-blue-400">.</span>

          {/* Linha decorativa embaixo do logo */}
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-linear-to-r from-blue-400 to-cyan-300 transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Nav desktop */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <span key={link.label}>
              {link.sectionId ? (
                <button
                  type="button"
                  onClick={() => navegarParaSecao(link.sectionId)}
                  className={`relative cursor-pointer rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(link)
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive(link) && (
                    <span className="absolute inset-0 rounded-lg bg-white/6" />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive(link) && (
                    <span className="absolute bottom-1 left-1/2 h-px w-4 -translate-x-1/2 bg-blue-400" />
                  )}
                </button>
              ) : (
                <Link
                  to={link.href}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
                    isActive(link)
                      ? "text-white"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {isActive(link) && (
                    <span className="absolute inset-0 rounded-lg bg-white/6" />
                  )}
                  <span className="relative">{link.label}</span>
                  {isActive(link) && (
                    <span className="absolute bottom-1 left-1/2 h-px w-4 -translate-x-1/2 bg-blue-400" />
                  )}
                </Link>
              )}
            </span>
          ))}
        </nav>

        {/* Botão mobile */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/8 bg-white/3 p-2 transition-colors hover:bg-white/8 md:hidden"
          aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={mobileOpen}
        >
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile */}
      <div
        className={`overflow-hidden border-b border-white/8 bg-[#080c12]/98 backdrop-blur-2xl transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1.5 px-4 sm:px-6 py-4">
          {links.map((link) => (
            <span key={link.label}>
              {link.sectionId ? (
                <button
                  type="button"
                  onClick={() => navegarParaSecao(link.sectionId)}
                  className={`w-full cursor-pointer rounded-xl px-4 py-3 text-left text-sm font-medium transition-all ${
                    isActive(link)
                      ? "border border-blue-500/25 bg-blue-500/10 font-semibold text-blue-300 shadow-sm"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-sm font-medium transition-all ${
                    isActive(link)
                      ? "border border-blue-500/25 bg-blue-500/10 font-semibold text-blue-300 shadow-sm"
                      : "text-slate-300 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              )}
            </span>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
