export type PenaPortaFaqItem = {
  question: string;
  answer: string;
};

export const penaporta = {
  checkoutUrl: "",
  ctas: {
    primary: "Quero participar do Pé na Porta",
    short: "Quero participar",
  },
  event: {
    format: "Presencial",
    duration: "Aproximadamente 10 horas",
    date: "[DATA A CONFIRMAR]",
    location: "[LOCAL A CONFIRMAR]",
  },
  problem: [
    "Você termina o dia com a sensação de que fez muito, mas não produziu o que realmente importava?",
    "Suas metas existem, mas não se transformam em estratégia e execução?",
    "Você começa ações e perde consistência no caminho?",
    "Seu time espera decisões que deveriam acontecer sem depender de você?",
    "Você sabe que precisa mudar, mas ainda não definiu qual movimento vem primeiro?",
  ],
  journey: [
    "Meta",
    "Estado atual × estado desejado",
    "Interferências",
    "Estratégia",
    "Crenças",
    "Ação",
    "Controle emocional",
    "Avaliação do cenário",
    "Adaptação",
  ],
  experience: [
    {
      code: "01",
      title: "7 atributos — Mova-se",
      body: "Estrutura prática para transformar intenção em meta, prioridade, estratégia e movimento.",
    },
    {
      code: "02",
      title: "Liderança Caveira",
      body: "Mentalidade baseada em preparo, responsabilidade, disciplina, equipe e missão.",
    },
    {
      code: "03",
      title: "NUCOE — introdutório",
      body: "Uma base de essência cultural para compreender unidade e equalização da tomada de decisão.",
    },
    {
      code: "04",
      title: "Mapa Combat",
      body: "Experiência prática de cenário, planejamento, papéis, comunicação, adaptação e decisão.",
    },
    {
      code: "05",
      title: "Debrief + plano",
      body: "O aprendizado vira decisão e um próximo movimento concreto.",
    },
  ],
  deliverables: [
    "Missão prioritária definida como meta",
    "Resultado desejado",
    "Clareza sobre estado atual e estado desejado",
    "Interferências reconhecidas",
    "Estratégias sob sua responsabilidade",
    "Prazos para construção das metas",
    "Crenças aliadas à jornada",
    "Próximo passo concreto definido",
  ],
  before: [
    "Falta de clareza",
    "Dificuldade de desenvolver estratégia",
    "Procrastinação e baixa produtividade",
    "Metas e liderança desalinhadas",
    "Percepção de cultura fraca",
  ],
  after: [
    "Metas claras",
    "Estratégia bem definida",
    "Crenças alinhadas",
    "Plano de ação",
    "Inteligência e controle emocional",
    "Leitura de cenário e flexibilidade",
    "Maior consciência de liderança",
  ],
  audience: [
    "Empresários e empreendedores",
    "Líderes responsáveis por pessoas e resultados",
    "Profissionais que querem mudar o rumo da vida, do time ou do negócio",
    "Quem trabalha e entrega, mas percebe que esforço sem prioridade custa caro",
  ],
  notThis: [
    "Uma palestra motivacional",
    "Um treinamento militar",
    "Uma coleção de fórmulas prontas",
    "Uma promessa de resolver tudo em um dia",
  ],
  faq: [
    {
      question: "Isso é treinamento militar?",
      answer: "Não. As Operações Especiais são a origem de princípios de planejamento, liderança, responsabilidade e decisão. A aplicação do Pé na Porta acontece na vida e nos negócios.",
    },
    {
      question: "Eu já faço planejamento. Serve para mim?",
      answer: "Sim. O evento não se limita a escrever metas. Ele conecta meta, estratégia, crenças, ação, liderança, leitura de cenário, controle emocional e adaptação.",
    },
    {
      question: "Meu problema é meu time. Por que eu deveria participar?",
      answer: "O Pé na Porta parte da responsabilidade de quem lidera a missão: clareza, estratégia e padrão de decisão precisam começar na liderança.",
    },
    {
      question: "O que 10 horas podem mudar?",
      answer: "O evento não promete resolver todos os problemas em 10 horas. Promete clareza, estruturação, fortalecimento da decisão e um próximo movimento concreto.",
    },
    {
      question: "É só para empresários?",
      answer: "Não. É para empresários, empreendedores, líderes e profissionais que carregam responsabilidades e querem avançar na vida, no time ou no negócio.",
    },
    {
      question: "É uma palestra motivacional?",
      answer: "Não. O desenho alterna lições, reflexão, escrita, aplicação, interação e experiência prática.",
    },
  ] satisfies PenaPortaFaqItem[],
} as const;

export function resolvePenaPortaCheckout(url: string) {
  return url.trim() || "#oferta";
}
