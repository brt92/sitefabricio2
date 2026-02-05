
import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { ChatWidget } from './components/ChatWidget';
import { Page, JobPosition } from './types';
import { SERVICES, COMPANY_INFO, Icons, VACANCIES } from './constants';

const fachadaPrincipal = 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1200';
const fachadaLateral = 'https://images.unsplash.com/photo-1565608411333-99d651d54ed1?auto=format&fit=crop&q=80&w=1200';
const interiorImg = 'https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&q=80&w=1200';
const recepcaoImg = 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200';
const laboratorioImg = 'https://images.unsplash.com/photo-1581093458791-9f3c3250bb8b?auto=format&fit=crop&q=80&w=1200';
const ecologiaImg = 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=1200';
const fepamLogo = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/FEPAM_RS.png/320px-FEPAM_RS.png';
const isoLogo = 'https://www.iso.org/files/live/sites/isoorg/files/about/ISO_logos/ISO_9001_Logo.jpg';

interface Candidate {
  id: string;
  name: string;
  email: string;
  jobTitle: string;
  fileName: string;
  timestamp: string;
}

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>(Page.HOME);
  const [selectedJob, setSelectedJob] = useState<string>('any');
  const [dynamicVacancies, setDynamicVacancies] = useState<JobPosition[]>(VACANCIES);
  const [submittedResumes, setSubmittedResumes] = useState<Candidate[]>([
    { id: '1', name: 'Candidato Exemplo', email: 'rh@fabriciopetro.com.br', jobTitle: 'Banco de Talentos', fileName: 'curriculo.pdf', timestamp: '24/05/2024' }
  ]);
  
  const [adminUser, setAdminUser] = useState('');
  const [adminPass, setAdminPass] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminTab, setAdminTab] = useState<'jobs' | 'candidates'>('jobs');

  const handleApplyClick = (jobId: string) => {
    setSelectedJob(jobId);
    setCurrentPage(Page.CAREERS);
    setTimeout(() => {
        document.getElementById('resume-form')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleAdminLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (adminUser === 'admin' && adminPass === 'petro2024') {
      setIsAuthenticated(true);
      setCurrentPage(Page.ADMIN_DASHBOARD);
    } else {
      alert('Credenciais inválidas.');
    }
  };

  const handleAddVacancy = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const newJob: JobPosition = {
      id: `v-${Date.now()}`,
      title: formData.get('title') as string,
      department: formData.get('dept') as string,
      requirements: (formData.get('reqs') as string).split('\n')
    };
    setDynamicVacancies([...dynamicVacancies, newJob]);
    form.reset();
    alert('Vaga adicionada com sucesso!');
  };

  const handleDeleteVacancy = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    if (confirm('Deseja excluir esta vaga permanentemente?')) {
      setDynamicVacancies(prev => prev.filter(v => v.id !== id));
    }
  };

  const handleResumeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);
    const newCand: Candidate = {
        id: Date.now().toString(),
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        jobTitle: selectedJob === 'any' ? 'Banco de Talentos' : dynamicVacancies.find(v => v.id === selectedJob)?.title || 'Vaga',
        fileName: 'curriculo_enviado.pdf',
        timestamp: new Date().toLocaleDateString('pt-BR')
    };
    setSubmittedResumes([newCand, ...submittedResumes]);
    alert('Currículo recebido! Agradecemos seu interesse.');
    setCurrentPage(Page.HOME);
  };

  return (
    <div className="min-h-screen flex flex-col pt-20 font-sans selection:bg-fabricio-yellow selection:text-fabricio-blue">
      <Navigation currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === Page.HOME && (
          <div className="animate-fade-in">
            {/* Hero Section Refatorada */}
            <section className="relative h-[80vh] flex items-center overflow-hidden">
              <div 
                className="absolute inset-0 z-0 bg-cover bg-center scale-105" 
                style={{ backgroundImage: `url(${fachadaPrincipal})`, filter: 'brightness(0.35)' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-fabricio-blue/60 to-transparent z-0"></div>
              
              <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white w-full">
                <div className="max-w-4xl animate-fade-in-up">
                  <div className="inline-flex items-center gap-2 bg-fabricio-yellow text-fabricio-blue font-black px-4 py-1.5 rounded mb-8 text-sm uppercase tracking-widest shadow-xl">
                    <Icons.Globe /> Estratégia no III Polo Petroquímico
                  </div>
                  <h1 className="text-5xl md:text-8xl font-black mb-6 leading-none uppercase tracking-tighter italic">
                    Transformando <br/>
                    <span className="text-fabricio-yellow">Polímeros</span> com Precisão
                  </h1>
                  <p className="text-xl md:text-3xl text-gray-100 mb-12 max-w-2xl font-light leading-relaxed border-l-8 border-fabricio-yellow pl-8">
                    {COMPANY_INFO.motto}
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <button 
                      onClick={() => setCurrentPage(Page.ABOUT)} 
                      className="bg-fabricio-yellow text-fabricio-blue px-12 py-5 rounded font-black uppercase text-sm hover:brightness-110 transition-all transform hover:-translate-y-1 shadow-[0_10px_30px_rgba(255,241,0,0.3)]"
                    >
                      A Empresa
                    </button>
                    <button 
                      onClick={() => setCurrentPage(Page.SERVICES)} 
                      className="backdrop-blur-lg bg-white/10 border-2 border-white/30 text-white px-12 py-5 rounded font-black uppercase text-sm hover:bg-white hover:text-fabricio-blue transition-all transform hover:-translate-y-1"
                    >
                      Nossas Soluções
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Nova Seção: Estatísticas Institucionais */}
            <section className="bg-fabricio-blue py-12 relative z-20">
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                {[
                  { value: '6.000', unit: 'm²', label: 'Área Fabril' },
                  { value: '+10', unit: 'Anos', label: 'de Experiência' },
                  { value: '100%', unit: 'Circular', label: 'Foco em Plásticos' },
                  { value: 'ISO', unit: '9001', label: 'Gestão de Qualidade' }
                ].map((stat, i) => (
                  <div key={i} className="text-center border-r border-white/10 last:border-0">
                    <div className="text-fabricio-yellow text-4xl font-black leading-none">{stat.value}<span className="text-lg ml-1 text-white opacity-80">{stat.unit}</span></div>
                    <div className="text-white/60 text-xs font-bold uppercase tracking-widest mt-2">{stat.label}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Apresentação da Empresa */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                  <div className="lg:w-1/2 space-y-8">
                    <div className="space-y-4">
                      <h2 className="text-fabricio-blue text-sm font-black uppercase tracking-widest flex items-center gap-3">
                        <span className="w-12 h-1 bg-fabricio-yellow"></span> Referência no Setor
                      </h2>
                      <h3 className="text-4xl md:text-5xl font-black text-fabricio-dark leading-tight">Expertise no Beneficiamento de Polímeros</h3>
                    </div>
                    <p className="text-xl text-gray-600 leading-relaxed font-medium">
                      {COMPANY_INFO.fieldOfAction}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex gap-4">
                        <div className="bg-fabricio-blue/10 p-3 rounded-xl h-fit text-fabricio-blue">
                          <Icons.Factory />
                        </div>
                        <div>
                          <h4 className="font-black text-fabricio-blue">Infraestrutura</h4>
                          <p className="text-sm text-gray-500 mt-1">Maquinário de última geração para micronização de PEAD e PEBDL.</p>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="bg-fabricio-blue/10 p-3 rounded-xl h-fit text-fabricio-blue">
                          <Icons.ShieldCheck />
                        </div>
                        <div>
                          <h4 className="font-black text-fabricio-blue">Qualidade Assegurada</h4>
                          <p className="text-sm text-gray-500 mt-1">Rastreabilidade total e laboratório próprio de ensaios físicos.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2 relative">
                    <img 
                      src={interiorImg} 
                      alt="Operação Fabrício" 
                      className="rounded-3xl shadow-2xl object-cover w-full h-[500px]"
                    />
                    <div className="absolute -bottom-8 -left-8 bg-fabricio-yellow p-8 rounded-2xl shadow-xl hidden md:block">
                      <p className="text-fabricio-blue font-black italic text-xl">"Excelência que <br/>gera valor para <br/>o seu produto."</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Cards de Diferenciais Técnicos */}
            <section className="py-24 bg-slate-50">
              <div className="max-w-7xl mx-auto px-4 text-center mb-16">
                <h2 className="text-fabricio-blue font-black uppercase tracking-tighter text-4xl italic">Diferenciais Técnicos</h2>
                <div className="w-24 h-2 bg-fabricio-yellow mx-auto mt-4"></div>
              </div>
              <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
                {[
                  { icon: <Icons.Globe />, title: 'Localização Estratégica', desc: 'No coração do Polo Petroquímico, otimizando custos logísticos e agilidade no fornecimento.' },
                  { icon: <Icons.Flask />, title: 'Tecnologia em Cores', desc: 'Micronização com pigmentos de alta solidez, garantindo uniformidade cromática e durabilidade.' },
                  { icon: <Icons.Recycle />, title: 'Economia Circular', desc: 'Transformamos resíduos industriais em matéria-prima de alto desempenho, com licenciamento ambiental.' }
                ].map((item, i) => (
                  <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all border border-gray-100 group">
                    <div className="text-fabricio-blue bg-fabricio-yellow w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="text-2xl font-black text-fabricio-blue uppercase mb-4 tracking-tighter italic">{item.title}</h4>
                    <p className="text-gray-500 leading-relaxed font-medium">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {currentPage === Page.ABOUT && (
          <div className="bg-white pb-24 animate-fade-in">
            <div className="bg-fabricio-dark py-32 text-center text-white relative">
              <h1 className="text-5xl font-black uppercase mb-4 tracking-tight">A Empresa</h1>
              <div className="h-1 w-24 bg-fabricio-yellow mx-auto"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <h2 className="text-4xl font-bold text-fabricio-blue leading-tight">Compromisso com o Futuro dos Plásticos</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{COMPANY_INFO.history}</p>
                <div className="grid grid-cols-2 gap-8">
                    <div className="border-l-4 border-fabricio-yellow pl-4">
                        <span className="block text-3xl font-black text-fabricio-blue">6000m²</span>
                        <span className="text-sm font-bold text-gray-400 uppercase">Área Total</span>
                    </div>
                    <div className="border-l-4 border-fabricio-yellow pl-4">
                        <span className="block text-3xl font-black text-fabricio-blue">RS</span>
                        <span className="text-sm font-bold text-gray-400 uppercase">Sede Triunfo</span>
                    </div>
                </div>
              </div>
              <div className="relative group">
                <img src={recepcaoImg} alt="Sede" className="rounded-[2.5rem] shadow-2xl object-cover h-[500px] w-full transform transition-transform group-hover:scale-[1.02]" />
                <div className="absolute -bottom-10 -left-10 bg-fabricio-blue text-white p-10 rounded-3xl shadow-2xl hidden xl:block">
                    <p className="font-bold text-xl italic opacity-80">"Tecnologia a serviço da indústria global."</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {currentPage === Page.SERVICES && (
          <div className="bg-slate-50 pb-24 animate-fade-in">
            <div className="bg-fabricio-dark py-32 text-center text-white">
              <h1 className="text-5xl font-black uppercase tracking-tight">Serviços Técnicos</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
              {SERVICES.map((s, idx) => (
                <div key={s.id} className="group bg-white rounded-[2rem] shadow-sm hover:shadow-2xl transition-all border border-slate-100 overflow-hidden flex flex-col h-full">
                  <div className="h-56 overflow-hidden relative">
                    <img 
                      src={s.imageUrl} 
                      alt={s.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-fabricio-blue/20 group-hover:bg-transparent transition-colors"></div>
                    <div className="absolute bottom-4 left-6">
                      <div className="bg-white p-3 rounded-2xl shadow-lg text-fabricio-blue transform -rotate-3 group-hover:rotate-0 transition-transform">
                        {s.icon}
                      </div>
                    </div>
                  </div>

                  <div className="p-10 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-2xl font-bold mb-4 text-fabricio-blue uppercase tracking-tighter">{s.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-6">{s.description}</p>
                    </div>
                    <div className="pt-6 border-t border-slate-100 flex items-center justify-between mt-4">
                      <span className="text-xs font-black text-slate-300 uppercase tracking-widest">Referência Industrial</span>
                      <div className="h-10 w-10 bg-slate-100 rounded-full flex items-center justify-center font-bold text-slate-400">{idx+1}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="bg-fabricio-blue rounded-[3rem] p-12 text-white flex flex-col lg:flex-row items-center gap-12 overflow-hidden relative">
                    <div className="absolute top-0 right-0 opacity-10 scale-150 rotate-12"><Icons.Cog /></div>
                    <div className="z-10 flex-1">
                        <h2 className="text-3xl font-bold mb-4">Micronização Customizada</h2>
                        <p className="text-blue-100 leading-relaxed">{COMPANY_INFO.micronizationDetail}</p>
                    </div>
                    <div className="bg-white/10 p-8 rounded-3xl border border-white/20 backdrop-blur-md">
                        <h4 className="font-bold mb-4 text-fabricio-yellow">Análises Laboratoriais:</h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2"><Icons.Check /> Granulometria Rigorosa</li>
                            <li className="flex items-center gap-2"><Icons.Check /> Fluidez de Material</li>
                            <li className="flex items-center gap-2"><Icons.Check /> Densidade Aparente</li>
                        </ul>
                    </div>
                </div>
            </div>
          </div>
        )}

        {currentPage === Page.QUALITY && (
          <div className="bg-white pb-24 animate-fade-in">
            <div className="bg-fabricio-dark py-32 text-center text-white">
              <h1 className="text-5xl font-black uppercase tracking-tight">Qualidade e Meio Ambiente</h1>
              <p className="text-blue-200 mt-4 max-w-2xl mx-auto px-4">Nosso compromisso com a excelência técnica e a preservação do ecossistema em cada processo industrial.</p>
            </div>

            {/* Certificação ISO 9001 Section */}
            <div className="max-w-7xl mx-auto px-4 mt-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <img src={laboratorioImg} alt="Qualidade" className="rounded-[3rem] shadow-2xl object-cover h-[450px] w-full" />
                        <div className="absolute -top-10 -left-10 bg-white p-8 rounded-full shadow-xl animate-bounce hidden xl:block">
                            <img src={isoLogo} alt="ISO 9001" className="h-24" />
                        </div>
                    </div>
                    <div className="space-y-6">
                        <span className="text-fabricio-blue font-black uppercase tracking-widest text-sm">Padrão Internacional</span>
                        <h2 className="text-4xl font-bold text-fabricio-dark leading-tight">Certificação de Excelência em Gestão</h2>
                        <p className="text-lg text-gray-600 italic border-l-4 border-fabricio-yellow pl-6">
                            "{COMPANY_INFO.qualityPolicy}"
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            A Fabrício Petroquímica mantém processos auditados que garantem a rastreabilidade total de nossos lotes micronizados, assegurando que as indústrias de rotomoldagem recebam materiais com granulometria e fluidez constantes.
                        </p>
                    </div>
                </div>
            </div>

            {/* Objetivos de Qualidade Grid */}
            <div className="bg-slate-50 mt-24 py-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h3 className="text-3xl font-black text-fabricio-blue uppercase tracking-tighter">Nossos Pilares Estratégicos</h3>
                        <div className="h-1.5 w-20 bg-fabricio-yellow mx-auto mt-4 rounded-full"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {COMPANY_INFO.qualityObjectives.map((obj, i) => (
                            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border-b-4 border-transparent hover:border-fabricio-yellow hover:shadow-xl transition-all transform hover:-translate-y-2">
                                <div className="bg-slate-100 w-12 h-12 rounded-xl flex items-center justify-center text-fabricio-blue mb-6">
                                    <Icons.Check />
                                </div>
                                <h4 className="font-bold text-lg text-slate-800 leading-snug">{obj}</h4>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Meio Ambiente Section */}
            <div className="max-w-7xl mx-auto px-4 mt-24">
                <div className="bg-fabricio-dark rounded-[4rem] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-2xl">
                    <div className="lg:w-1/2 p-12 lg:p-20 space-y-8 flex flex-col justify-center">
                        <div className="flex items-center gap-4 text-fabricio-yellow">
                            <Icons.Globe />
                            <h3 className="text-2xl font-black uppercase tracking-widest">Sustentabilidade</h3>
                        </div>
                        <h2 className="text-4xl font-bold text-white">Licenciamento e Proteção Ambiental</h2>
                        <p className="text-gray-400 text-lg">
                            Operamos sob a regência da <strong>FEPAM</strong>, garantindo que nosso beneficiamento de resinas pós-indústria contribua para a economia circular sem agredir o ecossistema local.
                        </p>
                        <div className="inline-flex items-center gap-4 bg-white/10 px-8 py-4 rounded-2xl border border-white/20">
                            <img src={fepamLogo} alt="FEPAM" className="h-10 brightness-0 invert" />
                            <span className="text-fabricio-yellow font-mono text-xl font-bold">{COMPANY_INFO.fepamLicense}</span>
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative min-h-[400px]">
                        <img src={ecologiaImg} alt="Natureza" className="absolute inset-0 w-full h-full object-cover opacity-80" />
                        <div className="absolute inset-0 bg-gradient-to-r from-fabricio-dark to-transparent lg:hidden"></div>
                    </div>
                </div>
            </div>
          </div>
        )}

        {currentPage === Page.CONTACT && (
          <div className="bg-white pb-24 animate-fade-in">
            <div className="bg-fabricio-dark py-32 text-center text-white">
              <h1 className="text-5xl font-black uppercase tracking-tight">Fale Conosco</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div className="space-y-12">
                <h3 className="text-3xl font-bold text-fabricio-blue">Contato Direto</h3>
                <div className="space-y-8">
                    <div className="flex gap-6 items-start">
                        <div className="bg-slate-100 p-4 rounded-2xl"><Icons.Globe /></div>
                        <div>
                            <p className="font-bold text-slate-400 uppercase text-xs mb-1">Endereço Industrial</p>
                            <p className="text-lg text-slate-700">{COMPANY_INFO.address}</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="bg-slate-100 p-4 rounded-2xl text-fabricio-blue"><Icons.Cog /></div>
                        <div>
                            <p className="font-bold text-slate-400 uppercase text-xs mb-1">Atendimento Telefônico</p>
                            <p className="text-lg text-slate-700 font-bold">{COMPANY_INFO.phone}</p>
                        </div>
                    </div>
                    <div className="flex gap-6 items-start">
                        <div className="bg-slate-100 p-4 rounded-2xl text-fabricio-blue"><Icons.Send /></div>
                        <div>
                            <p className="font-bold text-slate-400 uppercase text-xs mb-1">E-mail Corporativo</p>
                            <p className="text-lg text-slate-700">{COMPANY_INFO.email}</p>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-fabricio-yellow/10 border border-fabricio-yellow/20 rounded-3xl">
                    <p className="font-black text-fabricio-blue mb-2 uppercase text-sm">Horário de Funcionamento:</p>
                    <p className="text-slate-700">{COMPANY_INFO.hours}</p>
                </div>
              </div>
              <form className="bg-slate-50 p-12 rounded-[3rem] space-y-6 shadow-2xl border border-white" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <input className="w-full p-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-fabricio-blue outline-none transition-all" placeholder="Seu Nome" />
                    <input className="w-full p-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-fabricio-blue outline-none transition-all" placeholder="Nome da Empresa" />
                </div>
                <input className="w-full p-5 rounded-2xl border border-slate-200 focus:ring-2 focus:ring-fabricio-blue outline-none transition-all" placeholder="Seu E-mail Corporativo" />
                <textarea className="w-full p-5 rounded-2xl border border-slate-200 h-40 focus:ring-2 focus:ring-fabricio-blue outline-none transition-all" placeholder="Detalhes da sua solicitação técnica..."></textarea>
                <button className="w-full bg-fabricio-blue text-white font-black py-5 rounded-2xl hover:bg-blue-900 transition-all shadow-xl uppercase tracking-widest">Enviar Solicitação</button>
              </form>
            </div>
          </div>
        )}

        {currentPage === Page.CAREERS && (
          <div className="bg-white pb-24 animate-fade-in">
            <div className="bg-fabricio-dark py-32 text-center text-white">
              <h1 className="text-5xl font-black uppercase tracking-tight">Trabalhe Conosco</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 mt-20 grid grid-cols-1 lg:grid-cols-3 gap-16">
              <div className="lg:col-span-2 space-y-8">
                <h2 className="text-3xl font-bold text-fabricio-blue flex items-center gap-4"><Icons.Briefcase /> Vagas em Aberto</h2>
                {dynamicVacancies.length > 0 ? dynamicVacancies.map((v) => (
                  <div key={v.id} className="p-8 bg-slate-50 rounded-3xl border border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 hover:border-fabricio-blue transition-colors">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-800">{v.title}</h3>
                      <p className="text-fabricio-blue font-black text-sm uppercase tracking-wider">{v.department}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {v.requirements.map((r,i) => <span key={i} className="text-xs bg-slate-200 text-slate-600 px-3 py-1 rounded-full font-bold">{r}</span>)}
                      </div>
                    </div>
                    <button onClick={() => handleApplyClick(v.id)} className="bg-fabricio-blue text-white px-8 py-3 rounded-xl font-bold hover:bg-blue-900 transition-colors whitespace-nowrap">Candidatar-se</button>
                  </div>
                )) : <p className="p-12 text-center bg-slate-100 rounded-3xl text-slate-400 font-bold">No momento estamos apenas com Banco de Talentos ativo.</p>}
              </div>
              <div id="resume-form" className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-100 h-fit sticky top-24">
                <h3 className="text-2xl font-bold mb-8 text-center text-fabricio-blue uppercase tracking-tight">Enviar Currículo</h3>
                <form onSubmit={handleResumeSubmit} className="space-y-5">
                  <input name="name" required className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-fabricio-blue outline-none" placeholder="Nome Completo" />
                  <input name="email" required type="email" className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-fabricio-blue outline-none" placeholder="E-mail" />
                  <select value={selectedJob} onChange={(e) => setSelectedJob(e.target.value)} className="w-full p-4 rounded-xl border border-slate-300 bg-slate-50 font-bold text-slate-600">
                    <option value="any">Banco de Talentos</option>
                    {dynamicVacancies.map(v => <option key={v.id} value={v.id}>{v.title}</option>)}
                  </select>
                  <div className="space-y-2">
                    <p className="text-xs font-bold text-slate-400 uppercase">Currículo em PDF:</p>
                    <input type="file" required accept=".pdf" className="text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-fabricio-blue file:text-white file:font-bold hover:file:bg-blue-900" />
                  </div>
                  <button type="submit" className="w-full bg-fabricio-blue text-white font-black py-4 rounded-xl hover:bg-blue-900 transition-all flex items-center justify-center gap-3">
                    <Icons.Send /> ENVIAR CANDIDATURA
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {currentPage === Page.ADMIN_LOGIN && (
          <div className="h-[75vh] flex items-center justify-center bg-slate-100 px-4">
            <form onSubmit={handleAdminLogin} className="bg-white p-12 rounded-[3rem] shadow-2xl w-full max-w-md border-t-8 border-fabricio-blue animate-fade-in-up">
              <h2 className="text-3xl font-black mb-8 text-center text-slate-800 tracking-tight text-fabricio-blue uppercase italic">Acesso Administrativo</h2>
              <div className="space-y-6">
                <input required className="w-full p-5 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-fabricio-blue" placeholder="Usuário" value={adminUser} onChange={e => setAdminUser(e.target.value)} />
                <input required type="password" className="w-full p-5 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-fabricio-blue" placeholder="Senha" value={adminPass} onChange={e => setAdminPass(e.target.value)} />
                <button type="submit" className="w-full bg-fabricio-blue text-white font-black py-5 rounded-2xl hover:bg-blue-900 shadow-xl tracking-widest uppercase">Entrar</button>
              </div>
            </form>
          </div>
        )}

        {currentPage === Page.ADMIN_DASHBOARD && isAuthenticated && (
          <div className="bg-slate-100 min-h-screen">
            <div className="bg-fabricio-dark p-8 text-white shadow-xl">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <h1 className="text-3xl font-black italic tracking-tighter">PAINEL DE GESTÃO RH</h1>
                <div className="flex bg-white/10 p-1 rounded-2xl backdrop-blur-md border border-white/10">
                  <button onClick={() => setAdminTab('jobs')} className={`px-8 py-3 rounded-xl font-black transition-all ${adminTab === 'jobs' ? 'bg-fabricio-yellow text-fabricio-blue' : 'text-white hover:bg-white/10'}`}>VAGAS</button>
                  <button onClick={() => setAdminTab('candidates')} className={`px-8 py-3 rounded-xl font-black transition-all ${adminTab === 'candidates' ? 'bg-fabricio-yellow text-fabricio-blue' : 'text-white hover:bg-white/10'}`}>CURRÍCULOS ({submittedResumes.length})</button>
                </div>
                <button onClick={() => {setIsAuthenticated(false); setCurrentPage(Page.HOME)}} className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold transition-colors">SAIR</button>
              </div>
            </div>

            <div className="max-w-7xl mx-auto p-8">
              {adminTab === 'jobs' ? (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                  <div className="lg:col-span-1">
                    <form onSubmit={handleAddVacancy} className="bg-white p-10 rounded-[2.5rem] shadow-sm space-y-4">
                      <h2 className="text-xl font-black mb-4 flex items-center gap-2 text-fabricio-blue underline decoration-fabricio-yellow underline-offset-8">PUBLICAR NOVA VAGA</h2>
                      <input name="title" required placeholder="Título da Vaga (ex: Operador)" className="w-full p-4 border border-slate-200 rounded-xl" />
                      <input name="dept" required placeholder="Departamento" className="w-full p-4 border border-slate-200 rounded-xl" />
                      <textarea name="reqs" required placeholder="Requisitos (um por linha)" className="w-full p-4 border border-slate-200 rounded-xl h-32"></textarea>
                      <button type="submit" className="w-full bg-emerald-600 text-white font-black py-4 rounded-xl hover:bg-emerald-700 shadow-lg uppercase">Adicionar Vaga</button>
                    </form>
                  </div>
                  <div className="lg:col-span-2 space-y-6">
                    <h2 className="text-2xl font-bold text-fabricio-blue italic uppercase tracking-tight">Vagas Ativas no Portal</h2>
                    {dynamicVacancies.map(job => (
                      <div key={job.id} className="bg-white p-6 rounded-3xl flex justify-between items-center shadow-sm border border-slate-200 animate-fade-in-up">
                        <div>
                          <p className="text-xl font-black text-slate-800 tracking-tight">{job.title}</p>
                          <p className="text-xs font-bold text-fabricio-blue uppercase tracking-widest">{job.department}</p>
                        </div>
                        <button 
                          type="button" 
                          onClick={(e) => handleDeleteVacancy(e, job.id)} 
                          className="text-red-500 hover:bg-red-50 p-4 rounded-2xl transition-all active:scale-90"
                        >
                          <Icons.Close />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-slate-200 animate-fade-in">
                  <table className="w-full text-left">
                    <thead className="bg-slate-50 border-b border-slate-200">
                      <tr>
                        <th className="p-6 font-black text-fabricio-blue text-sm uppercase tracking-widest">Candidato / E-mail</th>
                        <th className="p-6 font-black text-fabricio-blue text-sm uppercase tracking-widest">Vaga Pretendida</th>
                        <th className="p-6 font-black text-fabricio-blue text-sm uppercase tracking-widest text-center">Ações</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {submittedResumes.map(cand => (
                        <tr key={cand.id} className="hover:bg-slate-50 transition-colors">
                          <td className="p-6">
                            <div className="font-black text-slate-800 text-lg">{cand.name}</div>
                            <div className="text-sm text-blue-600 font-bold italic">{cand.email}</div>
                            <div className="text-[10px] text-slate-400 mt-1 uppercase">Recebido em: {cand.timestamp}</div>
                          </td>
                          <td className="p-6">
                            <span className="bg-fabricio-blue/10 text-fabricio-blue px-4 py-1 rounded-full text-xs font-black uppercase tracking-tighter italic">{cand.jobTitle}</span>
                          </td>
                          <td className="p-6">
                            <div className="flex justify-center gap-4">
                              <button 
                                type="button" 
                                className="bg-fabricio-blue text-white px-5 py-2 rounded-xl text-xs font-black hover:bg-blue-900 flex items-center gap-2 active:scale-95 transition-transform uppercase"
                                onClick={() => alert('Download do currículo: ' + cand.fileName)}
                              >
                                <Icons.Download /> Baixar
                              </button>
                              <button 
                                type="button" 
                                onClick={(e) => {
                                    e.preventDefault();
                                    if(confirm('Excluir currículo?')) setSubmittedResumes(prev => prev.filter(c => c.id !== cand.id));
                                }}
                                className="bg-red-100 text-red-700 px-5 py-2 rounded-xl text-xs font-black hover:bg-red-600 hover:text-white flex items-center gap-2 active:scale-95 transition-transform uppercase"
                              >
                                <Icons.Trash /> Excluir
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  {submittedResumes.length === 0 && <div className="py-20 text-center text-slate-400 font-bold uppercase tracking-widest">Nenhum currículo disponível.</div>}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer setPage={setCurrentPage} />
      <ChatWidget />
    </div>
  );
};

export default App;
