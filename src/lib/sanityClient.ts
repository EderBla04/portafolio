import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

// Tipo para las imágenes de Sanity
type SanityImageSource = {
  asset?: {
    _ref?: string;
    _id?: string;
  };
  _type?: string;
  [key: string]: any;
};

// Crear el cliente de Sanity directamente para evitar problemas con useSanityClient
const sanityClient = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID || '2a5byq8s',
  dataset: import.meta.env.PUBLIC_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.PUBLIC_SANITY_API_VERSION || '2023-03-20',
  useCdn: false, // `false` si quieres datos frescos
});

// Crear el builder de imágenes
const builder = imageUrlBuilder(sanityClient);

// Función para construir URLs de imágenes
export function urlFor(source: SanityImageSource) {
  if (!source) return null;
  try {
    return builder.image(source);
  } catch (error) {
    console.error("Error al construir URL de imagen:", error);
    return null;
  }
}

// Obtener todos los proyectos
export async function getAllProjects() {
  try {
    const projects = await sanityClient.fetch(`
      *[_type == "project"] | order(order asc, featured desc, _createdAt desc) {
        _id,
        title,
        slug,
        description,
        image,
        technologies,
        category,
        status,
        featured,
        githubUrl,
        demoUrl,
        startDate,
        endDate,
        order
      }
    `);
    return Array.isArray(projects) && projects.length > 0 ? projects : getStaticProjects();
  } catch (error) {
    console.error("Error al obtener proyectos de Sanity:", error);
    // Si hay un error, usamos los proyectos estáticos de fallback
    return getStaticProjects();
  }
}

// Obtener solo proyectos destacados
export async function getFeaturedProjects() {
  try {
    const projects = await sanityClient.fetch(`
      *[_type == "project" && featured == true] | order(order asc, _createdAt desc) {
        _id,
        title,
        slug,
        description,
        image,
        technologies,
        category,
        status,
        featured,
        githubUrl,
        demoUrl
      }
    `);
    return projects;
  } catch (error) {
    console.error("Error al obtener proyectos destacados de Sanity:", error);
    // Si hay un error, filtramos los proyectos estáticos
    const staticProjects = getStaticProjects();
    return staticProjects.filter(p => p.featured);
  }
}

// Obtener proyectos por categoría
export async function getProjectsByCategory(category: string) {
  try {
    const projects = await sanityClient.fetch(`
      *[_type == "project" && category == $category] | order(order asc, featured desc, _createdAt desc) {
        _id,
        title,
        slug,
        description,
        image,
        technologies,
        category,
        status,
        featured,
        githubUrl,
        demoUrl
      }
    `, { category });
    return projects;
  } catch (error) {
    console.error(`Error al obtener proyectos de categoría ${category}:`, error);
    // Si hay un error, filtramos los proyectos estáticos
    const staticProjects = getStaticProjects();
    return staticProjects.filter(p => p.category === category);
  }
}

// Proyectos estáticos de respaldo
function getStaticProjects() {
  return [
    {
      _id: "qrgenapi",
      title: "QRGenAPI",
      description: "API para generación de códigos QR con múltiples funcionalidades y gestión de datos.",
      image: "/projects/qrgenapi.jpg",
      technologies: ["Laravel", "MySQL", "PHP", "API REST", "JWT"],
      category: "api",
      status: "completed",
      featured: true,
      githubUrl: "https://github.com/EderBla04/qrgenapi.git",
      demoUrl: ""
    },
    {
      _id: "clinica-miel",
      title: "Clínica Miel",
      description: "Sistema web completo para gestión de clínica médica con front-end y back-end integrados.",
      image: "/projects/clinica-miel.jpg",
      technologies: ["Laravel", "MySQL", "PHP", "Blade", "Bootstrap", "JavaScript"],
      category: "web",
      status: "completed",
      featured: true,
      githubUrl: "https://github.com/JuanCarlos0511/proyecto_udm.git",
      demoUrl: ""
    },
    {
      _id: "gymads",
      title: "GymADS - Sistema de Administración de Gimnasio",
      description: "Aplicación móvil con sistema IoT para gestión completa de gimnasio y control de acceso con RFID.",
      image: "/projects/gymads.jpg",
      technologies: ["Flutter", "Supabase", "PostgreSQL", "Dart", "ESP32", "RFID MFRC522", "DFPlayer Mini", "C++"],
      category: "mobile",
      status: "in-progress",
      featured: true,
      githubUrl: "",
      demoUrl: ""
    }
  ];
}
