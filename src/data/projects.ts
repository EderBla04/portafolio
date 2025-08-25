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
    id: 'qrgenapi',
    title: 'QRGenAPI',
    description: 'API para generación de códigos QR con múltiples funcionalidades y gestión de datos.',
    longDescription: 'API RESTful desarrollada con Laravel que permite la generación de códigos QR personalizados, gestión de usuarios y almacenamiento de datos. Implementa autenticación, validación de datos y respuestas estructuradas para integración con aplicaciones front-end.',
    technologies: ['Laravel', 'MySQL', 'PHP', 'API REST', 'JWT'],
    githubUrl: 'https://github.com/EderBla04/qrgenapi.git',
    image: '/projects/qrgenapi.jpg',
    featured: true,
    category: 'api',
    status: 'completed'
  },
  {
    id: 'clinica-miel',
    title: 'Clínica Miel',
    description: 'Sistema web completo para gestión de clínica médica con front-end y back-end integrados.',
    longDescription: 'Aplicación web full-stack para la gestión integral de una clínica médica. Incluye registro de pacientes, gestión de citas, historiales médicos, sistema de usuarios con diferentes roles y dashboard administrativo. Desarrollada con Laravel tanto para el front-end como para el back-end.',
    technologies: ['Laravel', 'MySQL', 'PHP', 'Blade', 'Bootstrap', 'JavaScript'],
    githubUrl: 'https://github.com/JuanCarlos0511/proyecto_udm.git',
    image: '/projects/clinica-miel.jpg',
    featured: true,
    category: 'web',
    status: 'completed'
  },
  {
    id: 'gymads',
    title: 'GymADS - Sistema de Administración de Gimnasio',
    description: 'Aplicación móvil con sistema IoT para gestión completa de gimnasio y control de acceso con RFID.',
    longDescription: 'Sistema integral que combina una aplicación móvil desarrollada en Flutter con un circuito IoT basado en ESP32. La app gestiona miembros, rutinas, pagos y estadísticas, mientras que el sistema de hardware controla el acceso mediante tarjetas RFID, con LEDs indicadores, reproducción de audio para feedback y almacenamiento local en microSD. Incluye interfaz SPI para comunicación entre componentes y amplificador de audio para notificaciones sonoras.',
    technologies: ['Flutter', 'Supabase', 'PostgreSQL', 'Dart', 'ESP32', 'RFID MFRC522', 'DFPlayer Mini', 'C++'],
    githubUrl: '',
    image: '/projects/gymads.jpg',
    featured: true,
    category: 'mobile',
    status: 'in-progress'
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
