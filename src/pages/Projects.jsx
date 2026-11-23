import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaCodeBranch, FaExternalLinkAlt } from "react-icons/fa";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";
import projects from "../data/projects";

function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(32px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function Projects() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleVoltar = () => {
    if (window.history.state && window.history.state.idx > 0) {
      navigate(-1);
    } else {
      navigate("/");
    }
  };

  return (
    <main className="relative min-h-screen bg-[#080c12]">
      {/* Decoração de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-32 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,160,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-24 sm:pt-32 pb-16 sm:pb-24">
        <Reveal>
          <button
            type="button"
            onClick={handleVoltar}
            className="mb-6 sm:mb-8 inline-flex cursor-pointer items-center gap-2.5 rounded-lg border border-white/8 bg-white/3 px-4 py-2.5 text-sm font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:text-white"
          >
            <FaArrowLeft aria-hidden="true" />
            Voltar
          </button>
        </Reveal>

        <Reveal delay={40}>
          <p className="mb-2 sm:mb-3 text-xs font-bold uppercase tracking-[0.3em] text-blue-400/80">
            Portfólio
          </p>
          <SectionTitle>Meus projetos</SectionTitle>
        </Reveal>

        <Reveal delay={80}>
          <p className="mb-6 max-w-2xl text-sm sm:text-base leading-7 sm:leading-8 text-slate-500">
            Projetos práticos que desenvolvi para aplicar conhecimentos de
            programação, explorar soluções para necessidades reais e continuar
            evoluindo como desenvolvedor.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-8 sm:mb-10 flex flex-wrap gap-2.5 sm:gap-3 text-xs text-slate-400 sm:text-sm">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3.5 sm:px-4 py-2 backdrop-blur-sm">
              <FaCodeBranch className="text-blue-400 shrink-0" />
              Código disponível no GitHub
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3.5 sm:px-4 py-2 backdrop-blur-sm">
              <FaExternalLinkAlt className="text-green-400 shrink-0" />
              Demonstrações online
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={Math.min(index * 60, 240)}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
