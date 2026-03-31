export const languages = {
  en: 'EN',
  es: 'ES',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Meta
    'meta.title': 'Jarrison Cano — Software Engineer & Tech Lead',
    'meta.description':
      'Software Engineer building production platforms for the energy industry. Leading teams across 4 countries. Based in Medellín, working globally.',

    // Nav
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.work': 'WORK',
    'nav.contact': 'CONTACT',

    // Home — Hero
    'home.hero.subtitle': 'Software Engineer & Tech Lead',
    'home.hero.description':
      'I build platforms that handle real data for real industries. Currently leading frontend at Dash Energy, where 100+ petroleum engineers across 4 countries rely on what my team ships every day.',

    // Home — Experience
    'home.experience.heading': '01 / Professional Experience',
    'home.experience.dash.role': 'SOFTWARE ENGINEER & TECH LEAD',
    'home.experience.dash.period': '2022 — PRESENT',
    'home.experience.dash.description':
      'Leading a frontend team building a production forecasting platform for oil wells — decline models, statistical analysis, economic calculations, multi-currency and multi-unit support. Integrated cross-platform with Kappa Engineering (France & USA). The platform serves 100+ engineers across Argentina, Brazil, Colombia, and the USA. Also built the complete frontend for SimplG, an LPG plant simulator for an allied company, using React Flow for interactive node-based diagrams.',
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
      'A full-stack AI running coach I built for myself and now use daily. Syncs with Garmin, generates personalized weekly training plans using Claude Sonnet 4, and adjusts based on actual performance. React Router + Supabase Edge Functions + GCP.',
    'home.projects.viewCaseStudy': 'View Case Study',

    // Home — Skills
    'home.skills.heading': '03 / Technical Stack',
    'home.skills.coreStack': 'Core Stack',
    'home.skills.infrastructure': 'Infrastructure',
    'home.skills.expert': 'Expert',
    'home.skills.advanced': 'Advanced',
    'home.skills.proficient': 'Proficient',

    // About — Hero
    'about.hero.label': 'Biography \u00B7 Manifest',
    'about.hero.title': 'I build products, not just features.',
    'about.hero.p1':
      "I'm Jarrison Cano. I take products from zero to production — architecture decisions, team coordination, deployment pipelines, client conversations. I've done it multiple times across different industries, and I care as much about why we're building something as how.",
    'about.hero.p2':
      "Most of my work sits at the intersection of complex data and user-facing interfaces. At Dash Energy, that means rendering gigabytes of production data without the UI breaking a sweat. At GourmetApp, it meant scaling a content platform to 400+ restaurants. I lead a team of 5, collaborate with engineers in France and the US, and still write code every day.",

    // About — Philosophy
    'about.philosophy.label': 'Technical Philosophy',
    'about.philosophy.01.title': 'Ownership Over Tickets',
    'about.philosophy.01.description':
      "I don't wait for someone to define the scope. From GourmetApp (400+ restaurants in Madrid) to Dash Energy (100+ engineers across 4 countries), I've taken projects from an empty repo to production — making architecture, product, and client-facing decisions along the way. If there's a manual step in a workflow, it's a bug.",
    'about.philosophy.02.title': 'Performance Where It Counts',
    'about.philosophy.02.description':
      'I specialize in interfaces that handle heavy data without degrading the experience. At Dash Energy, I optimized the frontend multiple times to render gigabytes of well production data — virtualization, lazy loading, intelligent pagination. The goal is always: the user never notices the complexity.',
    'about.philosophy.03.title': 'International by Default',
    'about.philosophy.03.description':
      'I work daily across time zones with teams in France, the United States, Argentina, and Colombia. Leading 5 engineers, running code reviews, mentoring juniors, and coordinating sprints across distributed teams. Clear async communication is not optional — it is the work.',
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
    'about.education.details1':
      'Relevant coursework: Advanced Databases, Physics, Big Data (MongoDB, CRISP-DM), Legal & Ethical Aspects of Software',
    'about.education.degree2': 'Tecnología en Diseño y Desarrollo Web',
    'about.education.school2': 'Tecnológico de Antioquia (TdeA)',
    'about.education.period2': '2020 — 2024',
    'about.education.details2': 'Graduated',

    // About — CTA
    'about.cta.text':
      'Currently building high-performance platforms for the energy industry and exploring AI-driven coaching with wearable data.',
    'about.cta.link': 'View My Work',

    // Work
    'work.label': 'Work',
    'work.title': 'Coming Soon',
    'work.description':
      'A curated collection of projects and case studies is in progress. Check back soon.',

    // Contact — Hero
    'contact.hero.label': 'Get In Touch',
    'contact.hero.title': "Let's build something.",
    'contact.hero.description':
      'Open to freelance partnerships and full-time technical leadership roles. I work best on complex frontend systems, data-heavy interfaces, and products that need to be built from scratch.',

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
    'meta.title': 'Jarrison Cano — Ingeniero de Software & Líder Técnico',
    'meta.description':
      'Ingeniero de Software construyendo plataformas de producción para la industria energética. Liderando equipos en 4 países. Basado en Medellín, trabajando globalmente.',

    // Nav
    'nav.home': 'INICIO',
    'nav.about': 'SOBRE MÍ',
    'nav.work': 'TRABAJO',
    'nav.contact': 'CONTACTO',

    // Home — Hero
    'home.hero.subtitle': 'Ingeniero de Software & Líder Técnico',
    'home.hero.description':
      'Construyo plataformas que manejan datos reales para industrias reales. Actualmente liderando el frontend en Dash Energy, donde más de 100 ingenieros petroleros en 4 países dependen de lo que mi equipo entrega cada día.',

    // Home — Experience
    'home.experience.heading': '01 / Experiencia Profesional',
    'home.experience.dash.role': 'INGENIERO DE SOFTWARE & LÍDER TÉCNICO',
    'home.experience.dash.period': '2022 — PRESENTE',
    'home.experience.dash.description':
      'Liderando un equipo frontend construyendo una plataforma de pronóstico de producción para pozos petroleros — modelos de declinación, análisis estadístico, cálculos económicos, soporte multi-moneda y multi-unidad. Integración cross-platform con Kappa Engineering (Francia y EE.UU.). La plataforma sirve a más de 100 ingenieros en Argentina, Brasil, Colombia y EE.UU. También construí el frontend completo de SimplG, un simulador de plantas de GLP para una empresa aliada, usando React Flow para diagramas interactivos basados en nodos.',
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
      'Un entrenador de running con IA full-stack que construí para mí y ahora uso diariamente. Se sincroniza con Garmin, genera planes de entrenamiento semanales personalizados usando Claude Sonnet 4, y se ajusta basándose en el rendimiento real. React Router + Supabase Edge Functions + GCP.',
    'home.projects.viewCaseStudy': 'Ver Caso de Estudio',

    // Home — Skills
    'home.skills.heading': '03 / Stack Técnico',
    'home.skills.coreStack': 'Stack Principal',
    'home.skills.infrastructure': 'Infraestructura',
    'home.skills.expert': 'Experto',
    'home.skills.advanced': 'Avanzado',
    'home.skills.proficient': 'Competente',

    // About — Hero
    'about.hero.label': 'Biografía \u00B7 Manifiesto',
    'about.hero.title': 'Construyo productos, no solo features.',
    'about.hero.p1':
      'Soy Jarrison Cano. Llevo productos de cero a producción — decisiones de arquitectura, coordinación de equipo, pipelines de despliegue, conversaciones con clientes. Lo he hecho múltiples veces en diferentes industrias, y me importa tanto el por qué construimos algo como el cómo.',
    'about.hero.p2':
      'La mayor parte de mi trabajo está en la intersección entre datos complejos e interfaces de usuario. En Dash Energy, eso significa renderizar gigabytes de datos de producción sin que la UI se inmute. En GourmetApp, significó escalar una plataforma de contenido a más de 400 restaurantes. Lidero un equipo de 5, colaboro con ingenieros en Francia y EE.UU., y sigo escribiendo código todos los días.',

    // About — Philosophy
    'about.philosophy.label': 'Filosofía Técnica',
    'about.philosophy.01.title': 'Ownership Sobre Tickets',
    'about.philosophy.01.description':
      'No espero a que alguien defina el alcance. Desde GourmetApp (más de 400 restaurantes en Madrid) hasta Dash Energy (más de 100 ingenieros en 4 países), he llevado proyectos desde un repo vacío hasta producción — tomando decisiones de arquitectura, producto y cara al cliente en el camino. Si hay un paso manual en un flujo de trabajo, es un bug.',
    'about.philosophy.02.title': 'Rendimiento Donde Importa',
    'about.philosophy.02.description':
      'Me especializo en interfaces que manejan datos pesados sin degradar la experiencia. En Dash Energy, optimicé el frontend múltiples veces para renderizar gigabytes de datos de producción de pozos — virtualización, lazy loading, paginación inteligente. El objetivo siempre es: que el usuario nunca note la complejidad.',
    'about.philosophy.03.title': 'Internacional por Defecto',
    'about.philosophy.03.description':
      'Trabajo diariamente a través de zonas horarias con equipos en Francia, Estados Unidos, Argentina y Colombia. Liderando 5 ingenieros, haciendo code reviews, mentoreando juniors y coordinando sprints en equipos distribuidos. La comunicación asíncrona clara no es opcional — es el trabajo.',
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
    'about.education.details1':
      'Cursos relevantes: Bases de Datos Avanzadas, Física, Big Data (MongoDB, CRISP-DM), Aspectos Legales y Éticos del Software',
    'about.education.degree2': 'Tecnología en Diseño y Desarrollo Web',
    'about.education.school2': 'Tecnológico de Antioquia (TdeA)',
    'about.education.period2': '2020 — 2024',
    'about.education.details2': 'Graduado',

    // About — CTA
    'about.cta.text':
      'Actualmente construyendo plataformas de alto rendimiento para la industria energética y explorando entrenamiento impulsado por IA con datos de wearables.',
    'about.cta.link': 'Ver Mi Trabajo',

    // Work
    'work.label': 'Trabajo',
    'work.title': 'Próximamente',
    'work.description':
      'Una colección curada de proyectos y casos de estudio está en progreso. Vuelve pronto.',

    // Contact — Hero
    'contact.hero.label': 'Contacto',
    'contact.hero.title': 'Construyamos algo.',
    'contact.hero.description':
      'Abierto a alianzas freelance y roles de liderazgo técnico a tiempo completo. Trabajo mejor en sistemas frontend complejos, interfaces con datos pesados, y productos que necesitan construirse desde cero.',

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
