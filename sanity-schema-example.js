/**
 * ESQUEMA DE SANITY PARA PROYECTOS
 * 
 * Este archivo contiene el esquema que necesitas configurar en Sanity Studio.
 * 
 * INSTRUCCIONES:
 * 1. Ve a https://www.sanity.io/
 * 2. Crea una cuenta gratuita
 * 3. Crea un nuevo proyecto
 * 4. En el Studio, ve a "Schemas" y agrega este esquema
 */

export const projectSchema = {
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
  },
  
  orderings: [
    {
      title: 'Destacados primero',
      name: 'featuredFirst',
      by: [
        {field: 'featured', direction: 'desc'},
        {field: 'order', direction: 'asc'},
        {field: '_createdAt', direction: 'desc'}
      ]
    },
    {
      title: 'Más recientes',
      name: 'newest',
      by: [{field: '_createdAt', direction: 'desc'}]
    },
    {
      title: 'Por orden personalizado',
      name: 'customOrder',
      by: [{field: 'order', direction: 'asc'}]
    }
  ]
}

// También necesitarás configurar el esquema principal (schema.js o schema.ts)
export const schemaTypes = [projectSchema]
