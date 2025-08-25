// Datos de proyectos - Personaliza esta información con tus proyectos reales
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
}

export const projects: Project[] = [
  {
    id: 'proyecto-1',
    title: 'Aplicación Web Full Stack',
    description: 'Una aplicación web completa con autenticación, dashboard y API REST.',
    longDescription: 'Descripción detallada del proyecto, los desafíos enfrentados, las soluciones implementadas y los resultados obtenidos.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Tailwind CSS'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-1',
    liveUrl: 'https://proyecto-1.vercel.app',
    image: '/projects/proyecto-1.jpg',
    featured: true,
    category: 'web',
    status: 'completed'
  },
  {
    id: 'proyecto-2',
    title: 'API RESTful con Microservicios',
    description: 'API escalable utilizando arquitectura de microservicios y contenedores.',
    longDescription: 'Desarrollo de una API RESTful robusta con múltiples servicios, implementación de Docker, CI/CD y documentación completa.',
    technologies: ['Python', 'FastAPI', 'Docker', 'PostgreSQL', 'Redis'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-2',
    image: '/projects/proyecto-2.jpg',
    featured: true,
    category: 'api',
    status: 'completed'
  },
  {
    id: 'proyecto-3',
    title: 'Aplicación Mobile Híbrida',
    description: 'App móvil multiplataforma con características nativas y offline.',
    longDescription: 'Aplicación móvil desarrollada con tecnologías híbridas, implementando funcionalidades offline, push notifications y sincronización de datos.',
    technologies: ['React Native', 'TypeScript', 'SQLite', 'Firebase'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-3',
    image: '/projects/proyecto-3.jpg',
    featured: false,
    category: 'mobile',
    status: 'completed'
  },
  {
    id: 'proyecto-4',
    title: 'Dashboard de Analytics',
    description: 'Dashboard interactivo para visualización de datos en tiempo real.',
    longDescription: 'Panel de control con gráficos interactivos, filtros avanzados y actualizaciones en tiempo real para el análisis de datos empresariales.',
    technologies: ['Vue.js', 'D3.js', 'WebSocket', 'MongoDB', 'Express'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-4',
    liveUrl: 'https://analytics-dashboard.vercel.app',
    image: '/projects/proyecto-4.jpg',
    featured: false,
    category: 'web',
    status: 'completed'
  },
  {
    id: 'proyecto-5',
    title: 'Sistema de Gestión',
    description: 'Sistema completo de gestión empresarial con múltiples módulos.',
    longDescription: 'Sistema integral para la gestión de inventarios, ventas, clientes y reportes, con roles de usuario y auditoría completa.',
    technologies: ['Angular', 'Spring Boot', 'MySQL', 'JWT', 'Bootstrap'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-5',
    image: '/projects/proyecto-5.jpg',
    featured: false,
    category: 'web',
    status: 'in-progress'
  },
  {
    id: 'proyecto-6',
    title: 'CLI Tool',
    description: 'Herramienta de línea de comandos para automatización de tareas.',
    longDescription: 'Utility CLI desarrollada para automatizar tareas repetitivas del desarrollo, con configuración flexible y extensible.',
    technologies: ['Python', 'Click', 'YAML', 'GitHub Actions'],
    githubUrl: 'https://github.com/tu-usuario/proyecto-6',
    image: '/projects/proyecto-6.jpg',
    featured: false,
    category: 'other',
    status: 'completed'
  }
];

// Función para obtener proyectos destacados
export const getFeaturedProjects = () => projects.filter(project => project.featured);

// Función para obtener proyectos por categoría
export const getProjectsByCategory = (category: string) => 
  projects.filter(project => project.category === category);

// Función para obtener un proyecto por ID
export const getProjectById = (id: string) => 
  projects.find(project => project.id === id);
