// ==========================================
// DICIONÁRIO BILÍNGUE ESTRATÉGICO (EN / PT-BR)
// ==========================================
const translations = {
  en: {
    "nav.about": "About",
    "nav.journey": "Journey",
    "nav.projects": "Projects",
    "nav.skills": "Skills",
    "nav.contact": "Contact",

    "hero.badge": "DATA ANALYTICS · BUSINESS INTELLIGENCE · AUTOMATION",
    "hero.subtitle": "Building solutions with purpose.",
    "hero.intro": "I'm an undergraduate student in Systems Analysis and Development at IFBA and a graduate of SENAI's technical program in Systems Development, with experience in corporate IT support, data analytics, and automation.",
    "hero.ctaPrimary": "Explore my projects",
    "hero.ctaSecondary": "Get in touch",
    "hero.trait1": "Curious",
    "hero.trait2": "Analytical",
    "hero.trait3": "Always learning",

    "about.tag": "// 02 · ABOUT",
    "about.title": "Connecting Data, Technology & Impact.",
    "about.subtitle": "Bridging analytical inquiry with structured software engineering to build purposeful data pipelines and practical operational tools.",
    "about.pillar1.title": "Academic Foundation",
    "about.pillar1.desc": "Rooted in Systems Analysis & Development at <strong>IFBA</strong> alongside formal technical graduation in Systems Development at <strong>SENAI</strong>, grounding my work in solid algorithmic logic, relational models, and software standards.",
    "about.pillar2.title": "Analytical Focus",
    "about.pillar2.desc": "Dedicated to relational data modeling, Power BI dashboard architecture, and Business Intelligence. I transform dispersed figures into transparent executive metrics and meaningful operational stories.",
    "about.pillar3.title": "Process & Automation",
    "about.pillar3.desc": "Continuously exploring how automation scripts, databases, and IT systems eliminate friction. From routine PowerShell automation to database query pipelines, I build solutions that save operational time.",

    "journey.tag": "// 03 · MY JOURNEY",
    "journey.title": "Career & Education Timeline",
    "journey.subtitle": "A unified chronological overview of academic milestones and professional experience.",
    "journey.item1.type": "EDUCATION",
    "journey.item1.grade": "Grade: 10/10",
    "journey.item1.role": "SENAI Camaçari · Technical Education in Systems Development",
    "journey.item1.desc": "Hands-on foundational training covering full-stack concepts, database normalization, IT infrastructure, and team software projects. Developed InfoBairro as capstone project with a final grade of 10/10.",
    "journey.item2.type": "EXPERIENCE",
    "journey.item2.badge": "Internship",
    "journey.item2.role": "IT Intern · SENAI",
    "journey.item2.desc": "Assisted with hardware, software, network support, preventive maintenance, and IT inventory management. Developed PowerShell scripting for shared workstations, JavaScript automation for scheduling slots, and proposed an initial Power BI prototype for Occupational Health & Safety indicators.",
    "journey.item3.type": "EXPERIENCE",
    "journey.item3.badge": "Current Role",
    "journey.item3.date": "Jun 2026 – Present",
    "journey.item3.role": "IT Support Intern · Continental AG",
    "journey.item3.desc": "Provide Level 1 & Level 2 IT support across administrative and manufacturing environments. Support IT inventory and corporate spreadsheets, investigate Power BI connectivity issues involving database drivers and ODBC, document troubleshooting procedures, and contribute to workstation automation scripts.",
    "journey.item4.type": "EDUCATION",
    "journey.item4.badge": "Higher Education Degree",
    "journey.item4.date": "Aug 2026 – 2029 (Expected)",
    "journey.item4.role": "Federal Institute of Bahia (IFBA) · Systems Analysis and Development",
    "journey.item4.desc": "Higher education (Análise e Desenvolvimento de Sistemas) with an intensive focus on software engineering, database architectures, distributed systems design, data analysis methodologies, and advanced algorithmic problem solving.",

    "projects.tag": "// 04 · PROJECTS",
    "projects.title": "Featured Projects & Case Studies",
    "projects.subtitle": "In-depth look into analytical thinking, technical development, and structured problem-solving.",
    "projects.common.objectiveTitle": "The Objective",
    "projects.common.myContribution": "My Contribution",
    "projects.common.techUsed": "Technologies Used",

    "projects.p1.tag": "ACADEMIC CAPSTONE (TCC) · GRADE 10/10",
    "projects.p1.subtag": "Urban Intelligence",
    "projects.p1.statusBadge": "In Active Development",
    "projects.p1.liveBtn": "Visit InfoBairro Website",
    "projects.p1.title": "InfoBairro — Urban Intelligence Platform",
    "projects.p1.objective": "Consolidate information from different regions into an analytical framework capable of presenting territorial indicators, comparative rankings, and historical assessment trends, identifying critical areas in mobility, infrastructure, healthcare, leisure, and other urban services.",
    "projects.p1.pipelineTitle": "Development Pipeline — Integrated Visual Process",
    "projects.p1.s1.title": "Database Integration",
    "projects.p1.s1.desc": "Direct consumption of relational tables hosted on AWS RDS inside Power BI.",
    "projects.p1.s2.title": "Data Modeling",
    "projects.p1.s2.desc": "Structuring relationships, schemas, and dimensional tables directly in Power BI.",
    "projects.p1.s3.title": "Data Preparation",
    "projects.p1.s3.desc": "Cleansing, data typing, and query routines via Power Query alongside DAX measures.",
    "projects.p1.s4.title": "Business Intelligence",
    "projects.p1.s4.desc": "Developing interactive Power BI dashboards to support public-sector and community decision-makers.",
    "projects.p1.c1": "<strong>AWS RDS Database Connection:</strong> Connected and consumed relational tables hosted in cloud directly inside Power BI.",
    "projects.p1.c2": "<strong>Data Modeling in Power BI:</strong> Structured relationships, schemas, and cardinalities between urban entities directly in Power BI.",
    "projects.p1.c3": "<strong>Data Cleansing & DAX Measures:</strong> Data hygiene and typing via Power Query, alongside analytical measures in DAX for averages and rankings.",
    "projects.p1.c4": "<strong>Dashboard Design & Project Tracking:</strong> Designed intuitive visual reporting and coordinated deliverables using Jira Agile.",
    "projects.p1.previewLabel": "InfoBairro Intelligence · Real System Header",
    "projects.p1.previewFooter": "Real system interface banner · InfoBairro v1.3.0 Live Sync Panel",

    "projects.p2.tag": "PROFESSIONAL EXPERIENCE · SENAI",
    "projects.p2.subtag": "Analytics & ETL",
    "projects.p2.badgeFicticio": "Conceptual Prototype · Simulated Data",
    "projects.p2.status": "Study & Analytical Validation Environment",
    "projects.p2.title": "SafeBI — Occupational Safety Intelligence Dashboard",
    "projects.p2.objective": "Structure a Business Intelligence solution to evaluate organizational safety culture perception using NOSACQ-50 dimensions and Hudson's Maturity Model (16 anonymous survey questions on a 1-5 Likert scale, focused on proactive risk mitigation).",
    "projects.p2.indicatorsTitle": "Analytical Indicators & NOSACQ-50 / Hudson Framework",
    "projects.p2.kpi1": "Overall Mean",
    "projects.p2.kpi1.sub": "Continuous scale 1.0 to 5.0",
    "projects.p2.kpi2": "Predominant Score",
    "projects.p2.kpi2.sub": "Statistical mode of sample",
    "projects.p2.kpi3": "Sample Respondents",
    "projects.p2.kpi3.sub": "Controlled sample for rule and formula validation",
    "projects.p2.kpi4": "Hudson % Breakdown",
    "projects.p2.kpi4.sub": "Reactive (27%) · Pathological (21%) · Proactive (21%) · Calculative (17%) · Generative (15%)",
    "projects.p2.scaleTitle": "Hudson Maturity Model (Stages 1 to 5) & NOSACQ-50 Framework",
    "projects.p2.nosacqDesc": "The <strong>NOSACQ-50</strong> is an international instrument for diagnosing organizational safety climate, evaluating leadership commitment and worker perception, mapped across the 5 maturity levels of Hudson's scale.",
    "projects.p2.stage1.title": "1. Pathological",
    "projects.p2.stage1.desc": "Safety only matters if we get caught.",
    "projects.p2.stage2.title": "2. Reactive",
    "projects.p2.stage2.desc": "Actions taken only after incidents occur.",
    "projects.p2.stage3.title": "3. Calculative",
    "projects.p2.stage3.desc": "Formal procedures and audit compliance.",
    "projects.p2.stage4.title": "4. Proactive",
    "projects.p2.stage4.desc": "Leadership anticipates and prevents hazards.",
    "projects.p2.stage5.title": "5. Generative",
    "projects.p2.stage5.desc": "Safety is an intrinsic core value in all actions.",
    "projects.p2.view1.title": "HUDSON CURVE X NOSACQ-50",
    "projects.p2.view1.badge": "Overall Mean: 2.81",
    "projects.p2.view1.desc": "Analytical maturity evolution across subdimensions (Commitment, Justice, Involvement, Communication, Trust, and Production).",
    "projects.p2.view2.title": "HUDSON DISTRIBUTION & SUBDIMENSIONS",
    "projects.p2.view2.badge": "Donut Chart & Drill-down",
    "projects.p2.view2.desc": "Percentage proportion across safety maturity stages (Reactive 27%, Pathological 21%, Proactive 21%, Calculative 17%, Generative 15%).",
    "projects.p2.watermark": "[ SafeBI · Power BI Interactive Prototype · SENAI Experience · Conceptual Model with Simulated Data ]",

    "skills.tag": "// 05 · TECHNICAL SKILLS",
    "skills.title": "Tools & Competencies",
    "skills.subtitle": "Practical toolkit across analytics, data modeling, programming, and IT support.",
    "skills.cat1.title": "Data Analytics & BI",
    "skills.cat1.desc": "Crafting expressive dashboards, modeling relational schemas, building ETL routines, and defining actionable business metrics.",
    "skills.cat2.title": "Databases & Cloud",
    "skills.cat2.desc": "Normalized schema design, query optimization, cloud database hosting, and structured workflow analysis.",
    "skills.cat3.title": "Programming & Automation",
    "skills.cat3.desc": "Building scripts that automate redundant administrative tasks and developing structured logic for applications.",
    "skills.cat4.title": "Systems, Support & Methods",
    "skills.cat4.desc": "Enterprise technical assistance, Active Directory management, ODBC connectivity troubleshooting, and Agile project governance.",

    "contact.tag": "// 06 · CONTACT",
    "contact.title": "Let's connect.",
    "contact.lead": "I'm open and actively interested in internship opportunities in Data Analytics, Business Intelligence, and related tech roles.",
    "contact.subtext": "Feel free to reach out to discuss collaborative projects, entry-level opportunities, or technical inquiries.",
    "contact.emailTitle": "E-mail",
    "contact.btnDirect": "Direct Email",
    "contact.btnBackTop": "Back to Top ↑",
    "footer.text": "© 2026 Enya Arruda · Data Analytics & Business Intelligence Portfolio."
  },

  pt: {
    "nav.about": "Sobre",
    "nav.journey": "Trajetória",
    "nav.projects": "Projetos",
    "nav.skills": "Habilidades",
    "nav.contact": "Contato",

    "hero.badge": "DATA ANALYTICS · BUSINESS INTELLIGENCE · AUTOMATION",
    "hero.subtitle": "Construindo soluções com propósito.",
    "hero.intro": "Estudante de Análise e Desenvolvimento de Sistemas no IFBA e formada no curso técnico de Desenvolvimento de Sistemas pelo SENAI, com experiência em suporte corporativo de TI, Data Analytics e automação.",
    "hero.ctaPrimary": "Explorar meus projetos",
    "hero.ctaSecondary": "Entre em contato",
    "hero.trait1": "Curiosa",
    "hero.trait2": "Analítica",
    "hero.trait3": "Em constante aprendizado",

    "about.tag": "// 02 · SOBRE",
    "about.title": "Conectando Dados, Tecnologia & Impacto.",
    "about.subtitle": "Unindo investigação analítica e engenharia de software estruturada para criar pipelines de dados com propósito e ferramentas operacionais práticas.",
    "about.pillar1.title": "Base Acadêmica",
    "about.pillar1.desc": "Fundamentada em Análise e Desenvolvimento de Sistemas no <strong>IFBA</strong> em paralelo à formação técnica em Desenvolvimento de Sistemas pelo <strong>SENAI</strong>, consolidando sólida lógica algorítmica, modelos relacionais e padrões de software.",
    "about.pillar2.title": "Foco Analítico",
    "about.pillar2.desc": "Dedicada à modelagem de dados relacionais, arquitetura de dashboards em Power BI e Business Intelligence. Transformo informações dispersas em métricas executivas transparentes e narrativas operacionais consistentes.",
    "about.pillar3.title": "Processos & Automação",
    "about.pillar3.desc": "Explorando continuamente como rotinas de automação, bancos de dados e ecossistemas de TI eliminam gargalos. Da automação operacional em PowerShell a consultas otimizadas, crio soluções que poupam tempo produtivo.",

    "journey.tag": "// 03 · MINHA TRAJETÓRIA",
    "journey.title": "Linha do Tempo · Carreira & Formação",
    "journey.subtitle": "Visão cronológica unificada de marcos acadêmicos e experiência profissional consolidada.",
    "journey.item1.type": "EDUCAÇÃO",
    "journey.item1.grade": "Nota: 10/10",
    "journey.item1.role": "SENAI Camaçari · Curso Técnico em Desenvolvimento de Sistemas",
    "journey.item1.desc": "Formação prática e intensiva abordando conceitos full-stack, normalização de bancos de dados, infraestrutura de TI e projetos ágeis em equipe. Criação do InfoBairro como projeto de conclusão com nota 10/10.",
    "journey.item2.type": "EXPERIÊNCIA",
    "journey.item2.badge": "Estágio",
    "journey.item2.role": "Estagiária de TI · SENAI",
    "journey.item2.desc": "Suporte a hardware, software, redes, manutenção preventiva e controle de inventário de TI. Desenvolvimento de scripts PowerShell para estações compartilhadas, automação JavaScript para agendamento de bancadas e proposta de protótipo em Power BI para indicadores de Saúde e Segurança do Trabalho.",
    "journey.item3.type": "EXPERIÊNCIA",
    "journey.item3.badge": "Cargo Atual",
    "journey.item3.date": "Jun 2026 – Presente",
    "journey.item3.role": "Estagiária de Suporte em TI · Continental AG",
    "journey.item3.desc": "Atuação no suporte de TI N1 e N2 em ambientes corporativos e produtivos. Apoio ao inventário de TI e planilhas gerenciais, investigação de conectividade em Power BI envolvendo drivers de banco e ODBC, documentação técnica de procedimentos e scripts de automação para estações de trabalho.",
    "journey.item4.type": "EDUCAÇÃO",
    "journey.item4.badge": "Ensino Superior",
    "journey.item4.date": "Ago 2026 – 2029 (Previsão)",
    "journey.item4.role": "Instituto Federal da Bahia (IFBA) · Análise e Desenvolvimento de Sistemas",
    "journey.item4.desc": "Graduação tecnológica com foco abrangente em engenharia de software, arquitetura de banco de dados, sistemas distribuídos, metodologias analíticas e resolução avançada de problemas computacionais.",

    "projects.tag": "// 04 · PROJETOS",
    "projects.title": "Projetos em Destaque & Estudos de Caso",
    "projects.subtitle": "Visão detalhada do raciocínio analítico, desenvolvimento técnico e resolução estruturada de problemas.",
    "projects.common.objectiveTitle": "O Objetivo",
    "projects.common.myContribution": "Minha Contribuição",
    "projects.common.techUsed": "Tecnologias Utilizadas",

    "projects.p1.tag": "TRABALHO DE CONCLUSÃO DE CURSO (TCC) · NOTA 10/10",
    "projects.p1.subtag": "Inteligência Urbana",
    "projects.p1.statusBadge": "Em Desenvolvimento Contínuo",
    "projects.p1.liveBtn": "Visitar Site do InfoBairro",
    "projects.p1.title": "InfoBairro — Plataforma de Inteligência Urbana",
    "projects.p1.objective": "Consolidar informações de diferentes regiões em uma estrutura analítica capaz de apresentar indicadores territoriais, rankings comparativos e tendências históricas de avaliação, identificando áreas críticas em mobilidade, infraestrutura, saúde, lazer e outros serviços urbanos.",
    "projects.p1.pipelineTitle": "Pipeline de Desenvolvimento — Processo Visual Integrado",
    "projects.p1.s1.title": "Integração do Banco de Dados",
    "projects.p1.s1.desc": "Consumo direto de tabelas relacionais hospedadas em nuvem na AWS RDS dentro do Power BI.",
    "projects.p1.s2.title": "Modelagem de Dados",
    "projects.p1.s2.desc": "Estruturação de relacionamentos, esquemas e tabelas dimensionais diretamente no Power BI.",
    "projects.p1.s3.title": "Preparação dos Dados",
    "projects.p1.s3.desc": "Limpeza, tipagem e consultas via Power Query em conjunto com medidas analíticas em DAX.",
    "projects.p1.s4.title": "Business Intelligence",
    "projects.p1.s4.desc": "Desenvolvimento de dashboards interativos no Power BI para apoiar tomadores de decisão públicos e comunitários.",
    "projects.p1.c1": "<strong>Conexão ao Banco AWS RDS:</strong> Conexão e consumo das tabelas relacionais hospedadas em nuvem diretamente dentro do Power BI.",
    "projects.p1.c2": "<strong>Modelagem de Dados no Power BI:</strong> Estruturação dos relacionamentos, esquemas e cardinalidades entre as entidades urbanas no próprio Power BI.",
    "projects.p1.c3": "<strong>Preparação e Medidas DAX:</strong> Higienização e tipagem com Power Query, além da criação de medidas analíticas em DAX para médias e rankings.",
    "projects.p1.c4": "<strong>Design de Dashboards & Acompanhamento:</strong> Construção de relatórios visuais intuitivos e acompanhamento de entregas pelo Jira.",
    "projects.p1.previewLabel": "InfoBairro Intelligence · Header Real do Sistema",
    "projects.p1.previewFooter": "Banner de interface real do sistema · Painel de sincronização ativa InfoBairro v1.3.0",

    "projects.p2.tag": "EXPERIÊNCIA PROFISSIONAL · SENAI",
    "projects.p2.subtag": "Analytics & ETL",
    "projects.p2.badgeFicticio": "Protótipo Conceitual · Dados Fictícios",
    "projects.p2.status": "Ambiente de Estudo & Validação Analítica",
    "projects.p2.title": "SafeBI — Dashboard de Inteligência em Segurança do Trabalho",
    "projects.p2.objective": "Estruturar solução de BI para analisar a percepção de segurança dos colaboradores utilizando as dimensões do questionário NOSACQ-50 e a escala de maturidade de Hudson (16 questões anônimas em escala Likert de 1 a 5, visando prevenção ativa de riscos).",
    "projects.p2.indicatorsTitle": "Indicadores Analíticos & Framework NOSACQ-50 / Hudson",
    "projects.p2.kpi1": "Média Geral",
    "projects.p2.kpi1.sub": "Escala contínua 1.0 a 5.0",
    "projects.p2.kpi2": "Nota Predominante",
    "projects.p2.kpi2.sub": "Moda estatística da amostra",
    "projects.p2.kpi3": "Respondentes Amostrais",
    "projects.p2.kpi3.sub": "Amostra controlada para validação de fórmulas",
    "projects.p2.kpi4": "Distribuição Hudson %",
    "projects.p2.kpi4.sub": "Reativo (27%) · Patológico (21%) · Proativo (21%) · Calculativo (17%) · Generativo (15%)",
    "projects.p2.scaleTitle": "Escala de Maturidade de Hudson (Estágios 1 a 5) & Framework NOSACQ-50",
    "projects.p2.nosacqDesc": "O <strong>NOSACQ-50</strong> é um instrumento internacional para diagnóstico de clima de segurança, avaliando o comprometimento da liderança e a percepção dos colaboradores, mapeado nos 5 níveis de maturidade da escala de Hudson.",
    "projects.p2.stage1.title": "1. Patológico",
    "projects.p2.stage1.desc": "Segurança só importa se formos pegos.",
    "projects.p2.stage2.title": "2. Reativo",
    "projects.p2.stage2.desc": "Ações tomadas apenas após incidentes.",
    "projects.p2.stage3.title": "3. Calculativo",
    "projects.p2.stage3.desc": "Sistemas formais e auditorias de dados.",
    "projects.p2.stage4.title": "4. Proativo",
    "projects.p2.stage4.desc": "Liderança antecipa e previne perigos.",
    "projects.p2.stage5.title": "5. Generativo",
    "projects.p2.stage5.desc": "A segurança é intrínseca a tudo o que fazemos.",
    "projects.p2.view1.title": "CURVA DE HUDSON X NOSACQ-50",
    "projects.p2.view1.badge": "Média Geral: 2,81",
    "projects.p2.view1.desc": "Visão analítica demonstrando evolução de maturidade por subdimensão (Comprometimento, Justiça, Envolvimento, Comunicação, Confiança e Produção).",
    "projects.p2.view2.title": "DISTRIBUIÇÃO HUDSON & SUBDIMENSÕES",
    "projects.p2.view2.badge": "Donut Chart & Drill-down",
    "projects.p2.view2.desc": "Proporção percentual dos estágios de segurança (Reativo 27%, Patológico 21%, Proativo 21%, Calculativo 17%, Generativo 15%) e detalhamento de subdimensões.",
    "projects.p2.watermark": "[ SafeBI · Protótipo Interativo em Power BI · Experiência SENAI · Modelo Conceitual com Dados Fictícios ]",

    "skills.tag": "// 05 · HABILIDADES TÉCNICAS",
    "skills.title": "Ferramentas & Competências",
    "skills.subtitle": "Conjunto prático de competências em análise, modelagem de dados, automação e suporte a sistemas.",
    "skills.cat1.title": "Data Analytics & BI",
    "skills.cat1.desc": "Construção de relatórios e painéis dinâmicos, modelagem dimensional e relacional, pipelines de ETL e definição de métricas operacionais.",
    "skills.cat2.title": "Bancos de Dados & Nuvem",
    "skills.cat2.desc": "Estruturação de bancos de dados normalizados, elaboração de queries otimizadas, gestão em nuvem e documentação de fluxos de dados.",
    "skills.cat3.title": "Programação & Automação",
    "skills.cat3.desc": "Desenvolvimento de scripts para eliminação de tarefas manuais e construção de rotinas lógicas estruturadas para aplicações.",
    "skills.cat4.title": "Sistemas, Suporte & Métodos",
    "skills.cat4.desc": "Suporte técnico em ambiente empresarial, administração em Active Directory, diagnóstico de conectividade ODBC e gestão ágil de projetos.",

    "contact.tag": "// 06 · CONTATO",
    "contact.title": "Vamos conversar.",
    "contact.lead": "Estou aberta e com interesse ativo em oportunidades de estágio em Data Analytics, Business Intelligence e áreas correlatas de tecnologia.",
    "contact.subtext": "Sinta-se à vontade para enviar uma mensagem sobre projetos colaborativos, posições de entrada ou conexões técnicas.",
    "contact.emailTitle": "E-mail",
    "contact.btnDirect": "Enviar E-mail",
    "contact.btnBackTop": "Voltar ao Início ↑",
    "footer.text": "© 2026 Enya Arruda · Portfólio de Data Analytics & Business Intelligence."
  }
};

function applyLanguage(lang) {
  const selected = (lang === 'pt') ? 'pt' : 'en';
  document.documentElement.lang = selected === 'pt' ? 'pt-BR' : 'en';

  const btnEn = document.getElementById('langBtnEn');
  const btnPt = document.getElementById('langBtnPt');
  if (btnEn && btnPt) {
    if (selected === 'pt') {
      btnPt.classList.add('active');
      btnEn.classList.remove('active');
    } else {
      btnEn.classList.add('active');
      btnPt.classList.remove('active');
    }
  }

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[selected] && translations[selected][key]) {
      el.innerHTML = translations[selected][key];
    }
  });

  localStorage.setItem('enya_lang', selected);
}

document.addEventListener('DOMContentLoaded', () => {
  const themeBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const mobileBtn = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const langBtnEn = document.getElementById('langBtnEn');
  const langBtnPt = document.getElementById('langBtnPt');

  // Inicializar idioma
  const savedLang = localStorage.getItem('enya_lang') || 'en';
  applyLanguage(savedLang);

  if (langBtnEn) langBtnEn.addEventListener('click', () => applyLanguage('en'));
  if (langBtnPt) langBtnPt.addEventListener('click', () => applyLanguage('pt'));

  // Inicializar e alternar tema
  const savedTheme = localStorage.getItem('portfolio-theme');
  if (savedTheme === 'light') {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    if (themeIcon) themeIcon.textContent = '☀️';
  } else {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
    if (themeIcon) themeIcon.textContent = '🌙';
  }

  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      const isLight = document.body.classList.contains('light-theme');
      if (isLight) {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
        if (themeIcon) themeIcon.textContent = '🌙';
        localStorage.setItem('portfolio-theme', 'dark');
      } else {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
        if (themeIcon) themeIcon.textContent = '☀️';
        localStorage.setItem('portfolio-theme', 'light');
      }
    });
  }

  // Menu mobile
  if (mobileBtn && mobileDrawer) {
    mobileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      mobileDrawer.classList.toggle('active');
    });
  }

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => mobileDrawer && mobileDrawer.classList.remove('active'));
  });

  document.addEventListener('click', (e) => {
    if (mobileDrawer && mobileDrawer.classList.contains('active')) {
      if (!mobileDrawer.contains(e.target) && mobileBtn && !mobileBtn.contains(e.target)) {
        mobileDrawer.classList.remove('active');
      }
    }
  });

  // Scroll Reveal com fallback
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  if (!prefersReducedMotion && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
});