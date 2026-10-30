import { siteSettings } from '@/lib/siteSettings';
const offer = siteSettings.penaporta;
export type PenaPortaFaqItem = {
  question: string;
  answer: string;
};

export const penaporta = {
  checkoutUrl: offer.checkoutUrl,
  ctas: {
    purchase: 'Comprar agora',
    vacancy: 'Garantir minha vaga',
    duo: 'Garantir meu ingresso duplo',
  },
  event: {
    ...offer,
  },
  problems: [
    'A procrastinação destrói a consistência e as metas se tornam inalcançáveis.',
    'Decisões reativas que mantêm você apagando incêndios.',
    'Planos que começam bem, mas perdem consistência na execução.',
    'Muito esforço investido sem avanço na direção que realmente importa.',
  ],
  workshopTopics: [
    'SMARTIRIZE',
    'Desenvolver estratégias',
    'Alinhar a mentalidade',
    'Ação consistente',
    'Inteligência e controle emocional dos caveiras do BOPE/RJ',
    'Faça um 360°',
    'Flexibilidade',
  ],
  plan: [
    {
      code: '01',
      title: 'Definir',
      body: 'Definir com clareza onde você está, o que impede o avanço e qual resultado precisa ser perseguido.',
    },
    {
      code: '02',
      title: 'Planejar',
      body: 'Aplicar os 7 Atributos para organizar prioridades, recursos, obstáculos e decisões.',
    },
    {
      code: '03',
      title: 'Executar',
      body: 'Levar o planejamento para a jornada da vida e converter ações em compromissos práticos.',
    },
  ],
  methodFlow: [
    'Clareza sobre o objetivo',
    'Leitura do cenário',
    'Organização dos recursos',
    'Definição de prioridades',
    'Tomada de decisão',
    'Plano de ação',
    'Acompanhamento',
  ],
  audience: [
    'Empresários e empreendedores que trabalham muito, mas continuam centralizados e reativos.',
    'Líderes, gestores e coordenadores que precisam organizar prioridades, metas e execução com o time.',
    'Profissionais que querem elevar sua capacidade de planejamento, disciplina e entrega.',
    'Times que precisam construir alinhamento, linguagem comum e maior capacidade de execução.',
    'Pessoas dispostas a assumir responsabilidade pelo que querem construir.',
  ],
  notThis: [
    'Motivação sem aplicação',
    'Fórmula mágica',
    'Entretenimento',
    'Treinamento militar',
  ],
  day: ['Identificar', 'Planejar', 'Preparar', 'E executar HOJE'],
  faq: [
    {
      question: 'Para quem é o Pé na Porta?',
      answer:
        'Para empresários, empreendedores, líderes, gestores, profissionais e times que precisam transformar objetivos em planejamento, prioridades e ações executáveis.',
    },
    {
      question: 'Preciso ter empresa?',
      answer:
        'Não. O método também se aplica a profissionais e pessoas que precisam organizar decisões, direção e execução na vida ou no trabalho.',
    },
    {
      question: 'Posso levar um convidado?',
      answer: 'Sim. Garanta seu ingresso e leve um convidado.',
    },
    {
      question: 'É presencial?',
      answer:
        'Sim. O Pé na Porta é um workshop presencial, com participação ativa, exercícios, interação e aplicação prática.',
    },
    {
      question: 'Qual é a duração?',
      answer: `${offer.duration}. ${offer.date}. ${offer.schedule}.`,
    },
    {
      question: 'O que preciso levar?',
      answer:
        'As orientações da edição, incluindo materiais e itens pessoais recomendados, serão enviadas aos participantes inscritos.',
    },
    {
      question: 'Receberei material?',
      answer:
        'A edição apresenta ferramentas de planejamento e aplicação, incluindo os 7 Atributos e o Mapa Combat. Os materiais inclusos serão confirmados na oferta vigente.',
    },
    {
      question: 'Onde será?',
      answer: offer.location,
    },
    {
      question: 'Como funciona a inscrição?',
      answer: `Clique no botão de inscrição para acessar o checkout oficial. Investimento: ${offer.investment}. Pagamento: ${offer.payment}. Garanta seu ingresso e leve um convidado.`,
    },
    {
      question: 'O evento é militar?',
      answer:
        'Não. O Instituto utiliza aprendizados de operações especiais aplicados a liderança, planejamento, cultura, mentalidade e execução.',
    },
  ] satisfies PenaPortaFaqItem[],
} as const;

export function resolvePenaPortaCheckout(url: string) {
  return url.trim() || '#oferta';
}
