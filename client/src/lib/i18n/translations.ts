export type Language = 'es' | 'en';

export const translations = {
  es: {
    // Navbar
    nav: {
      home: 'Inicio',
      services: 'Servicios',
      about: 'Sobre mí',
      projects: 'Proyectos',
      contact: 'Contacto',
      cta: 'Impacto',
    },
    // Hero
    hero: {
      title: 'Creamos páginas web que generan',
      highlight: 'alto impacto',
      subtitle: 'Diseño web profesional que convierte visitantes en clientes. Soluciones digitales que impulsan tu negocio.',
      cta1: 'Ver Servicios',
      cta2: 'Agendar llamada',
    },
    // Services
    services: {
      badge: 'Servicios',
      title: 'Soluciones digitales',
      titleHighlight: 'a tu medida',
      description: 'Desarrollo web profesional adaptado a las necesidades de tu negocio',
      // Ofertas fin de año
      offersTitle: '🎄 Ofertas Fin de Año',
      offersSubtitle: 'Precios especiales hasta el 31 de diciembre',
      // Servicios
      landingPage: {
        title: 'Landing Page',
        description: 'Página de aterrizaje optimizada para convertir visitantes en clientes.',
        features: ['Diseño responsive', 'Optimización SEO básica', 'Formulario de contacto', 'Entrega en 7 días'],
      },
      institutional: {
        title: 'Web Institucional',
        description: 'Sitio web profesional para empresas que buscan presencia digital sólida.',
        features: ['Hasta 5 secciones', 'Diseño personalizado', 'Integración redes sociales', 'Panel administrable'],
      },
      digitalMenu: {
        title: 'Menú Digital',
        description: 'Menú digital interactivo con QR para restaurantes y bares.',
        features: ['Catálogo de productos', 'Código QR incluido', 'Fácil actualización', 'Diseño atractivo'],
      },
      portfolio: {
        title: 'Portfolio Profesional',
        description: 'Sitio web personal para mostrar tu trabajo y habilidades.',
        features: ['Galería de proyectos', 'Sobre mí', 'Formulario de contacto', 'Blog opcional'],
      },
      ecommerce: {
        title: 'E-commerce',
        description: 'Tienda online completa con carrito de compras y pasarela de pagos.',
        features: ['Catálogo de productos', 'Carrito de compras', 'Pasarela de pagos', 'Panel de administración'],
      },
      realEstate: {
        title: 'Web Inmobiliaria',
        description: 'Plataforma para inmobiliarias con listado de propiedades y filtros avanzados.',
        features: ['Listado de propiedades', 'Filtros de búsqueda', 'Galería de fotos', 'Formulario de consulta'],
      },
      lawFirm: {
        title: 'Web Estudio Jurídico',
        description: 'Sitio profesional para abogados y estudios jurídicos.',
        features: ['Áreas de práctica', 'Equipo profesional', 'Blog legal', 'Consultas online'],
      },
      carDealer: {
        title: 'Web Concesionaria',
        description: 'Plataforma para concesionarias con catálogo de vehículos.',
        features: ['Catálogo de vehículos', 'Filtros avanzados', 'Financiación', 'Tasación online'],
      },
      // Mantenimiento
      maintenanceTitle: 'Planes de Mantenimiento',
      maintenanceSubtitle: 'Mantén tu sitio actualizado y seguro',
      basicPlan: {
        title: 'Plan Básico',
        description: 'Actualizaciones mensuales de contenido y soporte técnico.',
      },
      proPlan: {
        title: 'Plan Pro',
        description: 'Todo lo del plan básico más optimización SEO y análisis de métricas.',
      },
      premiumPlan: {
        title: 'Plan Premium',
        description: 'Servicio completo con soporte prioritario y mejoras continuas.',
      },
      perMonth: '/mes',
      idealFor: 'Ideal para:',
      includes: 'Incluye:',
      requestQuote: 'Solicitar Cotización',
      or: 'o',
      customize: 'personalizar',
    },
    // About
    about: {
      badge: 'Sobre mí',
      title: 'Desarrollador web',
      titleHighlight: 'apasionado',
      description: 'Soy Axel, desarrollador web con experiencia en crear soluciones digitales que generan resultados. Me especializo en diseño moderno y código limpio.',
      bio: 'Con más de 3 años de experiencia en desarrollo web, he ayudado a empresas y emprendedores a establecer su presencia digital. Mi enfoque combina diseño atractivo con funcionalidad práctica.',
      skillsTitle: 'Habilidades',
      valuesTitle: 'Valores',
      values: {
        quality: 'Calidad',
        qualityDesc: 'Código limpio y buenas prácticas',
        communication: 'Comunicación',
        communicationDesc: 'Siempre disponible para ti',
        punctuality: 'Puntualidad',
        punctualityDesc: 'Entregas en tiempo y forma',
        commitment: 'Compromiso',
        commitmentDesc: 'Tu éxito es mi prioridad',
        innovation: 'Innovación',
        innovationDesc: 'Soluciones creativas y modernas',
        transparency: 'Transparencia',
        transparencyDesc: 'Sin sorpresas ni costos ocultos',
      },
    },
    // Projects
    projects: {
      badge: 'Proyectos',
      title: 'Trabajos',
      titleHighlight: 'recientes',
      description: 'Algunos de los proyectos en los que he trabajado',
      viewProject: 'Ver proyecto',
      viewAll: 'Ver todos los proyectos',
    },
    // Contact
    contact: {
      badge: 'Contacto',
      title: 'Hablemos de tu',
      titleHighlight: 'proyecto',
      description: 'Estoy aquí para ayudarte a llevar tu negocio al siguiente nivel',
      formTitle: 'Envíame un mensaje',
      name: 'Nombre',
      namePlaceholder: 'Tu nombre',
      email: 'Email',
      emailPlaceholder: 'tu@email.com',
      message: 'Mensaje',
      messagePlaceholder: 'Cuéntame sobre tu proyecto...',
      send: 'Enviar mensaje',
      sending: 'Enviando...',
      successTitle: '¡Mensaje enviado!',
      successMessage: 'Te responderé lo antes posible.',
      errorTitle: 'Error',
      errorMessage: 'Hubo un problema al enviar el mensaje. Intenta de nuevo.',
      orContact: 'O contáctame por',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Respuesta rápida',
      calendly: 'Agendar llamada',
      calendlyDesc: 'Reunión de 30 min',
      emailContact: 'Email',
      emailContactDesc: 'Respuesta en 24h',
      instagram: 'Instagram',
      instagramDesc: '@studiohighimpact',
    },
    // Testimonials
    testimonials: {
      badge: 'Testimonios',
      title: 'Lo que dicen',
      titleHighlight: 'mis clientes',
    },
    // Footer
    footer: {
      rights: 'Todos los derechos reservados.',
      madeWith: 'Hecho con',
      in: 'en Argentina',
    },
    // Common
    common: {
      learnMore: 'Saber más',
      getStarted: 'Comenzar',
      backToHome: 'Volver al inicio',
    },
  },
  en: {
    // Navbar
    nav: {
      home: 'Home',
      services: 'Services',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact',
      cta: 'Impact',
    },
    // Hero
    hero: {
      title: 'We create websites that generate',
      highlight: 'high impact',
      subtitle: 'Professional web design that converts visitors into customers. Digital solutions that boost your business.',
      cta1: 'View Services',
      cta2: 'Schedule a call',
    },
    // Services
    services: {
      badge: 'Services',
      title: 'Digital solutions',
      titleHighlight: 'tailored for you',
      description: 'Professional web development adapted to your business needs',
      // End of year offers
      offersTitle: '🎄 End of Year Offers',
      offersSubtitle: 'Special prices until December 31',
      // Services
      landingPage: {
        title: 'Landing Page',
        description: 'Optimized landing page to convert visitors into customers.',
        features: ['Responsive design', 'Basic SEO optimization', 'Contact form', 'Delivery in 7 days'],
      },
      institutional: {
        title: 'Business Website',
        description: 'Professional website for companies seeking solid digital presence.',
        features: ['Up to 5 sections', 'Custom design', 'Social media integration', 'Admin panel'],
      },
      digitalMenu: {
        title: 'Digital Menu',
        description: 'Interactive digital menu with QR for restaurants and bars.',
        features: ['Product catalog', 'QR code included', 'Easy updates', 'Attractive design'],
      },
      portfolio: {
        title: 'Professional Portfolio',
        description: 'Personal website to showcase your work and skills.',
        features: ['Project gallery', 'About me', 'Contact form', 'Optional blog'],
      },
      ecommerce: {
        title: 'E-commerce',
        description: 'Complete online store with shopping cart and payment gateway.',
        features: ['Product catalog', 'Shopping cart', 'Payment gateway', 'Admin panel'],
      },
      realEstate: {
        title: 'Real Estate Website',
        description: 'Platform for real estate agencies with property listings and advanced filters.',
        features: ['Property listings', 'Search filters', 'Photo gallery', 'Inquiry form'],
      },
      lawFirm: {
        title: 'Law Firm Website',
        description: 'Professional site for lawyers and law firms.',
        features: ['Practice areas', 'Professional team', 'Legal blog', 'Online consultations'],
      },
      carDealer: {
        title: 'Car Dealership Website',
        description: 'Platform for dealerships with vehicle catalog.',
        features: ['Vehicle catalog', 'Advanced filters', 'Financing', 'Online appraisal'],
      },
      // Maintenance
      maintenanceTitle: 'Maintenance Plans',
      maintenanceSubtitle: 'Keep your site updated and secure',
      basicPlan: {
        title: 'Basic Plan',
        description: 'Monthly content updates and technical support.',
      },
      proPlan: {
        title: 'Pro Plan',
        description: 'Everything in basic plus SEO optimization and metrics analysis.',
      },
      premiumPlan: {
        title: 'Premium Plan',
        description: 'Complete service with priority support and continuous improvements.',
      },
      perMonth: '/month',
      idealFor: 'Ideal for:',
      includes: 'Includes:',
      requestQuote: 'Request Quote',
      or: 'or',
      customize: 'customize',
    },
    // About
    about: {
      badge: 'About',
      title: 'Passionate web',
      titleHighlight: 'developer',
      description: "I'm Axel, a web developer with experience in creating digital solutions that generate results. I specialize in modern design and clean code.",
      bio: 'With over 3 years of experience in web development, I have helped companies and entrepreneurs establish their digital presence. My approach combines attractive design with practical functionality.',
      skillsTitle: 'Skills',
      valuesTitle: 'Values',
      values: {
        quality: 'Quality',
        qualityDesc: 'Clean code and best practices',
        communication: 'Communication',
        communicationDesc: 'Always available for you',
        punctuality: 'Punctuality',
        punctualityDesc: 'On-time deliveries',
        commitment: 'Commitment',
        commitmentDesc: 'Your success is my priority',
        innovation: 'Innovation',
        innovationDesc: 'Creative and modern solutions',
        transparency: 'Transparency',
        transparencyDesc: 'No surprises or hidden costs',
      },
    },
    // Projects
    projects: {
      badge: 'Projects',
      title: 'Recent',
      titleHighlight: 'work',
      description: 'Some of the projects I have worked on',
      viewProject: 'View project',
      viewAll: 'View all projects',
    },
    // Contact
    contact: {
      badge: 'Contact',
      title: "Let's talk about your",
      titleHighlight: 'project',
      description: "I'm here to help you take your business to the next level",
      formTitle: 'Send me a message',
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'you@email.com',
      message: 'Message',
      messagePlaceholder: 'Tell me about your project...',
      send: 'Send message',
      sending: 'Sending...',
      successTitle: 'Message sent!',
      successMessage: "I'll get back to you as soon as possible.",
      errorTitle: 'Error',
      errorMessage: 'There was a problem sending the message. Please try again.',
      orContact: 'Or contact me via',
      whatsapp: 'WhatsApp',
      whatsappDesc: 'Quick response',
      calendly: 'Schedule a call',
      calendlyDesc: '30 min meeting',
      emailContact: 'Email',
      emailContactDesc: 'Response in 24h',
      instagram: 'Instagram',
      instagramDesc: '@studiohighimpact',
    },
    // Testimonials
    testimonials: {
      badge: 'Testimonials',
      title: 'What my',
      titleHighlight: 'clients say',
    },
    // Footer
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with',
      in: 'in Argentina',
    },
    // Common
    common: {
      learnMore: 'Learn more',
      getStarted: 'Get started',
      backToHome: 'Back to home',
    },
  },
};
