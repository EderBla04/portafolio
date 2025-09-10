# Guía de uso del CMS para el Portafolio

Esta guía te ayudará a usar el sistema de gestión de contenidos (CMS) Sanity para tu portafolio. Con este sistema podrás añadir, editar y eliminar proyectos sin tocar el código.

## Estructura del Sistema

El CMS está formado por dos partes:

1. **Sanity Studio**: Una interfaz gráfica donde puedes gestionar tus proyectos.
2. **Integración en el Portafolio**: Código que conecta tu sitio web con Sanity para mostrar los proyectos.

## Cómo empezar

### Paso 1: Iniciar Sanity Studio

```
cd studio-portafolio
npm run dev
```

Esto iniciará el panel de administración en `http://localhost:3333`, donde podrás gestionar tus proyectos.

### Paso 2: Acceder al Panel de Administración

Abre `http://localhost:3333` en tu navegador durante el desarrollo local. Aquí puedes:

- Crear nuevos proyectos
- Editar proyectos existentes
- Eliminar proyectos
- Subir imágenes
- Reordenar proyectos

También puedes acceder a Sanity Studio desde cualquier lugar en la web en: `https://ederblanco-portfolio.sanity.studio/` (siempre disponible)

## Integración con tu dominio personalizado

Tu portafolio está alojado en GitHub Pages con el dominio personalizado `ederblanco.dev`. La integración con Sanity CMS funciona de la siguiente manera:

1. Tu sitio web (ederblanco.dev) obtiene los datos de proyectos desde Sanity CMS
2. Los cambios que hagas en el CMS se reflejarán automáticamente en tu sitio web
3. En caso de problemas de conexión, el sitio mostrará los proyectos estáticos de respaldo

## Estructura de un Proyecto

Cada proyecto tiene los siguientes campos:

- **Título**: Nombre del proyecto
- **URL Slug**: Identificador único (se genera automáticamente)
- **Descripción**: Descripción detallada del proyecto
- **Imagen Principal**: Imagen destacada del proyecto
- **Tecnologías**: Lista de tecnologías utilizadas
- **Categoría**: Tipo de proyecto (Web, Mobile, API, etc.)
- **Estado**: Completado, En Progreso, etc.
- **¿Proyecto Destacado?**: Si aparecerá marcado como destacado
- **URL de GitHub**: Enlace al repositorio
- **URL de Demo**: Enlace opcional a una demo
- **Fecha de Inicio**: Cuándo comenzó el proyecto
- **Fecha de Finalización**: Cuándo se completó el proyecto
- **Orden de Visualización**: Número para ordenar los proyectos (menor = aparece primero)

## Cómo crear un nuevo proyecto

1. En Sanity Studio, haz clic en "Project" en el panel izquierdo
2. Haz clic en "Create new"
3. Completa todos los campos requeridos (marcados con *)
4. Haz clic en "Publish" para que el proyecto sea visible en tu portafolio

## Cómo editar un proyecto existente

1. En Sanity Studio, haz clic en "Project" en el panel izquierdo
2. Selecciona el proyecto que deseas editar
3. Realiza los cambios necesarios
4. Haz clic en "Publish" para actualizar el proyecto

## Solución de problemas

Si los proyectos no aparecen en tu portafolio:

1. Verifica que Sanity Studio esté en funcionamiento
2. Asegúrate de haber publicado los proyectos (no solo guardarlos como borrador)
3. Revisa la conexión visitando la página `/admin` en tu portafolio
4. Comprueba que las variables de entorno estén configuradas correctamente

## Sistema de respaldo

Tu portafolio está configurado con un sistema de respaldo. Si hay algún problema con Sanity, automáticamente mostrará los proyectos estáticos definidos en el código.

## Optimización para SEO

Asegúrate de incluir descripciones claras y completas de tus proyectos, ya que esto ayudará a mejorar la visibilidad de tu portafolio en los motores de búsqueda.

## Mantenimiento

Para actualizar Sanity Studio en el futuro:

```
cd studio-portafolio
npm update
```

---

Para cualquier consulta adicional, revisa la [documentación oficial de Sanity](https://www.sanity.io/docs).
