# 🎨 Guía Completa: Configurar CMS Visual para Proyectos

Esta guía te ayudará a configurar **Sanity CMS** para gestionar tus proyectos de manera visual y sin código.

## 📋 Requisitos Previos
- ✅ Ya tienes las dependencias instaladas
- ✅ Ya tienes el código configurado
- ⚠️ Solo necesitas configurar Sanity

---

## 🚀 Paso 1: Crear Cuenta en Sanity

1. **Ve a https://www.sanity.io/**
2. **Haz clic en "Get started for free"**
3. **Registrate con:**
   - Google/GitHub (recomendado)
   - O con email

---

## 🏗️ Paso 2: Crear Proyecto

1. **Una vez logueado, haz clic en "Create new project"**
2. **Configuración del proyecto:**
   - **Project name:** `Mi Portafolio` (o el nombre que prefieras)
   - **Use schema template:** Selecciona `Clean project with no predefined schemas`
   - **Dataset:** Deja `production` (por defecto)

3. **¡Importante! Guarda el Project ID:**
   - Después de crear el proyecto, verás un **Project ID** (algo como `abc123def`)
   - **Cópialo y guárdalo**, lo necesitaremos después

---

## 🛠️ Paso 3: Configurar el Esquema

1. **En tu proyecto de Sanity, ve a la sección "Schema"**
2. **Haz clic en "Add schema type" o el botón "+"**
3. **Selecciona "Document"**
4. **Copia y pega exactamente este código:**

```javascript
export default {
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: Rule => Rule.required().min(3).max(80)
    },
    {
      name: 'slug',
      title: 'Slug (URL amigable)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'description',
      title: 'Descripción Corta',
      type: 'text',
      rows: 3,
      validation: Rule => Rule.required().min(10).max(200)
    },
    {
      name: 'longDescription',
      title: 'Descripción Detallada',
      type: 'text',
      rows: 6,
      validation: Rule => Rule.required().min(50).max(1000)
    },
    {
      name: 'image',
      title: 'Imagen del Proyecto',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Texto Alternativo',
        }
      ],
      validation: Rule => Rule.required()
    },
    {
      name: 'technologies',
      title: 'Tecnologías Utilizadas',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      },
      validation: Rule => Rule.required().min(1)
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Web', value: 'web'},
          {title: 'Mobile', value: 'mobile'},
          {title: 'Desktop', value: 'desktop'},
          {title: 'API', value: 'api'},
          {title: 'Otros', value: 'other'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'status',
      title: 'Estado del Proyecto',
      type: 'string',
      options: {
        list: [
          {title: 'Completado', value: 'completed'},
          {title: 'En Progreso', value: 'in-progress'},
          {title: 'Planeado', value: 'planned'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'featured',
      title: '¿Proyecto Destacado?',
      type: 'boolean',
      description: 'Los proyectos destacados aparecen primero',
      initialValue: false
    },
    {
      name: 'githubUrl',
      title: 'URL del Repositorio (GitHub)',
      type: 'url',
      validation: Rule => Rule.required().uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'liveUrl',
      title: 'URL del Demo en Vivo (opcional)',
      type: 'url',
      validation: Rule => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'order',
      title: 'Orden de Visualización',
      type: 'number',
      description: 'Número para ordenar los proyectos (menor número = aparece primero)',
      initialValue: 100
    }
  ],
  
  preview: {
    select: {
      title: 'title',
      media: 'image',
      subtitle: 'category',
      featured: 'featured'
    },
    prepare(selection) {
      const {title, media, subtitle, featured} = selection
      return {
        title: `${featured ? '⭐ ' : ''}${title}`,
        media,
        subtitle: `Categoría: ${subtitle || 'Sin categoría'}`
      }
    }
  }
}
```

5. **Guarda el esquema** haciendo clic en "Save" o "Publish"

---

## 🔧 Paso 4: Configurar Variables de Entorno

1. **Crea un archivo `.env` en la raíz de tu proyecto** (junto a `package.json`)
2. **Agrega estas líneas (reemplaza `tu-project-id` con el ID real):**

```bash
PUBLIC_SANITY_PROJECT_ID=tu-project-id-aqui
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

**Ejemplo:**
```bash
PUBLIC_SANITY_PROJECT_ID=abc123def
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

---

## 📝 Paso 5: Agregar tus Primeros Proyectos

1. **En Sanity Studio, ve a "Content"**
2. **Haz clic en el botón "+" o "Create new document"**
3. **Selecciona "Proyecto"**
4. **Llena el formulario:**
   - **Título:** Nombre de tu proyecto
   - **Slug:** Se genera automáticamente (puedes editarlo)
   - **Descripción Corta:** Resumen en 1-2 líneas
   - **Descripción Detallada:** Explicación completa
   - **Imagen:** Arrastra y suelta una imagen
   - **Tecnologías:** Escribe las tecnologías y presiona Enter
   - **Categoría:** Selecciona una opción
   - **Estado:** Selecciona el estado actual
   - **¿Destacado?:** Activa si quieres que aparezca primero
   - **URL GitHub:** Link a tu repositorio
   - **URL Demo:** Link al proyecto en vivo (opcional)

5. **Haz clic en "Publish"**

---

## 🎉 Paso 6: Verificar que Funciona

1. **Guarda todos los archivos en VS Code**
2. **En la terminal, ejecuta:**
   ```bash
   npm run dev
   ```
3. **Ve a http://localhost:4321**
4. **¡Deberías ver tus proyectos desde Sanity!**

---

## 🔄 ¿Cómo Agregar/Editar Proyectos?

### Para agregar nuevos proyectos:
1. Ve a tu Sanity Studio (la URL te la proporciona Sanity)
2. Haz clic en "Content" → "+"
3. Selecciona "Proyecto"
4. Llena el formulario
5. Haz clic en "Publish"
6. ¡Tu sitio se actualiza automáticamente!

### Para editar proyectos existentes:
1. Ve a "Content" en Sanity Studio
2. Haz clic en el proyecto que quieres editar
3. Realiza los cambios
4. Haz clic en "Publish"

### Para eliminar proyectos:
1. Ve al proyecto en Sanity Studio
2. Haz clic en el menú "..." (tres puntos)
3. Selecciona "Delete"

---

## 🆘 ¿Problemas?

### Si no ves los proyectos:
1. Verifica que el Project ID en `.env` sea correcto
2. Verifica que hayas publicado al menos un proyecto en Sanity
3. Revisa la consola del navegador para errores

### Si las imágenes no cargan:
1. Verifica que hayas subido imágenes en Sanity
2. Verifica que el campo 'alt' esté lleno

### Si tienes errores de conexión:
1. Verifica tu conexión a internet
2. Verifica que el Project ID sea correcto
3. Verifica que el dataset sea 'production'

---

## 📱 Acceso al CMS desde Móvil

¡Sanity también funciona desde el móvil! Puedes:
- Acceder desde cualquier navegador
- Editar proyectos
- Subir imágenes
- Publicar cambios

---

## 💰 ¿Es Gratis?

**¡Sí!** Sanity es gratuito para:
- Hasta 3 usuarios
- Hasta 10GB de almacenamiento
- Tráfico ilimitado de API

Perfecto para proyectos personales como tu portafolio.

---

¡Ya tienes todo listo! Ahora puedes gestionar tus proyectos de manera visual y profesional. 🚀
