/**
 * SCRIPT DE MIGRACIÓN - PROYECTOS ESTÁTICOS A SANITY
 * 
 * Este script te ayuda a migrar tus proyectos existentes a Sanity CMS.
 * 
 * INSTRUCCIONES DE USO:
 * 1. Primero configura Sanity siguiendo la GUIA-CMS.md
 * 2. Asegúrate de tener las variables de entorno configuradas
 * 3. Ejecuta este script con: node migrate-to-sanity.js
 * 
 * El script:
 * - Lee los proyectos estáticos de projects.ts
 * - Los convierte al formato de Sanity
 * - Los sube automáticamente a tu CMS
 */

import { createClient } from '@sanity/client';
import { projects } from './src/data/projects.ts';

// Configuración del cliente (asegúrate de tener las variables de entorno)
const client = createClient({
  projectId: process.env.PUBLIC_SANITY_PROJECT_ID || 'tu-project-id',
  dataset: process.env.PUBLIC_SANITY_DATASET || 'production',
  useCdn: false, // Para escritura, no usar CDN
  token: process.env.SANITY_WRITE_TOKEN, // Token de escritura (lo necesitarás crear)
  apiVersion: '2024-01-01'
});

async function migrateProjects() {
  console.log('🚀 Iniciando migración de proyectos a Sanity...\n');
  
  if (!process.env.PUBLIC_SANITY_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID === 'tu-project-id') {
    console.error('❌ Error: Configura las variables de entorno en .env primero');
    console.log('📖 Lee la GUIA-CMS.md para más información');
    return;
  }

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ Error: Necesitas un token de escritura de Sanity');
    console.log('📝 Crea uno en: https://www.sanity.io/manage');
    console.log('   1. Ve a tu proyecto');
    console.log('   2. API > Tokens');
    console.log('   3. Add API Token > Editor');
    console.log('   4. Agrega SANITY_WRITE_TOKEN=tu-token en .env');
    return;
  }

  try {
    let successCount = 0;
    let errorCount = 0;

    for (const project of projects) {
      try {
        console.log(`📦 Migrando: ${project.title}...`);
        
        // Convertir el proyecto al formato de Sanity
        const sanityProject = {
          _type: 'project',
          title: project.title,
          slug: {
            _type: 'slug',
            current: project.id
          },
          description: project.description,
          longDescription: project.longDescription,
          technologies: project.technologies,
          category: project.category,
          status: project.status,
          featured: project.featured,
          githubUrl: project.githubUrl,
          liveUrl: project.liveUrl || undefined,
          order: 100, // Orden por defecto
          // Nota: La imagen deberás subirla manualmente en Sanity Studio
          // porque requiere procesamiento especial
        };

        // Crear el documento en Sanity
        const result = await client.create(sanityProject);
        
        console.log(`   ✅ Migrado con ID: ${result._id}`);
        successCount++;
        
      } catch (projectError) {
        console.error(`   ❌ Error migrando ${project.title}:`, projectError.message);
        errorCount++;
      }
    }

    console.log('\n🎉 Migración completada!');
    console.log(`✅ Proyectos migrados exitosamente: ${successCount}`);
    console.log(`❌ Errores: ${errorCount}`);
    
    if (successCount > 0) {
      console.log('\n📝 Siguiente paso:');
      console.log('   1. Ve a tu Sanity Studio');
      console.log('   2. Agrega las imágenes a cada proyecto');
      console.log('   3. Verifica que todo se vea bien');
      console.log('   4. ¡Publica los cambios!');
    }

  } catch (error) {
    console.error('❌ Error general en la migración:', error.message);
    console.log('\n🔧 Posibles soluciones:');
    console.log('   - Verifica las variables de entorno');
    console.log('   - Verifica la conexión a internet');
    console.log('   - Verifica que el token tenga permisos de escritura');
  }
}

// Función para verificar la conexión antes de migrar
async function verifyConnection() {
  try {
    console.log('🔍 Verificando conexión con Sanity...');
    const projects = await client.fetch('*[_type == "project"]');
    console.log(`✅ Conexión exitosa. Proyectos existentes: ${projects.length}`);
    
    if (projects.length > 0) {
      console.log('⚠️  Ya tienes proyectos en Sanity. ¿Quieres continuar? (Ctrl+C para cancelar)');
      // Esperar 3 segundos antes de continuar
      await new Promise(resolve => setTimeout(resolve, 3000));
    }
    
    return true;
  } catch (error) {
    console.error('❌ Error de conexión:', error.message);
    return false;
  }
}

// Ejecutar migración
(async () => {
  const isConnected = await verifyConnection();
  if (isConnected) {
    await migrateProjects();
  }
})();

export { migrateProjects };
