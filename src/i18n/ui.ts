export const languages = {
  en: 'EN',
  es: 'ES',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Meta
    'meta.title': 'Jarrison Cano — Software Engineer',
    'meta.description':
      'Full-stack Software Engineer. 60+ open source contributions. Building production platforms from Medellín for the world.',

    // Nav
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.work': 'WORK',
    'nav.contact': 'CONTACT',

    // Home — Hero
    'home.hero.subtitle': 'Software Engineer',
    'home.hero.description':
      '100+ engineers across 4 countries use what my team builds at Dash Energy every day. Before that, 400+ restaurants in Madrid ran on software I shipped from scratch. I work across the full stack, have contributed to 60+ open source projects, and I\'m an active part of the developer community across the Spanish-speaking world.',

    // Home — Experience
    'home.experience.heading': '01 / Professional Experience',
    'home.experience.dash.role': 'SOFTWARE ENGINEER',
    'home.experience.dash.period': '2022 — PRESENT',
    'home.experience.dash.description':
      'Building a production forecasting platform for oil wells — decline models, statistical analysis, economic calculations, multi-currency and multi-unit support. Leading the frontend team and integrating cross-platform with Kappa Engineering (France & USA). The platform serves 100+ engineers across Argentina, Brazil, Colombia, and the USA. Also built the complete frontend for SimplG, an LPG plant simulator for an allied company, using React Flow for interactive node-based diagrams.',
    'home.experience.quantil.role': 'FRONTEND DEVELOPER (CONTRACT)',
    'home.experience.quantil.period': '2023 — 2024',
    'home.experience.quantil.description':
      'Built a document search application for a major energy sector client. Thousands of vectorized judicial documents, filterable by ID, tax number, city, and custom criteria. React.js frontend on Microsoft Azure infrastructure.',
    'home.experience.waco.role': 'SOFTWARE ENGINEER',
    'home.experience.waco.period': '2022',
    'home.experience.waco.description':
      'Built GourmetApp from scratch — a TikTok-style restaurant menu platform that grew to 400+ restaurants across Madrid. Handled storage optimization and low-latency content delivery on AWS and Google Cloud. Led a team of 4 from idea to production. Also maintained e-commerce platforms for supermarket chains.',
    'home.experience.atalaya.role': 'SOFTWARE DEVELOPER',
    'home.experience.atalaya.period': '2021 — 2022',
    'home.experience.atalaya.description':
      "Built a cross-platform cargo tracking app (React + React Native) used across Colombia. Integrated the government's RNDC API to automate cargo dispatch manifests, replacing a fully manual process with automated regulatory compliance.",

    // Home — Projects
    'home.projects.heading': '02 / Featured Projects',
    'home.projects.rundev.description':
      'A PWA I built and use daily as my personal running coach. Claude Sonnet 4 generates weekly training plans adapted to my performance, upcoming races, and recovery needs. Strava and Garmin sync automatically — I can even log runs by taking a photo of my watch (Claude Vision extracts the metrics). Includes weekly AI retrospectives, automatic periodization with tapering, progression charts with linear regression, and push notifications. 9 Edge Functions, 8 database tables, fully installable offline.',
    'home.projects.rundev.cta': 'Visit rundev.pages.dev',
    'home.projects.oss.heading': 'Open Source Contributions',

    // Home — Skills
    'home.skills.heading': '03 / Technical Stack',
    'home.skills.languages': 'Languages & Frameworks',
    'home.skills.infrastructure': 'Infrastructure & Tools',
    'home.skills.expert': 'Expert',
    'home.skills.advanced': 'Advanced',
    'home.skills.proficient': 'Proficient',

    // About — Hero
    'about.hero.label': 'Biography \u00B7 Manifest',
    'about.hero.title': 'I build products, not just features.',
    'about.hero.p1':
      "I'm Jarrison Cano. I've been working professionally since I was 18. I take products from zero to production — frontend, backend, infrastructure, CI/CD. I've done it across energy, food tech, logistics, and fintech. I care as much about why we're building something as how.",
    'about.hero.p2':
      "Outside of work, I've contributed to 60+ open source projects, including La Velada Web and community platforms in the Afordin ecosystem. I'm part of several developer organizations across the Spanish-speaking world. I believe the best engineers grow by building in public and giving back to the ecosystem that taught them.",

    // About — Philosophy
    'about.philosophy.label': 'Technical Philosophy',
    'about.philosophy.01.title': 'Ownership Over Tickets',
    'about.philosophy.01.description':
      "I don't wait for someone to define the scope. From GourmetApp (400+ restaurants in Madrid) to Dash Energy (100+ engineers across 4 countries), I've taken projects from an empty repo to production — making architecture, product, and client-facing decisions along the way. If there's a manual step in a workflow, it's a bug.",
    'about.philosophy.02.title': 'Performance Where It Counts',
    'about.philosophy.02.description':
      'I specialize in interfaces that handle heavy data without degrading the experience. At Dash Energy, I optimized the frontend multiple times to render gigabytes of well production data — virtualization, lazy loading, intelligent pagination. The goal is always: the user never notices the complexity.',
    'about.philosophy.03.title': 'Open Source by Nature',
    'about.philosophy.03.description':
      '60+ open source contributions, active in community projects, and member of several developer organizations. I work daily across time zones with teams in France, the US, Argentina, and Colombia. I believe the best code is written in the open, and the best teams are the ones that share what they learn.',
    'about.philosophy.suffix': 'Philosophy',

    // About — Competencies
    'about.competencies.label': 'Core Competencies',
    'about.competencies.frontend': 'Frontend',
    'about.competencies.backend': 'Backend',
    'about.competencies.cloud': 'Cloud & Infrastructure',
    'about.competencies.data': 'Data',
    'about.competencies.orchestration': 'Orchestration',
    'about.competencies.specialized': 'Specialized',

    // About — Education
    'about.education.label': 'Academic Foundation',
    'about.education.degree1': 'Ingeniería en Software (B.Eng.)',
    'about.education.school1': 'Tecnológico de Antioquia (TdeA)',
    'about.education.period1': '2023 — PRESENT (8th Semester)',
    'about.education.details1': '',
    'about.education.degree2': 'Tecnología en Diseño y Desarrollo Web',
    'about.education.school2': 'Tecnológico de Antioquia (TdeA)',
    'about.education.period2': '2020 — 2024',
    'about.education.details2': 'Graduated',

    // About — CTA
    'about.cta.text':
      'Currently building high-performance platforms for the energy industry, exploring AI-driven coaching with wearable data, and contributing to open source.',
    'about.cta.link': 'Get In Touch',

    // Work
    'work.label': 'Work',
    'work.title': 'Coming Soon',
    'work.description':
      'A curated collection of projects and case studies is in progress. Check back soon.',

    // Contact — Hero
    'contact.hero.label': 'Get In Touch',
    'contact.hero.title': "Let's build something.",
    'contact.hero.description':
      'Have a product that needs building from scratch? A frontend drowning in data? A team that needs a developer who owns the whole stack? I want to hear about it.',

    // Contact — Form
    'contact.form.name': 'Your Name',
    'contact.form.namePlaceholder': 'Type here...',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'name@example.com',
    'contact.form.inquiry': 'Inquiry',
    'contact.form.inquiryPlaceholder': 'Tell me about your project...',
    'contact.form.submit': 'Send Message',

    // Contact — Direct Channels
    'contact.channels.label': 'Direct Channels',
    'contact.channels.responseLatency': 'Response Time:',
    'contact.channels.responseTime': '~24 Hours',
    'contact.channels.operatingFrom': 'Based In:',
    'contact.channels.location': 'Medellín, CO (GMT-5)',

    // Footer
    'footer.rights': '\u00A9 2026 Jarrison Cano. All rights reserved.',
  },

  es: {
    // Meta
    'meta.title': 'Jarrison Cano — Ingeniero de Software',
    'meta.description':
      'Ingeniero de Software fullstack. 60+ contribuciones open source. Desde Medellín para el mundo.',

    // Nav
    'nav.home': 'INICIO',
    'nav.about': 'SOBRE MÍ',
    'nav.work': 'TRABAJO',
    'nav.contact': 'CONTACTO',

    // Home — Hero
    'home.hero.subtitle': 'Ingeniero de Software',
    'home.hero.description':
      'Lo que mi equipo construye en Dash Energy lo usan más de 100 ingenieros en 4 países, cada día. Antes, construí desde cero una app que adoptaron más de 400 restaurantes en Madrid. Soy fullstack, he contribuido a 60+ proyectos open source y soy parte activa de la comunidad developer hispanohablante.',

    // Home — Experience
    'home.experience.heading': '01 / Experiencia Profesional',
    'home.experience.dash.role': 'INGENIERO DE SOFTWARE',
    'home.experience.dash.period': '2022 — PRESENTE',
    'home.experience.dash.description':
      'Construyendo una plataforma de pronóstico de producción para pozos petroleros — modelos de declinación, análisis estadístico, cálculos económicos, soporte multi-moneda y multi-unidad. Liderando el equipo frontend e integrando cross-platform con Kappa Engineering (Francia y EE.UU.). La plataforma sirve a más de 100 ingenieros en Argentina, Brasil, Colombia y EE.UU. También construí el frontend completo de SimplG, un simulador de plantas de GLP para una empresa aliada, usando React Flow para diagramas interactivos basados en nodos.',
    'home.experience.quantil.role': 'DESARROLLADOR FRONTEND (CONTRATO)',
    'home.experience.quantil.period': '2023 — 2024',
    'home.experience.quantil.description':
      'Construí una aplicación de búsqueda de documentos para un cliente importante del sector energético. Miles de documentos judiciales vectorizados, filtrables por cédula, NIT, ciudad y criterios personalizados. Frontend en React.js sobre infraestructura de Microsoft Azure.',
    'home.experience.waco.role': 'INGENIERO DE SOFTWARE',
    'home.experience.waco.period': '2022',
    'home.experience.waco.description':
      'Construí GourmetApp desde cero — una plataforma estilo TikTok para menús de restaurantes que creció a más de 400 restaurantes en Madrid. Manejé optimización de almacenamiento y entrega de contenido de baja latencia en AWS y Google Cloud. Lideré un equipo de 4 desde la idea hasta producción. También mantuve plataformas e-commerce para cadenas de supermercados.',
    'home.experience.atalaya.role': 'DESARROLLADOR DE SOFTWARE',
    'home.experience.atalaya.period': '2021 — 2022',
    'home.experience.atalaya.description':
      'Construí una app multiplataforma de rastreo de carga (React + React Native) usada en toda Colombia. Integré la API gubernamental RNDC para automatizar manifiestos de despacho de carga, reemplazando un proceso completamente manual con cumplimiento regulatorio automatizado.',

    // Home — Projects
    'home.projects.heading': '02 / Proyectos Destacados',
    'home.projects.rundev.description':
      'Una PWA que construí y uso diariamente como mi entrenador personal de running. Claude Sonnet 4 genera planes semanales adaptados a mi rendimiento, carreras próximas y necesidades de recuperación. Strava y Garmin se sincronizan automáticamente — puedo registrar entrenamientos tomando una foto de mi reloj (Claude Vision extrae las métricas). Incluye retrospectivas semanales con IA, periodización automática con tapering, gráficas de progresión con regresión lineal y push notifications. 9 Edge Functions, 8 tablas en base de datos, instalable y offline.',
    'home.projects.rundev.cta': 'Visitar rundev.pages.dev',
    'home.projects.oss.heading': 'Contribuciones Open Source',

    // Home — Skills
    'home.skills.heading': '03 / Stack Técnico',
    'home.skills.languages': 'Lenguajes & Frameworks',
    'home.skills.infrastructure': 'Infraestructura & Herramientas',
    'home.skills.expert': 'Experto',
    'home.skills.advanced': 'Avanzado',
    'home.skills.proficient': 'Competente',

    // About — Hero
    'about.hero.label': 'Biografía \u00B7 Manifiesto',
    'about.hero.title': 'Construyo productos, no solo features.',
    'about.hero.p1':
      'Soy Jarrison Cano. Trabajo profesionalmente desde los 18 años. Llevo productos de cero a producción — frontend, backend, infraestructura, CI/CD. Lo he hecho en energía, food tech, logística y fintech. Me importa tanto el por qué construimos algo como el cómo.',
    'about.hero.p2':
      'Fuera del trabajo, he contribuido a 60+ proyectos open source, incluyendo La Velada Web y plataformas comunitarias del ecosistema Afordin. Soy parte de varias organizaciones de desarrolladores en comunidades hispanohablantes. Creo que los mejores ingenieros crecen construyendo en público y devolviendo al ecosistema que les enseñó.',

    // About — Philosophy
    'about.philosophy.label': 'Filosofía Técnica',
    'about.philosophy.01.title': 'Ownership Sobre Tickets',
    'about.philosophy.01.description':
      'No espero a que alguien defina el alcance. Desde GourmetApp (más de 400 restaurantes en Madrid) hasta Dash Energy (más de 100 ingenieros en 4 países), he llevado proyectos desde un repo vacío hasta producción — tomando decisiones de arquitectura, producto y cara al cliente en el camino. Si hay un paso manual en un flujo de trabajo, es un bug.',
    'about.philosophy.02.title': 'Rendimiento Donde Importa',
    'about.philosophy.02.description':
      'Me especializo en interfaces que manejan datos pesados sin degradar la experiencia. En Dash Energy, optimicé el frontend múltiples veces para renderizar gigabytes de datos de producción de pozos — virtualización, lazy loading, paginación inteligente. El objetivo siempre es: que el usuario nunca note la complejidad.',
    'about.philosophy.03.title': 'Open Source por Naturaleza',
    'about.philosophy.03.description':
      '60+ contribuciones open source, activo en proyectos comunitarios y miembro de varias organizaciones de desarrolladores. Trabajo diariamente a través de zonas horarias con equipos en Francia, EE.UU., Argentina y Colombia. Creo que el mejor código se escribe en abierto, y los mejores equipos son los que comparten lo que aprenden.',
    'about.philosophy.suffix': 'Filosofía',

    // About — Competencies
    'about.competencies.label': 'Competencias Principales',
    'about.competencies.frontend': 'Frontend',
    'about.competencies.backend': 'Backend',
    'about.competencies.cloud': 'Nube & Infraestructura',
    'about.competencies.data': 'Datos',
    'about.competencies.orchestration': 'Orquestación',
    'about.competencies.specialized': 'Especializado',

    // About — Education
    'about.education.label': 'Formación Académica',
    'about.education.degree1': 'Ingeniería en Software (B.Eng.)',
    'about.education.school1': 'Tecnológico de Antioquia (TdeA)',
    'about.education.period1': '2023 — PRESENTE (8vo Semestre)',
    'about.education.details1': '',
    'about.education.degree2': 'Tecnología en Diseño y Desarrollo Web',
    'about.education.school2': 'Tecnológico de Antioquia (TdeA)',
    'about.education.period2': '2020 — 2024',
    'about.education.details2': 'Graduado',

    // About — CTA
    'about.cta.text':
      'Actualmente construyendo plataformas de alto rendimiento para la industria energética, explorando entrenamiento impulsado por IA con datos de wearables, y contribuyendo al open source.',
    'about.cta.link': 'Hablemos',

    // Work
    'work.label': 'Trabajo',
    'work.title': 'Próximamente',
    'work.description':
      'Una colección curada de proyectos y casos de estudio está en progreso. Vuelve pronto.',

    // Contact — Hero
    'contact.hero.label': 'Contacto',
    'contact.hero.title': 'Construyamos algo.',
    'contact.hero.description':
      'Tienes un producto que necesita construirse desde cero? Un frontend ahogado en datos? Un equipo que necesita a alguien que se adueñe de todo el stack? Quiero saber de tu proyecto.',

    // Contact — Form
    'contact.form.name': 'Tu Nombre',
    'contact.form.namePlaceholder': 'Escribe aquí...',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.emailPlaceholder': 'nombre@ejemplo.com',
    'contact.form.inquiry': 'Consulta',
    'contact.form.inquiryPlaceholder': 'Cuéntame sobre tu proyecto...',
    'contact.form.submit': 'Enviar Mensaje',

    // Contact — Direct Channels
    'contact.channels.label': 'Canales Directos',
    'contact.channels.responseLatency': 'Tiempo de Respuesta:',
    'contact.channels.responseTime': '~24 Horas',
    'contact.channels.operatingFrom': 'Ubicación:',
    'contact.channels.location': 'Medellín, CO (GMT-5)',

    // Footer
    'footer.rights': '\u00A9 2026 Jarrison Cano. Todos los derechos reservados.',
  },
} as const;
