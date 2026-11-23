import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
  FaJava,
  FaFileCode,
  FaDatabase,
  FaPlug,
  FaLock,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPython,
  SiHtml5,
  SiCss,
  SiReact,
  SiTailwindcss,
  SiSpringboot,
  SiNodedotjs,
  SiMysql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiVercel,
  SiRender,
} from "../components/ui/TechIcons";
import { useNavigate } from "react-router-dom";
import SectionTitle from "../components/ui/SectionTitle";
import technologies from "../data/technologies";

/* ── Mapa de ícones ─────────────────────────────────────────────────── */
const technologyIcons = {
  Java: FaJava,
  JavaScript: SiJavascript,
  Python: SiPython,
  HTML5: SiHtml5,
  CSS3: SiCss,
  React: SiReact,
  "Tailwind CSS": SiTailwindcss,
  "Spring Boot": SiSpringboot,
  "Node.js": SiNodedotjs,
  JSP: FaFileCode,
  JDBC: FaDatabase,
  "REST API": FaPlug,
  JWT: FaLock,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Git: SiGit,
  GitHub: SiGithub,
  Vercel: SiVercel,
  Render: SiRender,
};

const technologyRows = [
  [
    { title: "Linguagens", group: "Linguagens" },
    { title: "Ferramentas e versionamento", group: "Ferramentas" },
  ],
  [
    { title: "Banco de dados", group: "Dados" },
    { title: "Hospedagem e deploy", group: "Deploy" },
  ],
  [{ title: "Frontend", group: "Frontend" }],
  [{ title: "Backend", group: "Backend" }],
];

/* ── Hook: detecta quando o elemento entra na viewport ─────────────── */
function useInView(options = {}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      {
        threshold: options.threshold ?? 0.05,
        rootMargin: options.rootMargin ?? "0px 0px 50px 0px",
      },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [options.threshold, options.rootMargin]);

  return [ref, visible];
}

/* ── Reveal: animação suave fade + translateY ───────────────────────── */
function Reveal({
  children,
  delay = 0,
  from = "bottom",
  distance = 18,
  className = "",
}) {
  const [ref, visible] = useInView();

  const translate = {
    bottom: `translateY(${distance}px)`,
    left: `translateX(-${distance}px)`,
    right: `translateX(${distance}px)`,
    top: `translateY(-${distance}px)`,
  };

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : translate[from],
        transition: `opacity 0.45s ease-out ${delay}ms,
                     transform 0.45s ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
      className={className}
    >
      {children}
    </div>
  );
}

/* ── Linha decorativa com gradiente ────────────────────────────────── */
function GlowLine({ className = "" }) {
  return (
    <div
      className={`h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent ${className}`}
    />
  );
}

/* ── Label de seção ─────────────────────────────────────────────────── */
function SectionLabel({ number, label }) {
  return (
    <Reveal>
      <p className="mb-2 text-xs font-bold uppercase tracking-[0.35em] text-blue-400/70">
        {number} — {label}
      </p>
    </Reveal>
  );
}

/* ── Home ───────────────────────────────────────────────────────────── */
function Home() {
  const navigate = useNavigate();
  const baseUrl = import.meta.env.BASE_URL;

  const emailSubject = encodeURIComponent(
    "Contato profissional pelo portfólio",
  );
  const emailBody = encodeURIComponent(
    "Olá, Eduardo!\n\nConheci seu portfólio e entrei em contato por meio do seu site.\n\nGostaria de conversar com você sobre uma oportunidade ou possível colaboração na área de tecnologia.\n\nFico à disposição para conversarmos.\n\nAtenciosamente,\n[Seu nome]",
  );
  const emailLink = `mailto:e.duardo.carvalho@outlook.com?subject=${emailSubject}&body=${emailBody}`;

  /* Parallax suave — apenas na hero com RAF */
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY <= window.innerHeight * 1.1) {
            setScrollY(window.scrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="relative overflow-x-hidden bg-[#080c12]">
      {/* ══════════════════════════════════════════════════════════
          HERO — tela cheia com parallax no fundo
      ══════════════════════════════════════════════════════════ */}
      <section
        id="inicio"
        className="relative flex min-h-screen items-center overflow-hidden"
      >
        {/* Gradiente de profundidade */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 90% 70% at 65% 40%, rgba(30,80,160,0.18) 0%, transparent 65%)," +
              "radial-gradient(ellipse 50% 50% at 15% 85%, rgba(10,40,100,0.12) 0%, transparent 60%)",
          }}
        />

        {/* Grid sutil com parallax */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,160,255,0.9) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(100,160,255,0.9) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            transform: `translateY(${scrollY * 0.1}px)`,
          }}
        />

        {/* Texto editorial no fundo — parallax lento */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex select-none items-center justify-end overflow-hidden"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        >
          <span className="pr-0 text-[15vw] font-black leading-none tracking-tighter text-white/[0.022] lg:text-[11vw]">
            EDUARDO
          </span>
        </div>

        {/* Orbs de luz */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/4 h-120 w-120 rounded-full blur-[130px]"
          style={{
            background: "rgba(37,99,235,0.12)",
            transform: `translateY(${scrollY * -0.07}px)`,
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-16 bottom-1/4 h-70 w-70 rounded-full blur-[90px]"
          style={{
            background: "rgba(14,165,233,0.08)",
            transform: `translateY(${scrollY * 0.05}px)`,
          }}
        />

        {/* Conteúdo */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-12 sm:gap-16 px-4 sm:px-6 pt-28 pb-16 sm:py-28 lg:flex-row lg:gap-20">
          {/* Texto */}
          <div className="max-w-2xl flex-1 animate-fade-up text-left">
            <p className="mb-3 sm:mb-4 text-xs sm:text-sm font-medium uppercase tracking-[0.35em] text-slate-500">
              Olá, eu sou
            </p>

            <h1
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white"
              style={{ lineHeight: 1.05 }}
            >
              Eduardo
              <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Carvalho
              </span>
              <span className="text-blue-400">.</span>
            </h1>

            <h2 className="mt-4 sm:mt-6 text-base sm:text-xl font-medium text-slate-400">
              Desenvolvedor de Software · Java &amp; Web
            </h2>

            <p className="mt-4 sm:mt-6 max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-slate-500">
              Desenvolvo aplicações web e sistemas que integram interfaces, APIs
              e bancos de dados. Experiência com Java, Spring Boot, React e
              JavaScript.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={() => navigate("/projetos")}
                className="group relative cursor-pointer overflow-hidden rounded-xl bg-blue-600 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:bg-blue-500 hover:shadow-blue-500/30 hover:shadow-xl text-center justify-center flex items-center"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Conheça meus projetos
                  <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </span>
                {/* Shimmer no hover */}
                <span className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
              </button>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById("contato")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="cursor-pointer rounded-xl border border-white/10 bg-white/5 px-6 sm:px-7 py-3 sm:py-3.5 text-sm font-semibold text-slate-300 backdrop-blur-sm transition-all duration-300 hover:border-blue-400/40 hover:bg-white/8 hover:text-white text-center justify-center flex items-center"
              >
                Entre em contato
              </button>
            </div>

            <div className="mt-8 sm:mt-10 flex items-center gap-5 sm:gap-6">
              {[
                {
                  href: "https://github.com/Carvalho-Eduardo",
                  label: "GitHub",
                  Icon: FaGithub,
                },
                {
                  href: "https://www.linkedin.com/in/e-duardo-carvalho/",
                  label: "LinkedIn",
                  Icon: FaLinkedin,
                },
                { href: emailLink, label: "E-mail", Icon: FaEnvelope },
              ].map(({ href, label, Icon }, i) => (
                <span key={label} className="flex items-center gap-5 sm:gap-6">
                  {i > 0 && <div className="h-4 w-px bg-white/10" />}
                  <a
                    href={href}
                    {...(label !== "E-mail"
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    aria-label={label}
                    className="text-slate-500 transition-all duration-300 hover:-translate-y-0.5 hover:text-blue-400"
                  >
                    <Icon size={22} />
                  </a>
                </span>
              ))}
            </div>
          </div>

          {/* Foto — limpa, sem cards */}
          <div className="relative shrink-0 animate-fade-up mt-4 lg:mt-0">
            {/* Halo de luz */}
            <div className="absolute -inset-8 rounded-[2.5rem] bg-linear-to-br from-blue-600/12 via-transparent to-cyan-500/8 blur-2xl" />
            {/* Borda gradiente */}
            <div className="absolute -inset-px rounded-4xl bg-linear-to-br from-blue-500/28 via-transparent to-cyan-400/14" />
            {/* Imagem */}
            <div className="relative overflow-hidden rounded-[1.875rem] border border-white/8 shadow-2xl shadow-black/70">
              <img
                src={`${baseUrl}img/image.png`}
                alt="Foto profissional de Eduardo Carvalho"
                className="h-auto w-52 sm:w-64 lg:w-72 object-cover"
                loading="eager"
                decoding="async"
                fetchPriority="high"
                onError={(e) =>
                  console.error("Erro ao carregar foto:", e.currentTarget.src)
                }
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950/14 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Divisor com linha brilhante entre Hero e conteúdo */}
      <GlowLine />

      {/* ══════════════════════════════════════════════════════════
          SOBRE MIM
      ══════════════════════════════════════════════════════════ */}
      <section id="sobre" className="relative">
        {/* Orb de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 top-1/4 h-112.5 w-112.5 rounded-full bg-blue-600/5 blur-[120px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <SectionLabel number="01" label="Sobre mim" />

          <Reveal delay={40}>
            <SectionTitle>Quem sou eu</SectionTitle>
          </Reveal>

          <Reveal delay={80}>
            <GlowLine className="mb-10 sm:mb-16 max-w-50 opacity-50" />
          </Reveal>

          <div className="grid gap-8 sm:gap-12 md:grid-cols-[1fr_300px] md:items-start">
            {/* Texto */}
            <div className="space-y-6 sm:space-y-7">
              <Reveal delay={120}>
                <p className="text-base sm:text-lg leading-8 sm:leading-9 text-slate-400">
                  Sou desenvolvedor de software com formação em{" "}
                  <span className="font-semibold text-slate-200">
                    Análise e Desenvolvimento de Sistemas
                  </span>{" "}
                  pela Universidade Santa Cecília. Tenho interesse em engenharia
                  de software e no desenvolvimento de aplicações que resolvam
                  problemas reais.
                </p>
              </Reveal>

              <Reveal delay={180}>
                <p className="text-sm sm:text-base leading-7 sm:leading-9 text-slate-500">
                  Minha experiência prática envolve o desenvolvimento de
                  sistemas web, integração entre frontend e backend, criação de
                  APIs e persistência de dados. Trabalho principalmente com{" "}
                  <span className="font-medium text-blue-300/90">
                    Java, Spring Boot, React e JavaScript
                  </span>{" "}
                  e bancos de dados relacionais.
                </p>
              </Reveal>

              <Reveal delay={240}>
                <p className="text-sm sm:text-base leading-7 sm:leading-9 text-slate-500">
                  Busco desenvolver soluções com código organizado, boa
                  estrutura e facilidade de manutenção. Valorizo o aprendizado
                  contínuo e a evolução técnica por meio de projetos práticos.
                </p>
              </Reveal>
            </div>

            {/* Card currículo */}
            <Reveal delay={160} from="right">
              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-[#0f1621] to-[#0a0f18] p-6 sm:p-8 shadow-2xl">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-blue-500/8 blur-2xl" />
                <FaDownload className="mb-4 sm:mb-5 text-2xl sm:text-3xl text-blue-400" />
                <h3 className="text-lg sm:text-xl font-bold text-slate-100">
                  Meu currículo
                </h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm leading-6 sm:leading-7 text-slate-500">
                  Confira minha trajetória, formação e conhecimentos técnicos.
                </p>
                <a
                  href={`${baseUrl}arquivos/curriculo-eduardo.pdf`}
                  download="Curriculo-Eduardo-Carvalho.pdf"
                  className="botao botao-principal group mt-6 sm:mt-7 w-full"
                >
                  <FaDownload className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                  Baixar currículo
                </a>
                <div className="mt-5 border-t border-white/5 pt-5">
                  <p className="text-[11px] uppercase tracking-widest text-slate-700">
                    Atualizado em 2026
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <GlowLine />

      {/* ══════════════════════════════════════════════════════════
          TECNOLOGIAS
      ══════════════════════════════════════════════════════════ */}
      <section id="tecnologias" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-0 top-1/3 h-100 w-100 rounded-full bg-blue-600/5 blur-[110px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <SectionLabel number="02" label="Stack" />

          <Reveal delay={40}>
            <SectionTitle>Tecnologias</SectionTitle>
          </Reveal>

          <Reveal delay={80}>
            <GlowLine className="mb-10 sm:mb-16 max-w-50 opacity-50" />
          </Reveal>

          <Reveal delay={120}>
            <div className="mb-10 sm:mb-14 max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-400">
                Conhecimentos técnicos
              </p>
              <h3 className="mt-2 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-100">
                Skills &amp; Experience
              </h3>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base leading-7 text-slate-500">
                Tecnologias e ferramentas que utilizo no desenvolvimento de
                aplicações e projetos práticos.
              </p>
            </div>
          </Reveal>

          {/* Rows de tecnologia */}
          <div className="divide-y divide-white/5 rounded-2xl border border-white/5 bg-white/1.5 backdrop-blur-sm overflow-hidden">
            {technologyRows.map((row, rowIndex) => (
              <Reveal key={rowIndex} delay={rowIndex * 40}>
                <div
                  className={`grid grid-cols-1 ${
                    row.length > 1
                      ? "divide-y divide-white/5 sm:grid-cols-2 sm:divide-x sm:divide-y-0"
                      : ""
                  }`}
                >
                  {row.map((group) => {
                    const groupTechs = technologies.filter(
                      (t) => t.group === group.group,
                    );
                    if (!groupTechs.length) return null;

                    return (
                      <div
                        key={group.group}
                        className="flex flex-col items-center px-4 py-8 text-center sm:px-8 sm:py-10"
                      >
                        <h4 className="mb-6 sm:mb-8 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-500">
                          {group.title}
                        </h4>
                        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
                          {groupTechs.map((tech) => {
                            const Icon = technologyIcons[tech.name];
                            return (
                              <div
                                key={tech.name}
                                className="group flex w-14 sm:w-16 lg:w-20 flex-col items-center gap-2"
                                title={tech.category}
                              >
                                <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/8 bg-white/4 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/30 group-hover:bg-blue-400/8 group-hover:shadow-lg group-hover:shadow-blue-500/10">
                                  {Icon ? (
                                    <Icon
                                      aria-hidden="true"
                                      className="text-lg sm:text-xl lg:text-2xl text-slate-400 transition-colors duration-300 group-hover:text-blue-300"
                                    />
                                  ) : (
                                    <span className="text-xs font-bold text-slate-400 transition-colors duration-300 group-hover:text-blue-300">
                                      {tech.name.slice(0, 2)}
                                    </span>
                                  )}
                                </div>
                                <span className="text-[10px] sm:text-[11px] font-medium text-slate-600 transition-colors duration-300 group-hover:text-slate-300 text-center">
                                  {tech.name}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <GlowLine />

      {/* ══════════════════════════════════════════════════════════
          PROJETOS CTA
      ══════════════════════════════════════════════════════════ */}
      <section id="projetos" className="relative overflow-hidden">
        {/* Texto decorativo de fundo */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-8 bottom-0 select-none overflow-hidden"
        >
          <span className="text-[20vw] sm:text-[16vw] lg:text-[14vw] font-black leading-none tracking-tighter text-white/[0.018]">
            CODE
          </span>
        </div>
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[150px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <SectionLabel number="03" label="Portfólio" />

          <Reveal delay={40}>
            <h2 className="mt-4 text-3xl sm:text-5xl lg:text-6xl font-black leading-tight sm:leading-[1.08] tracking-tight text-white">
              Projetos que refletem
              <br />
              <span className="bg-linear-to-r from-blue-400 via-blue-300 to-cyan-300 bg-clip-text text-transparent">
                minha evolução.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-5 sm:mt-7 max-w-lg text-sm sm:text-base lg:text-lg leading-7 sm:leading-8 text-slate-500">
              Conheça as soluções que venho desenvolvendo ao longo da minha
              jornada na tecnologia.
            </p>
          </Reveal>

          <Reveal delay={120}>
            <button
              type="button"
              onClick={() => navigate("/projetos")}
              className="group mt-8 sm:mt-10 inline-flex w-full sm:w-auto items-center justify-center gap-4 overflow-hidden rounded-2xl border border-blue-500/25 bg-blue-600/8 px-6 sm:px-8 py-3.5 sm:py-4 text-sm sm:text-base font-bold text-blue-300 backdrop-blur-sm transition-all duration-500 hover:border-blue-400/50 hover:bg-blue-600/16 hover:text-white hover:shadow-2xl hover:shadow-blue-500/12 cursor-pointer"
            >
              Ver todos os projetos
              <span className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full border border-current/50 transition-all duration-300 group-hover:bg-blue-500 group-hover:border-blue-500">
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </span>
            </button>
          </Reveal>

          {/* Chips dos projetos */}
          <Reveal delay={160}>
            <div className="mt-8 sm:mt-12 flex flex-wrap gap-2 sm:gap-3">
              {[
                "StockFlow",
                "Votação Grêmio",
                "Cardápio Online",
                "CRUD Java",
              ].map((name) => (
                <span
                  key={name}
                  className="inline-flex items-center gap-2 sm:gap-2.5 rounded-full border border-white/8 bg-white/3 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs sm:text-sm text-slate-500"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400/50" />
                  {name}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <GlowLine />

      {/* ══════════════════════════════════════════════════════════
          CONTATO
      ══════════════════════════════════════════════════════════ */}
      <section id="contato" className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/3 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[130px]"
        />

        <div className="relative mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-24 lg:py-28">
          <SectionLabel number="04" label="Contato" />

          <Reveal delay={40}>
            <SectionTitle>Vamos conversar?</SectionTitle>
          </Reveal>

          <Reveal delay={80}>
            <GlowLine className="mb-10 sm:mb-16 max-w-50 opacity-50" />
          </Reveal>

          <div className="grid gap-8 sm:gap-12 md:grid-cols-2 md:items-start">
            {/* Texto */}
            <div>
              <Reveal delay={120}>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white">
                  Estou aberto a novas{" "}
                  <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    oportunidades
                  </span>
                </h3>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-7 sm:leading-8 text-slate-500">
                  Colaborações em projetos, oportunidades de trabalho ou apenas
                  uma conversa sobre tecnologia — fique à vontade para entrar em
                  contato.
                </p>
              </Reveal>

              <Reveal delay={200}>
                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                  <a
                    href="https://github.com/Carvalho-Eduardo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao botao-secundario justify-center"
                  >
                    <FaGithub size={18} />
                    GitHub
                  </a>
                  <a
                    href="https://www.linkedin.com/in/e-duardo-carvalho/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="botao botao-principal justify-center"
                  >
                    <FaLinkedin size={18} />
                    LinkedIn
                  </a>
                  <a href={emailLink} className="botao botao-secundario justify-center">
                    <FaEnvelope size={18} />
                    E-mail
                  </a>
                </div>
              </Reveal>
            </div>

            {/* Card e-mail */}
            <Reveal delay={160} from="right">
              <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-linear-to-br from-[#0f1621] to-[#090e18] p-6 sm:p-8 shadow-2xl">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-blue-500/8 blur-2xl" />
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-slate-600">
                  E-mail profissional
                </p>
                <a
                  href="mailto:e.duardo.carvalho@outlook.com"
                  className="group inline-block break-all text-base sm:text-lg lg:text-xl font-semibold text-slate-200 transition-colors duration-300 hover:text-blue-400"
                >
                  e.duardo.carvalho@outlook.com
                  <span className="ml-2 inline-block opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    →
                  </span>
                </a>
                <div className="mt-6 sm:mt-8 flex items-center gap-3">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-400" />
                  </span>
                  <span className="text-xs sm:text-sm text-slate-500">
                    Disponível para contato
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
