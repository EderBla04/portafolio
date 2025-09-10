# Integración de Sanity CMS - Guía de Implementación

Hemos implementado exitosamente Sanity CMS en tu portafolio. A continuación, te explicamos los cambios realizados y cómo usar el sistema.

## Cambios Realizados

1. **Cliente Sanity**: 
   - Configurado en `src/lib/sanityClient.ts`
   - Usa el método `createClient` para conectar con tu proyecto Sanity
   - Incluye funciones para obtener proyectos y procesar imágenes

2. **Componente de Proyectos**:
   - Actualizado para usar datos de Sanity con fallback a datos estáticos
   - Mejorado el manejo de imágenes para soportar diferentes formatos

3. **Página de Admin**:
   - Creada en `src/pages/admin.astro`
   - Muestra el estado de conexión con Sanity
   - Lista los proyectos cargados
   - Proporciona enlaces útiles

4. **Documentación**:
   - Creada guía de uso en `public/GUIA-CMS.md`
   - Incluye instrucciones para crear y editar proyectos

5. **Sanity Studio**:
   - Configurado en la carpeta `studio-portafolio`
   - Incluye esquema para proyectos con todos los campos necesarios

## Cómo Iniciar el Sistema

1. **Inicia Sanity Studio**:
   ```
   cd studio-portafolio
   npm run dev
   ```
   Esto iniciará el panel en http://localhost:3333

2. **Inicia tu Portafolio**:
   ```
   cd ..
   npm run dev
   ```
   Tu portafolio estará disponible en http://localhost:4321

3. **Accede al panel de Admin**:
   - Visita http://localhost:4321/admin
   - Verifica el estado de conexión con Sanity

## Gestión de Proyectos

1. **Crear un Proyecto**:
   - Ve a Sanity Studio (http://localhost:3333)
   - Haz clic en "Project" en el panel izquierdo
   - Haz clic en "Create new"
   - Completa los campos requeridos
   - Haz clic en "Publish"

2. **Editar un Proyecto**:
   - Ve a Sanity Studio
   - Selecciona el proyecto a editar
   - Realiza los cambios
   - Haz clic en "Publish"

## Estructura de Datos

Cada proyecto tiene estos campos:

- **Título**: Nombre del proyecto
- **URL Slug**: Identificador único
- **Descripción**: Descripción detallada
- **Imagen Principal**: Imagen destacada
- **Tecnologías**: Lista de tecnologías
- **Categoría**: Tipo de proyecto (Web, Mobile, API, etc.)
- **Estado**: Completado, En Progreso, etc.
- **¿Proyecto Destacado?**: Si aparece marcado como destacado
- **URL de GitHub**: Enlace al repositorio
- **URL de Demo**: Enlace a demo (opcional)
- **Fecha de Inicio**: Cuándo comenzó el proyecto
- **Fecha de Finalización**: Cuándo se completó
- **Orden de Visualización**: Prioridad (menor = primero)

## Sistema de Respaldo

Si hay problemas con Sanity, el sistema automáticamente mostrará los proyectos estáticos definidos en el código. Esto asegura que tu portafolio siempre muestre contenido, incluso si hay problemas con el CMS.

## Soporte de SEO

Los datos estructurados de Sanity ayudan a mejorar el SEO de tu portafolio. Asegúrate de incluir descripciones completas y relevantes para cada proyecto.

## Problemas Conocidos y Soluciones

- **Imágenes no se cargan**: Asegúrate de subir imágenes en formatos comunes (JPG, PNG, WebP)
- **Proyectos no aparecen**: Verifica que estén publicados, no solo guardados como borrador
- **Errores de conexión**: Comprueba que Sanity Studio esté en ejecución

## Recursos Adicionales

- [Documentación oficial de Sanity](https://www.sanity.io/docs)
- [Guía de uso del CMS](/GUIA-CMS.md)
- [Panel de Sanity Studio](https://2a5byq8s.sanity.studio/)
