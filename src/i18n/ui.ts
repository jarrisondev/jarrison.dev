export const languages = {
  en: 'EN',
  es: 'ES',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = {
  en: {
    // Meta
    'meta.title': 'Jarrison Cano — Scientific Software Engineer & Tech Lead',
    'meta.description':
      'Software Engineer with 4+ years building production apps from scratch. Tech Lead at Dash Energy. Based in Medellín, operating globally.',

    // Nav
    'nav.home': 'HOME',
    'nav.about': 'ABOUT',
    'nav.work': 'WORK',
    'nav.contact': 'CONTACT',

    // Home — Hero
    'home.hero.subtitle': 'Senior Software Engineer & Tech Lead',
    'home.hero.description':
      'Scientific Software Engineer & Tech Lead. Specialized in building production-grade platforms from the ground up, data-intensive user interfaces, and the intersection of engineering software for the energy industry.',

    // Home — Experience
    'home.experience.heading': '01 / Professional Experience',
    'home.experience.dash.role': 'SCIENTIFIC SOFTWARE ENGINEER & TECH LEAD',
    'home.experience.dash.period': '2022 — PRESENT',
    'home.experience.dash.description':
      'Architecting a petroleum production forecasting platform for renewable energy infrastructure. Spearheading the frontend to multi-region data visualization, leading a team of 5 engineers and implementing advanced observability patterns for distributed data pipelines. Serving 100+ engineers across 4 countries (Argentina, Brazil, Colombia, USA), collaborating with international teams in France and the United States.',
    'home.experience.simplg.role': 'FRONTEND ENGINEER (FREELANCE)',
    'home.experience.simplg.period': '2025 — PRESENT',
    'home.experience.simplg.description':
      'Building the complete frontend for an LPG plant production simulator. Engineers interact with an interactive node-based diagram (React Flow) to modify equipment parameters and streams in real-time, visualizing plant topology with drag-and-drop connections.',
    'home.experience.waco.role': 'SOFTWARE ENGINEER',
    'home.experience.waco.period': '2022 — 2022',
    'home.experience.waco.description':
      'Directed digital transformation initiatives for enterprise clients. Built GourmetApp from scratch — a TikTok-inspired restaurant menu platform adopted by 400+ restaurants in Madrid. Managed a cross-functional team of 4 engineers while working directly with clients on product decisions.',
    'home.experience.atalaya.role': 'SOFTWARE DEVELOPER',
    'home.experience.atalaya.period': '2021 — 2022',
    'home.experience.atalaya.description':
      "Developed a cross-platform web and mobile application (React + React Native) for cargo tracking across Colombia. Integrated Colombia's government RNDC API to automate cargo dispatch processes, replacing manual manifest recording with automated regulatory compliance.",

    // Home — Projects
    'home.projects.heading': '02 / Featured Projects',
    'home.projects.rundev.description':
      'A full-stack AI running coach I built for myself and now use daily. RunDev syncs with Garmin, generates personalized weekly training plans using Claude Sonnet 4, and adjusts in real-time based on actual performance. Built entirely in React Router + Supabase Edge Functions + GCP.',
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
    'about.hero.title': 'Building products from the ground up.',
    'about.hero.p1':
      'I am Jarrison Cano, a Software Engineer who builds production applications as complete systems — from the first line of code to the last deployment pipeline. My career has been defined by the pursuit of solving real problems for real people, and taking full ownership of the products I build.',
    'about.hero.p2':
      "In an industry that often favors specialization, I operate across the full stack — frontend, backend, DevOps, and architecture. I've built two products from scratch that serve real users, led international teams, and optimized interfaces to handle gigabytes of data without breaking a sweat. I believe the best engineers are the ones who care about the problem, not just the code.",

    // About — Philosophy
    'about.philosophy.label': 'Technical Philosophy',
    'about.philosophy.01.title': 'Ownership-Driven Engineering',
    'about.philosophy.01.description':
      "I don't just write features — I build products. From GourmetApp (400+ restaurants in Madrid) to Dash Energy (100+ petroleum engineers across 4 countries), I've taken projects from zero to production, making architecture, product, and client-facing decisions along the way. Every manual action in a workflow is a failure to automate.",
    'about.philosophy.02.title': 'Performance at Scale',
    'about.philosophy.02.description':
      'Translating into data-intensive environments, I specialize in building interfaces that handle massive datasets without degrading user experience. At Dash Energy, I optimized the UI multiple times to render gigabytes of production data through virtualization, lazy loading, and intelligent pagination strategies.',
    'about.philosophy.03.title': 'International Collaboration',
    'about.philosophy.03.description':
      'Working across time zones with teams in France, the United States, Argentina, and Colombia has taught me that clear communication is as important as clean code. I lead a team of 5 engineers, conduct code reviews, mentor junior developers, and coordinate sprints across distributed teams.',
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
    'about.education.degree1': 'Ingeniería de Software (B.Eng.)',
    'about.education.school1': 'Tecnológico de Antioquia',
    'about.education.period1': '2023 — 2027 (Expected)',
    'about.education.details1':
      'Relevant coursework: Advanced Databases, Physics, Big Data (MongoDB, CRISP-DM), Legal & Ethical Aspects of Software',
    'about.education.degree2': 'Tecnología en Diseño y Desarrollo Web',
    'about.education.school2': 'Tecnológico de Antioquia',
    'about.education.period2': '2020 — 2024',
    'about.education.details2': 'Associate Degree',

    // About — CTA
    'about.cta.text':
      'Currently building high-performance platforms for the energy industry and exploring the intersection of AI-driven coaching and wearable data.',
    'about.cta.link': 'View My Work',

    // Work
    'work.label': 'Work',
    'work.title': 'Coming Soon',
    'work.description':
      'A curated collection of projects and case studies is currently in progress. Check back soon.',

    // Contact — Hero
    'contact.hero.label': 'Get In Touch',
    'contact.hero.title': "Let's build the future.",
    'contact.hero.description':
      'Currently open to select freelance partnerships and full-time technical leadership roles. Specializing in high-performance systems and scalable infrastructure. Based in the digital ether.',

    // Contact — Form
    'contact.form.name': 'Your Name',
    'contact.form.namePlaceholder': 'Type here...',
    'contact.form.email': 'Email Address',
    'contact.form.emailPlaceholder': 'name@example.com',
    'contact.form.inquiry': 'Inquiry',
    'contact.form.inquiryPlaceholder': 'Describe the project...',
    'contact.form.submit': 'Send Inquiry',

    // Contact — Direct Channels
    'contact.channels.label': 'Direct Channels',
    'contact.channels.responseLatency': 'Response Latency:',
    'contact.channels.responseTime': '~24 Hours',
    'contact.channels.operatingFrom': 'Operating From:',
    'contact.channels.location': 'GMT-5 (Medellín, CO)',

    // Footer
    'footer.rights': '\u00A9 2026 Jarrison Cano. All rights reserved.',
  },

  es: {
    // Meta
    'meta.title': 'Jarrison Cano — Ingeniero de Software & Líder Técnico',
    'meta.description':
      'Ingeniero de Software con más de 4 años construyendo aplicaciones en producción desde cero. Tech Lead en Dash Energy. Basado en Medellín, operando globalmente.',

    // Nav
    'nav.home': 'INICIO',
    'nav.about': 'SOBRE MÍ',
    'nav.work': 'TRABAJO',
    'nav.contact': 'CONTACTO',

    // Home — Hero
    'home.hero.subtitle': 'Ingeniero de Software Senior & Líder Técnico',
    'home.hero.description':
      'Ingeniero de Software Científico & Líder Técnico. Especializado en construir plataformas de producción desde cero, interfaces de usuario intensivas en datos, y la intersección de ingeniería de software para la industria energética.',

    // Home — Experience
    'home.experience.heading': '01 / Experiencia Profesional',
    'home.experience.dash.role': 'INGENIERO DE SOFTWARE CIENTÍFICO & LÍDER TÉCNICO',
    'home.experience.dash.period': '2022 — PRESENTE',
    'home.experience.dash.description':
      'Arquitectando una plataforma de pronóstico de producción petrolera para infraestructura de energía renovable. Liderando el frontend hacia visualización de datos multi-región, dirigiendo un equipo de 5 ingenieros e implementando patrones avanzados de observabilidad para pipelines de datos distribuidos. Sirviendo a más de 100 ingenieros en 4 países (Argentina, Brasil, Colombia, EE.UU.), colaborando con equipos internacionales en Francia y Estados Unidos.',
    'home.experience.simplg.role': 'INGENIERO FRONTEND (FREELANCE)',
    'home.experience.simplg.period': '2025 — PRESENTE',
    'home.experience.simplg.description':
      'Construyendo el frontend completo para un simulador de producción de plantas de GLP. Los ingenieros interactúan con un diagrama interactivo basado en nodos (React Flow) para modificar parámetros de equipos y corrientes en tiempo real, visualizando la topología de la planta con conexiones de arrastrar y soltar.',
    'home.experience.waco.role': 'INGENIERO DE SOFTWARE',
    'home.experience.waco.period': '2022 — 2022',
    'home.experience.waco.description':
      'Dirigí iniciativas de transformación digital para clientes empresariales. Construí GourmetApp desde cero — una plataforma de menú de restaurantes inspirada en TikTok adoptada por más de 400 restaurantes en Madrid. Gestioné un equipo multidisciplinario de 4 ingenieros trabajando directamente con clientes en decisiones de producto.',
    'home.experience.atalaya.role': 'DESARROLLADOR DE SOFTWARE',
    'home.experience.atalaya.period': '2021 — 2022',
    'home.experience.atalaya.description':
      'Desarrollé una aplicación multiplataforma web y móvil (React + React Native) para rastreo de carga en Colombia. Integré la API gubernamental RNDC de Colombia para automatizar procesos de despacho de carga, reemplazando el registro manual de manifiestos con cumplimiento regulatorio automatizado.',

    // Home — Projects
    'home.projects.heading': '02 / Proyectos Destacados',
    'home.projects.rundev.description':
      'Un entrenador de running con IA full-stack que construí para mí y ahora uso diariamente. RunDev se sincroniza con Garmin, genera planes de entrenamiento semanales personalizados usando Claude Sonnet 4, y se ajusta en tiempo real basándose en el rendimiento real. Construido enteramente en React Router + Supabase Edge Functions + GCP.',
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
    'about.hero.title': 'Construyendo productos desde cero.',
    'about.hero.p1':
      'Soy Jarrison Cano, un Ingeniero de Software que construye aplicaciones de producción como sistemas completos — desde la primera línea de código hasta el último pipeline de despliegue. Mi carrera ha sido definida por la búsqueda de resolver problemas reales para personas reales, y tomar total responsabilidad de los productos que construyo.',
    'about.hero.p2':
      'En una industria que frecuentemente favorece la especialización, opero a lo largo de todo el stack — frontend, backend, DevOps y arquitectura. He construido dos productos desde cero que sirven a usuarios reales, liderado equipos internacionales, y optimizado interfaces para manejar gigabytes de datos sin despeinarse. Creo que los mejores ingenieros son los que se preocupan por el problema, no solo por el código.',

    // About — Philosophy
    'about.philosophy.label': 'Filosofía Técnica',
    'about.philosophy.01.title': 'Ingeniería Orientada a la Propiedad',
    'about.philosophy.01.description':
      'No solo escribo features — construyo productos. Desde GourmetApp (más de 400 restaurantes en Madrid) hasta Dash Energy (más de 100 ingenieros petroleros en 4 países), he llevado proyectos de cero a producción, tomando decisiones de arquitectura, producto y cara al cliente en el camino. Cada acción manual en un flujo de trabajo es un fallo en automatizar.',
    'about.philosophy.02.title': 'Rendimiento a Escala',
    'about.philosophy.02.description':
      'Traduciéndome en entornos intensivos en datos, me especializo en construir interfaces que manejan conjuntos de datos masivos sin degradar la experiencia del usuario. En Dash Energy, optimicé la UI múltiples veces para renderizar gigabytes de datos de producción a través de virtualización, carga diferida y estrategias inteligentes de paginación.',
    'about.philosophy.03.title': 'Colaboración Internacional',
    'about.philosophy.03.description':
      'Trabajar a través de zonas horarias con equipos en Francia, Estados Unidos, Argentina y Colombia me ha enseñado que la comunicación clara es tan importante como el código limpio. Lidero un equipo de 5 ingenieros, realizo revisiones de código, mentoreo desarrolladores junior y coordino sprints en equipos distribuidos.',
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
    'about.education.degree1': 'Ingeniería de Software (B.Eng.)',
    'about.education.school1': 'Tecnológico de Antioquia',
    'about.education.period1': '2023 — 2027 (Esperado)',
    'about.education.details1':
      'Cursos relevantes: Bases de Datos Avanzadas, Física, Big Data (MongoDB, CRISP-DM), Aspectos Legales y Éticos del Software',
    'about.education.degree2': 'Tecnología en Diseño y Desarrollo Web',
    'about.education.school2': 'Tecnológico de Antioquia',
    'about.education.period2': '2020 — 2024',
    'about.education.details2': 'Título Tecnológico',

    // About — CTA
    'about.cta.text':
      'Actualmente construyendo plataformas de alto rendimiento para la industria energética y explorando la intersección entre entrenamiento impulsado por IA y datos de wearables.',
    'about.cta.link': 'Ver Mi Trabajo',

    // Work
    'work.label': 'Trabajo',
    'work.title': 'Próximamente',
    'work.description':
      'Una colección curada de proyectos y casos de estudio está actualmente en progreso. Vuelve pronto.',

    // Contact — Hero
    'contact.hero.label': 'Contacto',
    'contact.hero.title': 'Construyamos el futuro.',
    'contact.hero.description':
      'Actualmente abierto a alianzas freelance selectas y roles de liderazgo técnico a tiempo completo. Especializado en sistemas de alto rendimiento e infraestructura escalable. Basado en el éter digital.',

    // Contact — Form
    'contact.form.name': 'Tu Nombre',
    'contact.form.namePlaceholder': 'Escribe aquí...',
    'contact.form.email': 'Correo Electrónico',
    'contact.form.emailPlaceholder': 'nombre@ejemplo.com',
    'contact.form.inquiry': 'Consulta',
    'contact.form.inquiryPlaceholder': 'Describe el proyecto...',
    'contact.form.submit': 'Enviar Consulta',

    // Contact — Direct Channels
    'contact.channels.label': 'Canales Directos',
    'contact.channels.responseLatency': 'Latencia de Respuesta:',
    'contact.channels.responseTime': '~24 Horas',
    'contact.channels.operatingFrom': 'Operando Desde:',
    'contact.channels.location': 'GMT-5 (Medellín, CO)',

    // Footer
    'footer.rights': '\u00A9 2026 Jarrison Cano. Todos los derechos reservados.',
  },
} as const;
