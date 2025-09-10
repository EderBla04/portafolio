// Respaldo de proyectos estáticos (mantener como fallback)
import { projects as staticProjects } from './projects.ts';
import { getProjects, getFeaturedProjects as getSanityFeaturedProjects, getProjectsByCategory as getSanityProjectsByCategory } from '../lib/sanity.ts';

export interface Project {
  _id?: string;
  id?: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string | any; // Puede ser string o objeto de Sanity
  featured: boolean;
  category: 'web' | 'mobile' | 'desktop' | 'api' | 'other';
  status: 'completed' | 'in-progress' | 'planned';
  slug?: string;
}

// Función para obtener todos los proyectos (Sanity + fallback estático)
export async function getAllProjects(): Promise<Project[]> {
  try {
    const sanityProjects = await getProjects();
    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects;
    }
    // Fallback a proyectos estáticos si Sanity no está disponible
    return staticProjects;
  } catch (error) {
    console.warn('Usando proyectos estáticos como fallback:', error);
    return staticProjects;
  }
}

// Función para obtener proyectos destacados
export async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const sanityFeatured = await getSanityFeaturedProjects();
    if (sanityFeatured && sanityFeatured.length > 0) {
      return sanityFeatured;
    }
    // Fallback
    return staticProjects.filter(project => project.featured);
  } catch (error) {
    console.warn('Usando proyectos estáticos destacados como fallback:', error);
    return staticProjects.filter(project => project.featured);
  }
}

// Función para obtener proyectos por categoría
export async function getProjectsByCategory(category: string): Promise<Project[]> {
  try {
    const sanityByCategory = await getSanityProjectsByCategory(category);
    if (sanityByCategory && sanityByCategory.length > 0) {
      return sanityByCategory;
    }
    // Fallback
    return staticProjects.filter(project => project.category === category);
  } catch (error) {
    console.warn('Usando proyectos estáticos por categoría como fallback:', error);
    return staticProjects.filter(project => project.category === category);
  }
}

// Función para obtener un proyecto por ID o slug
export async function getProjectById(idOrSlug: string): Promise<Project | undefined> {
  try {
    const allProjects = await getAllProjects();
    return allProjects.find(project => 
      project._id === idOrSlug || 
      project.id === idOrSlug || 
      project.slug === idOrSlug
    );
  } catch (error) {
    console.warn('Error al buscar proyecto:', error);
    return staticProjects.find(project => project.id === idOrSlug);
  }
}
