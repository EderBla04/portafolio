import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
// Importar proyectos estáticos desde projects.ts
import { projects as projectsData } from '../data/projects.ts';

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
  useCdn: true, // true para mejor rendimiento y cache
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

// Obtener todos los proyectos (combina estáticos y CMS)
export async function getAllProjects() {
  try {
    console.log('Intentando conectar con Sanity...');
    console.log('Project ID:', import.meta.env.PUBLIC_SANITY_PROJECT_ID || '2a5byq8s');
    console.log('Dataset:', import.meta.env.PUBLIC_SANITY_DATASET || 'production');
    
    const cmsProjects = await sanityClient.fetch(`
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
        "githubUrl": coalesce(githubUrl, ""),
        "demoUrl": coalesce(demoUrl, ""),
        startDate,
        endDate,
        order
      }
    `);
    
    console.log('Proyectos obtenidos de Sanity:', cmsProjects?.length || 0);
    
    // Siempre obtener proyectos estáticos
    const staticProjects = getStaticProjects();
    console.log('Proyectos estáticos:', staticProjects.length);
    
    // Combinar proyectos estáticos con los de CMS
    const allProjects = [...staticProjects];
    
    if (Array.isArray(cmsProjects) && cmsProjects.length > 0) {
      allProjects.push(...cmsProjects);
    }
    
    console.log('Total de proyectos:', allProjects.length);
    return allProjects;
  } catch (error) {
    console.error("Error al obtener proyectos de Sanity:", error);
    // Si hay un error, al menos mostramos los proyectos estáticos
    return getStaticProjects();
  }
}

// Obtener solo proyectos destacados (combina estáticos y CMS)
export async function getFeaturedProjects() {
  try {
    const cmsProjects = await sanityClient.fetch(`
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
        "githubUrl": coalesce(githubUrl, ""),
        "demoUrl": coalesce(demoUrl, "")
      }
    `);
    
    // Siempre obtener proyectos estáticos destacados
    const staticFeaturedProjects = getStaticProjects().filter(p => p.featured);
    
    // Combinar proyectos estáticos destacados con los de CMS
    const allFeaturedProjects = [...staticFeaturedProjects];
    
    if (Array.isArray(cmsProjects) && cmsProjects.length > 0) {
      allFeaturedProjects.push(...cmsProjects);
    }
    
    return allFeaturedProjects;
  } catch (error) {
    console.error("Error al obtener proyectos destacados de Sanity:", error);
    // Si hay un error, filtramos los proyectos estáticos
    const staticProjects = getStaticProjects();
    return staticProjects.filter(p => p.featured);
  }
}

// Obtener proyectos por categoría (combina estáticos y CMS)
export async function getProjectsByCategory(category: string) {
  try {
    const cmsProjects = await sanityClient.fetch(`
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
        "githubUrl": coalesce(githubUrl, ""),
        "demoUrl": coalesce(demoUrl, "")
      }
    `, { category });
    
    // Siempre obtener proyectos estáticos de la categoría
    const staticCategoryProjects = getStaticProjects().filter(p => p.category === category);
    
    // Combinar proyectos estáticos con los de CMS
    const allCategoryProjects = [...staticCategoryProjects];
    
    if (Array.isArray(cmsProjects) && cmsProjects.length > 0) {
      allCategoryProjects.push(...cmsProjects);
    }
    
    return allCategoryProjects;
  } catch (error) {
    console.error(`Error al obtener proyectos de categoría ${category}:`, error);
    // Si hay un error, filtramos los proyectos estáticos
    const staticProjects = getStaticProjects();
    return staticProjects.filter(p => p.category === category);
  }
}

// Proyectos estáticos de respaldo importados desde projects.ts
function getStaticProjects() {
  // Transformamos los proyectos importados al formato esperado por la aplicación
  return projectsData.map(project => ({
    _id: project.id,
    title: project.title,
    description: project.description,
    image: project.image,
    technologies: project.technologies,
    category: project.category,
    status: project.status,
    featured: project.featured,
    githubUrl: project.githubUrl,
    demoUrl: project.liveUrl || ""
  }));
}
