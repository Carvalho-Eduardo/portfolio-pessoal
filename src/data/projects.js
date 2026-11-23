const projects = [
  {
    id: 1,
    title: "StockFlow",
    subtitle: "Sistema de gerenciamento de estoque",
    category: "Sistema web",
    cover: "stockflow",

    description:
      "Sistema web de gerenciamento de estoque desenvolvido para centralizar o controle de produtos, categorias, fornecedores, compras e movimentações. Possui autenticação de usuários, integração entre frontend e backend e persistência de dados em banco de dados.",

    objective:
      "Centralizar as operações de controle de estoque em uma única plataforma, facilitando o gerenciamento de produtos, fornecedores e movimentações.",

    highlights: [
      "Desenvolvimento de frontend com React e JavaScript",
      "Construção de API backend com Java e Spring Boot",
      "Integração entre frontend, backend e banco de dados",
      "Implementação de autenticação com JWT",
      "Persistência de dados com MySQL",
      "Publicação da aplicação em serviços de hospedagem distintos",
    ],

    learnings:
      "Integração entre aplicações frontend e backend, desenvolvimento de APIs REST, autenticação, persistência de dados e publicação de aplicações web.",

    features: [
      "Autenticação e cadastro de usuários",
      "Gerenciamento de produtos e categorias",
      "Cadastro e gerenciamento de fornecedores",
      "Controle de compras e movimentações de estoque",
      "Integração com banco de dados",
      "Interface responsiva com dashboard administrativo",
    ],

    technologies: [
      "React",
      "JavaScript",
      "Java 21",
      "Spring Boot",
      "MySQL",
      "JWT",
      "Tailwind CSS",
    ],

    demo: "https://stock-management-system-two-livid.vercel.app/",
    github: "https://github.com/Carvalho-Eduardo/stock-management-system",
  },

  {
    id: 2,
    title: "Sistema de votação do Grêmio",
    subtitle: "Plataforma de votação escolar",
    category: "Sistema web",
    cover: "votacao",

    description:
      "Aplicação web desenvolvida para organizar o processo de votação do Grêmio Estudantil, permitindo a identificação dos alunos, a apresentação das chapas e o controle dos votos.",

    objective:
      "Oferecer uma plataforma digital para organizar o processo de votação escolar e facilitar a participação dos alunos.",

    highlights: [
      "Desenvolvimento de interface com React",
      "Organização do fluxo de votação",
      "Identificação dos alunos antes da votação",
      "Implementação de mecanismos para evitar votos duplicados",
      "Apresentação das chapas e dos resultados",
    ],

    learnings:
      "Desenvolvimento de interfaces interativas, organização de fluxos de utilização e implementação de regras de negócio em aplicações web.",

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
    id: 3,
    title: "Cardápio online",
    subtitle: "Experiência digital para restaurantes",
    category: "Desenvolvimento web",
    cover: "cardapio",

    description:
      "Aplicação web de cardápio digital criada para apresentar produtos de forma organizada e facilitar o acesso dos clientes às opções disponíveis.",

    objective:
      "Disponibilizar uma experiência digital simples e acessível para a consulta de produtos de um estabelecimento.",

    highlights: [
      "Desenvolvimento de interface com React",
      "Organização visual dos produtos",
      "Adaptação da interface para diferentes tamanhos de tela",
      "Publicação da aplicação na internet",
    ],

    learnings:
      "Desenvolvimento de interfaces com React, organização de componentes e construção de aplicações web responsivas.",

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
    id: 4,
    title: "Sistema de Gerenciamento de Produtos",
    subtitle: "Aplicação web CRUD com Java",
    category: "Desenvolvimento backend",
    cover: "crud",

    description:
      "Aplicação web desenvolvida com Java, JSP, JDBC e MySQL para gerenciamento de produtos. Permite realizar operações completas de cadastro, consulta, listagem, atualização e exclusão, com persistência de dados em banco de dados.",

    objective:
      "Desenvolver um sistema para demonstrar operações de gerenciamento de dados e integração entre uma aplicação Java e um banco de dados relacional.",

    highlights: [
      "Desenvolvimento com Java",
      "Construção de páginas dinâmicas com JSP",
      "Acesso e manipulação de dados com JDBC",
      "Integração com banco de dados MySQL",
      "Execução da aplicação com Apache Tomcat",
      "Implementação das operações CRUD",
    ],

    learnings:
      "Programação Java para aplicações web, integração com banco de dados relacional, operações CRUD e organização de aplicações em camadas.",

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
