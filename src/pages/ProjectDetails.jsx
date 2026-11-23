import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaCheck,
  FaGithub,
  FaExternalLinkAlt,
  FaLightbulb,
  FaCode,
  FaGraduationCap,
  FaBullseye,
} from "react-icons/fa";

import projects from "../data/projects";
import SectionTitle from "../components/ui/SectionTitle";

function Reveal({ children, className = "", delay = 0, from = "bottom" }) {
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
      { threshold: 0.08 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const origins = {
    bottom: "translateY(32px)",
    left: "translateX(-32px)",
    right: "translateX(32px)",
    top: "translateY(-32px)",
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : origins[from],
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
      className={className}
    >
      {children}
    </div>
  );
}

function InfoCard({
  icon: Icon,
  iconColor = "text-blue-400",
  title,
  children,
  className = "",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#0f1621]/80 to-[#090e18]/80 p-5 backdrop-blur-sm sm:p-7 ${className}`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-blue-500/5 blur-xl" />
      <div className="relative">
        <div className="mb-4 flex items-center gap-3 sm:mb-5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/5">
            <Icon className={`text-lg ${iconColor}`} aria-hidden="true" />
          </div>
          <h3 className="text-sm font-bold text-white sm:text-base">{title}</h3>
        </div>
        {children}
      </div>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((item) => String(item.id) === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-[#080c12] px-4 py-20 text-center sm:px-6">
        <h1 className="mb-4 text-2xl font-black text-white sm:text-3xl">
          Projeto não encontrado
        </h1>
        <p className="mb-8 text-sm text-slate-500 sm:text-base">
          O projeto que você está procurando não existe.
        </p>
        <Link to="/projetos" className="botao botao-principal w-full sm:w-auto">
          <FaArrowLeft aria-hidden="true" />
          Voltar aos projetos
        </Link>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-[#080c12]">
      {/* Decoração de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute left-1/2 top-32 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[130px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,160,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(100,160,255,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <section className="relative mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-24 sm:pt-32">
        {/* Voltar */}
        <Reveal>
          <Link
            to="/projetos"
            className="mb-8 inline-flex items-center gap-2.5 rounded-lg border border-white/8 bg-white/3 px-3.5 py-2 text-xs font-medium text-slate-400 backdrop-blur-sm transition-all duration-300 hover:border-white/15 hover:text-white sm:mb-10 sm:px-4 sm:py-2.5 sm:text-sm"
          >
            <FaArrowLeft aria-hidden="true" />
            Voltar aos projetos
          </Link>
        </Reveal>

        {/* Header do projeto */}
        <Reveal delay={60}>
          <div className="mb-10 sm:mb-14">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-blue-400 sm:mb-4">
              {project.category}
            </p>
            <SectionTitle>{project.title}</SectionTitle>
            <p className="mt-2 text-base text-slate-500 sm:text-lg">{project.subtitle}</p>
          </div>
        </Reveal>

        {/* Objetivo */}
        <Reveal delay={80}>
          <InfoCard icon={FaBullseye} title="Objetivo do projeto">
            <p className="text-sm leading-8 text-slate-500 sm:text-base">
              {project.objective || project.description}
            </p>
          </InfoCard>
        </Reveal>

        {/* Sobre */}
        <Reveal delay={120}>
          <InfoCard
            icon={FaCode}
            iconColor="text-cyan-400"
            title="Sobre o projeto"
            className="mt-5"
          >
            <p className="text-sm leading-8 text-slate-500 sm:text-base">
              {project.description}
            </p>
          </InfoCard>
        </Reveal>

        {/* Funcionalidades e Destaques técnicos */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Reveal delay={140}>
            <InfoCard icon={FaCheck} iconColor="text-green-400" title="Funcionalidades">
              <ul className="space-y-3">
                {project.features?.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                  >
                    <FaCheck
                      className="mt-1 shrink-0 text-xs text-green-400"
                      aria-hidden="true"
                    />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>

          <Reveal delay={180} from="right">
            <InfoCard icon={FaCode} iconColor="text-blue-400" title="Destaques técnicos">
              <ul className="space-y-3">
                {project.highlights?.map((highlight) => (
                  <li
                    key={highlight}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-400"
                  >
                    <span
                      className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </InfoCard>
          </Reveal>
        </div>

        {/* Tecnologias */}
        <Reveal delay={200}>
          <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#0f1621]/80 to-[#090e18]/80 p-5 backdrop-blur-sm sm:p-7">
            <h3 className="mb-4 text-sm font-bold text-white sm:mb-5 sm:text-base">
              Tecnologias utilizadas
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-2.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-lg border border-blue-500/15 bg-blue-500/8 px-3 py-1.5 text-xs font-medium text-blue-300 sm:px-3.5 sm:py-2 sm:text-sm"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Aprendizados */}
        {project.learnings && (
          <Reveal delay={240}>
            <div className="mt-5 overflow-hidden rounded-2xl border border-white/8 bg-gradient-to-br from-[#0f1621]/80 to-[#090e18]/80 p-5 backdrop-blur-sm sm:p-7">
              <div className="mb-4 flex items-center gap-3 sm:mb-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/8 bg-white/5">
                  <FaGraduationCap className="text-lg text-purple-400" aria-hidden="true" />
                </div>
                <h3 className="text-sm font-bold text-white sm:text-base">
                  Conhecimentos aplicados
                </h3>
              </div>
              <div className="flex items-start gap-3">
                <FaLightbulb className="mt-1 shrink-0 text-yellow-400" aria-hidden="true" />
                <p className="text-sm leading-8 text-slate-500 sm:text-base">
                  {project.learnings}
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {/* Links */}
        <Reveal delay={280}>
          <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-8 sm:mt-10 sm:flex-row sm:pt-10">
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="botao botao-principal w-full sm:w-auto"
              >
                <FaExternalLinkAlt aria-hidden="true" />
                Acessar demonstração
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="botao botao-secundario w-full sm:w-auto"
            >
              <FaGithub aria-hidden="true" />
              Ver código-fonte
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}

export default ProjectDetails;
