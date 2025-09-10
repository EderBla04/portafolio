export default {
  name: 'project',
  title: 'Proyecto',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Título del Proyecto',
      type: 'string',
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'slug',
      title: 'URL Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 4,
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'image',
      title: 'Imagen Principal',
      type: 'image',
      options: {
        hotspot: true
      },
      fields: [
        {
          name: 'alt',
          title: 'Texto Alternativo',
          type: 'string',
          validation: (Rule: any) => Rule.required()
        }
      ]
    },
    {
      name: 'technologies',
      title: 'Tecnologías',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          {title: 'Desarrollo Web', value: 'web'},
          {title: 'Aplicación Móvil', value: 'mobile'},
          {title: 'Diseño UI/UX', value: 'design'},
          {title: 'Backend/API', value: 'backend'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Otro', value: 'other'}
        ],
        layout: 'radio'
      },
      validation: (Rule: any) => Rule.required()
    },
    {
      name: 'status',
      title: 'Estado del Proyecto',
      type: 'string',
      options: {
        list: [
          {title: 'Completado', value: 'completed'},
          {title: 'En Progreso', value: 'in-progress'},
          {title: 'Pausado', value: 'paused'},
          {title: 'Cancelado', value: 'cancelled'}
        ],
        layout: 'radio'
      },
      initialValue: 'completed'
    },
    {
      name: 'featured',
      title: '¿Proyecto Destacado?',
      type: 'boolean',
      description: 'Los proyectos destacados aparecen primero en el portafolio',
      initialValue: false
    },
    {
      name: 'githubUrl',
      title: 'URL de GitHub',
      type: 'url',
      validation: (Rule: any) => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'demoUrl',
      title: 'URL de Demo',
      type: 'url',
      validation: (Rule: any) => Rule.uri({
        scheme: ['http', 'https']
      })
    },
    {
      name: 'startDate',
      title: 'Fecha de Inicio',
      type: 'date'
    },
    {
      name: 'endDate',
      title: 'Fecha de Finalización',
      type: 'date'
    },
    {
      name: 'order',
      title: 'Orden de Visualización',
      type: 'number',
      description: 'Número para ordenar los proyectos (menor número = aparece primero)',
      initialValue: 0
    }
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
      category: 'category',
      status: 'status'
    },
    prepare(selection: any) {
      const {title, media, category, status} = selection
      const categoryLabels: any = {
        web: 'Web',
        mobile: 'Mobile',
        design: 'Diseño',
        backend: 'Backend',
        devops: 'DevOps',
        other: 'Otro'
      }
      const statusLabels: any = {
        completed: '✅',
        'in-progress': '🚧',
        paused: '⏸️',
        cancelled: '❌'
      }
      return {
        title: title,
        subtitle: `${categoryLabels[category] || category} ${statusLabels[status] || ''}`,
        media: media
      }
    }
  },
  orderings: [
    {
      title: 'Orden Manual',
      name: 'manualOrder',
      by: [
        {field: 'order', direction: 'asc'},
        {field: 'featured', direction: 'desc'}
      ]
    },
    {
      title: 'Más Recientes Primero',
      name: 'dateDesc',
      by: [
        {field: 'endDate', direction: 'desc'},
        {field: 'startDate', direction: 'desc'}
      ]
    }
  ]
}