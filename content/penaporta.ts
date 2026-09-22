export type PenaPortaFaqItem = {
  question: string;
  answer: string;
};

export const penaporta = {
  checkoutUrl: "https://www.sympla.com.br/evento/pe-na-porta/3573078?referrer=instituto2630.com.br&referrer=instituto2630.com.br",
  whatsappUrl: "https://api.whatsapp.com/message/ZTFAHNLLCQVJF1?autoload=1&app_absent=0",
  ctas: {
    purchase: "Comprar agora",
    vacancy: "Garantir minha vaga",
    duo: "Garantir meu ingresso duplo",
    whatsapp: "Falar com o Léo",
  },
  event: {
    format: "Treinamento presencial",
    duration: "Um dia de treinamento",
    date: "Próxima data em breve",
    schedule: "Horário a confirmar",
    location: "Local a confirmar",
    investment: "Investimento a confirmar",
  },
  problems: [
    "Prioridades concorrentes e metas sem um caminho definido.",
    "Decisões reativas que mantêm você apagando incêndios.",
    "Planos que começam bem, mas perdem consistência na execução.",
    "Muito esforço investido sem avanço na direção que realmente importa.",
  ],
  workshopTopics: [
    "Planejamento",
    "Liderança e autoliderança",
    "Tomada de decisão",
    "Prioridades",
    "Execução",
    "Responsabilidade pelos resultados",
  ],
  plan: [
    {
      code: "01",
      title: "Entender",
      body: "Reconhecer onde você está, o que impede o avanço e qual resultado precisa ser perseguido.",
    },
    {
      code: "02",
      title: "Planejar",
      body: "Aplicar os 7 Atributos para organizar prioridades, recursos, obstáculos e decisões.",
    },
    {
      code: "03",
      title: "Executar",
      body: "Levar o planejamento para o Mapa Combat e convertê-lo em ações e compromissos práticos.",
    },
  ],
  methodFlow: [
    "Clareza sobre o objetivo",
    "Leitura do cenário",
    "Organização dos recursos",
    "Definição de prioridades",
    "Tomada de decisão",
    "Plano de ação",
    "Acompanhamento",
  ],
  audience: [
    "Empresários e empreendedores que trabalham muito, mas continuam centralizados e reativos.",
    "Líderes, gestores e coordenadores que precisam organizar prioridades, metas e execução com o time.",
    "Profissionais que querem elevar sua capacidade de planejamento, disciplina e entrega.",
    "Times que precisam construir alinhamento, linguagem comum e maior capacidade de execução.",
    "Pessoas dispostas a assumir responsabilidade pelo que querem construir.",
  ],
  notThis: [
    "Motivação sem aplicação",
    "Fórmula mágica",
    "Entretenimento",
    "Treinamento militar",
  ],
  day: [
    "Abertura e contexto",
    "Leitura de cenário e objetivos",
    "Aplicação dos 7 Atributos",
    "Exercícios e provocações práticas",
    "Construção e uso do Mapa Combat",
    "Decisão, compromisso e fechamento",
  ],
  faq: [
    {
      question: "Para quem é o Pé na Porta?",
      answer: "Para empresários, empreendedores, líderes, gestores, profissionais e times que precisam transformar objetivos em planejamento, prioridades e ações executáveis.",
    },
    {
      question: "Preciso ter empresa?",
      answer: "Não. O método também se aplica a profissionais e pessoas que precisam organizar decisões, direção e execução na vida ou no trabalho.",
    },
    {
      question: "Posso levar um convidado?",
      answer: "A regra de convidados depende da edição vigente e será informada junto às condições de inscrição.",
    },
    {
      question: "É presencial?",
      answer: "Sim. O Pé na Porta é um workshop presencial, com participação ativa, exercícios, interação e aplicação prática.",
    },
    {
      question: "Qual é a duração?",
      answer: "É um dia inteiro de treinamento. Os horários exatos serão informados no bloco da próxima edição.",
    },
    {
      question: "O que preciso levar?",
      answer: "As orientações da edição, incluindo materiais e itens pessoais recomendados, serão enviadas aos participantes inscritos.",
    },
    {
      question: "Receberei material?",
      answer: "A edição apresenta ferramentas de planejamento e aplicação, incluindo os 7 Atributos e o Mapa Combat. Os materiais inclusos serão confirmados na oferta vigente.",
    },
    {
      question: "Onde será?",
      answer: "O endereço será publicado assim que a próxima edição estiver confirmada.",
    },
    {
      question: "Como funciona a inscrição?",
      answer: "Quando a próxima edição abrir, o botão de inscrição levará diretamente ao checkout oficial com todas as condições.",
    },
    {
      question: "O evento é militar?",
      answer: "Não. O Instituto utiliza aprendizados de operações especiais aplicados a liderança, planejamento, cultura, mentalidade e execução.",
    },
  ] satisfies PenaPortaFaqItem[],
} as const;

export function resolvePenaPortaCheckout(url: string) {
  return url.trim() || "#oferta";
}
