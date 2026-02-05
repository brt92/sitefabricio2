
import React from 'react';
import { Service, JobPosition } from './types';

// Icons as SVG components
export const Icons = {
  Factory: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
  ),
  Recycle: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
    </svg>
  ),
  Flask: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
    </svg>
  ),
  Check: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  Menu: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  ),
  Close: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  ),
  Chat: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
  ),
  Send: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
    </svg>
  ),
  Cog: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
  Briefcase: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Globe: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  ShieldCheck: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  Trash: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  ),
  Download: () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
};

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Micronização de Polímeros',
    description: 'Especialistas em micronização de resinas termoplásticas (PEAD e PEBDL) com rigoroso controle de malha. Garantimos a granulometria ideal para processos de rotomoldagem, resultando em peças com acabamento impecável e propriedades mecânicas preservadas.',
    icon: <Icons.Flask />,
    imageUrl: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's2',
    title: 'Extrusão e Peletização',
    description: 'Processamento de polímeros através de extrusão para fabricação de pellets. Ideal para a recuperação de materiais industriais e criação de compostos específicos, mantendo a homogeneidade e a pureza do polímero recuperado.',
    icon: <Icons.Factory />,
    imageUrl: 'https://images.unsplash.com/photo-1590214246062-87034c568912?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's3',
    title: 'Moagem Industrial',
    description: 'Sistema de moagem de alta performance para beneficiamento de aparas e resíduos industriais. Reduzimos materiais a dimensões controladas, preparando-os para reinserção na cadeia produtiva com máxima eficiência.',
    icon: <Icons.Recycle />,
    imageUrl: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 's4',
    title: 'Ensaios de Laboratório',
    description: 'Unidade laboratorial completa para garantir a qualidade Fabrício. Realizamos testes de densidade aparente, fluidez (MFI) e análise granulométrica por via seca, assegurando que o produto final atenda às normas técnicas mais exigentes.',
    icon: <Icons.ShieldCheck />,
    imageUrl: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800'
  }
];

export const VACANCIES: JobPosition[] = [
  {
    id: 'v1',
    title: 'Operador de Extrusora',
    department: 'Produção',
    requirements: ['Ensino Médio completo', 'Experiência em máquinas de extrusão', 'Disponibilidade de horário']
  },
  {
    id: 'v2',
    title: 'Auxiliar de Laboratório',
    department: 'Qualidade',
    requirements: ['Curso Técnico em Química ou Plásticos', 'Conhecimento em ensaios físicos', 'Desejável experiência em indústria petroquímica']
  },
  {
    id: 'v3',
    title: 'Operador de Moinho',
    department: 'Produção',
    requirements: ['Residir em Triunfo ou região', 'Força de vontade', 'Trabalho em equipe']
  }
];

export const COMPANY_INFO = {
  name: "Fabrício Indústria Petroquímica LTDA",
  cnpj: "19.244.046/0001-84",
  address: "Rodovia TF10, nº 3257, Rincão dos Pinheiros – Triunfo/RS",
  cep: "95853-000",
  phone: "(51) 3457-3056",
  email: "contato@fabriciopetro.com.br",
  hours: "Segunda a Sexta – 07:30 às 17:15",
  area: "6.000 m²",
  motto: "Tecnologia de ponta no beneficiamento de polímeros.",
  history: "Fundada em 2014, a Fabrício Petroquímica nasceu da visão de excelência do Grupo Fabrício. Localizada no III Polo Petroquímico de Triunfo-RS, a empresa se especializou na transformação de resinas termoplásticas, tornando-se referência nacional em micronização e processamento industrial.",
  fieldOfAction: "Nossa unidade fabril atua no beneficiamento de polímeros pós-indústria e virgens, atendendo principalmente o setor de rotomoldagem. Com uma infraestrutura de 6.000m² e logística própria, entregamos soluções ágeis e tecnicamente superiores para indústrias de todo o país.",
  qualityPolicy: "A Fabricio Petroquímica na sua atividade busca a melhoria continua do seu Sistema de Gestão da Qualidade, dos seus produtos, requisitos aplicáveis e dos processos e serviços garantindo a satisfação de seus clientes de acordo com as especificações, prazos e necessidades, bem como com a capacitação de seus colaboradores.",
  qualityObjectives: [
    "Satisfação plena dos clientes e parceiros.",
    "Melhoria contínua do SGQ e dos processos produtivos.",
    "Atendimento rigoroso aos requisitos técnicos dos polímeros.",
    "Capacitação constante dos colaboradores da unidade.",
    "Gerenciamento eficaz de riscos e oportunidades de mercado."
  ],
  fepamLicense: "LO nº 04494/2024",
  environmentalCompliance: "Operamos sob as mais rígidas normas ambientais, com licenciamento atualizado junto à FEPAM e IBAMA, garantindo uma produção sustentável e responsável.",
  micronizationDetail: "A nossa micronização utiliza pigmentos de alta solidez à luz, garantindo cores vibrantes e duráveis para as peças rotomoldadas. Controlamos o fluxo (fluidez) e a densidade de cada lote para assegurar a uniformidade no processamento dos nossos clientes."
};
