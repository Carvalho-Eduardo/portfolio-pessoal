
const projects = [
  {
    id: 1,
    title: "Sistema de votação do Grêmio",
    subtitle: "Plataforma de votação escolar",
    category: "Sistema web",
    cover: "votacao",
    description:
      "Aplicação web desenvolvida para organizar o processo de votação do Grêmio Estudantil, com identificação dos alunos e controle de votos.",
    features: [
      "Identificação do aluno antes da votação",
      "Controle para evitar votos duplicados",
      "Apresentação das chapas e apuração dos resultados",
    ],
    technologies: ["React", "JavaScript", "Vercel"],
    demo: "https://votacao-gremio-app.vercel.app/",
    github: "https://github.com/Carvalho-Eduardo/votacao-gremio-app",
  },
  {
    id: 2,
    title: "Cardápio online",
    subtitle: "Experiência digital para restaurantes",
    category: "Desenvolvimento web",
    cover: "cardapio",
    description:
      "Aplicação web de cardápio digital criada para apresentar produtos de forma organizada e facilitar o acesso dos clientes.",
    features: [
      "Apresentação digital dos produtos",
      "Interface adaptada para diferentes telas",
      "Aplicação publicada para acesso pela internet",
    ],
    technologies: ["React", "JavaScript", "Vercel"],
    demo: "https://cardapio-1.vercel.app/",
    github: "https://github.com/Carvalho-Eduardo/cardapio",
  },
  {
    id: 3,
    title: "Sistema de Gerenciamento de Produtos",
    subtitle: "Aplicação web CRUD com Java",
    category: "Desenvolvimento backend",
    cover: "crud",
    description:
      "Aplicação web desenvolvida com Java, JSP, JDBC e MySQL para gerenciamento de produtos. Permite realizar operações completas de cadastro, consulta, listagem, atualização e exclusão, com persistência de dados em banco de dados.",
    features: [
      "Cadastro e consulta de produtos",
      "Listagem dos produtos cadastrados",
      "Atualização das informações",
      "Exclusão de registros",
      "Persistência de dados com MySQL",
      "Organização da aplicação em camadas",
    ],
    technologies: [
      "Java",
      "JSP",
      "JDBC",
      "MySQL",
      "HTML5",
      "CSS3",
      "Apache Tomcat",
    ],
    github: "https://github.com/Carvalho-Eduardo/CrudProduto",
  },
];

export default projects;
