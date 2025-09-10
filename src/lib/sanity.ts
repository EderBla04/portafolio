import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Configuración del cliente Sanity
export const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'tu-project-id', // Lo configuraremos después
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: true, // Para mejor rendimiento
  apiVersion: '2024-01-01', // Usa la fecha actual
});

// Builder para URLs de imágenes
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Función para obtener todos los proyectos desde Sanity
export async function getProjects() {
  try {
    const projects = await client.fetch(`
      *[_type == "project"] | order(featured desc, _createdAt desc) {
        _id,
        title,
        description,
        longDescription,
        technologies,
        githubUrl,
        liveUrl,
        image,
        featured,
        category,
        status,
        "slug": slug.current
      }
    `);
    return projects;
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    return [];
  }
}

// Función para obtener proyectos destacados
export async function getFeaturedProjects() {
  try {
    const projects = await client.fetch(`
      *[_type == "project" && featured == true] | order(_createdAt desc) {
        _id,
        title,
        description,
        longDescription,
        technologies,
        githubUrl,
        liveUrl,
        image,
        featured,
        category,
        status,
        "slug": slug.current
      }
    `);
    return projects;
  } catch (error) {
    console.error('Error al obtener proyectos destacados:', error);
    return [];
  }
}

// Función para obtener proyectos por categoría
export async function getProjectsByCategory(category: string) {
  try {
    const projects = await client.fetch(`
      *[_type == "project" && category == $category] | order(_createdAt desc) {
        _id,
        title,
        description,
        longDescription,
        technologies,
        githubUrl,
        liveUrl,
        image,
        featured,
        category,
        status,
        "slug": slug.current
      }
    `, { category });
    return projects;
  } catch (error) {
    console.error('Error al obtener proyectos por categoría:', error);
    return [];
  }
}
