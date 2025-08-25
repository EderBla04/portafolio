# 📋 Lista de Personalización para tu Portafolio

## ✅ Pasos para personalizar tu portafolio

### 1. **Información Personal Básica**
- [ ] Cambiar "Tu Nombre" por tu nombre real en todos los archivos
- [ ] Actualizar tu título profesional (ej: "Desarrollador Full Stack")
- [ ] Modificar tu email: `tu-email@ejemplo.com`
- [ ] Agregar tu número de teléfono
- [ ] Actualizar tu ubicación

### 2. **Redes Sociales y Enlaces**
- [ ] GitHub: `https://github.com/tu-usuario`
- [ ] LinkedIn: `https://linkedin.com/in/tu-usuario`
- [ ] Twitter/X (opcional): `https://twitter.com/tu-usuario`
- [ ] Email de contacto

### 3. **Contenido Personal**

#### Hero Section (`src/components/Hero.astro`)
- [ ] Escribir una descripción personal auténtica
- [ ] Cambiar especialidades y habilidades principales
- [ ] Agregar foto de perfil en `/public/profile-placeholder.jpg`

#### Sobre Mí (`src/components/About.astro`)
- [ ] Escribir tu historia personal y profesional
- [ ] Actualizar tecnologías que realmente conoces
- [ ] Modificar las estadísticas (años de experiencia, proyectos, etc.)
- [ ] Personalizar hobbies e intereses

#### Educación (`src/components/Education.astro`)
- [ ] Agregar tu formación académica real
- [ ] Incluir certificaciones obtenidas
- [ ] Añadir cursos relevantes completados
- [ ] Actualizar fechas y descripciones

### 4. **Proyectos** (`src/data/projects.ts`)
Para cada proyecto real tuyo:
- [ ] Título del proyecto
- [ ] Descripción breve y detallada
- [ ] Tecnologías utilizadas
- [ ] URL del repositorio en GitHub
- [ ] URL del proyecto desplegado (si aplica)
- [ ] Imagen del proyecto (en `/public/projects/`)
- [ ] Categoría (web, mobile, api, etc.)
- [ ] Estado (completado, en progreso, planeado)

### 5. **Archivos a Agregar**
- [ ] CV en PDF: `/public/cv.pdf`
- [ ] Foto de perfil: `/public/profile-placeholder.jpg`
- [ ] Imágenes de proyectos en `/public/projects/`

### 6. **Configuración del Formulario de Contacto**
Elige una opción:
- [ ] **Formspree**: Crear cuenta y configurar endpoint
- [ ] **Netlify Forms**: Agregar atributo netlify al form
- [ ] **EmailJS**: Configurar servicio de email
- [ ] **Otro servicio**: Personalizar script de envío

### 7. **Tecnologías a Personalizar**
Revisa y actualiza las tecnologías en:
- [ ] `src/components/About.astro` (habilidades técnicas)
- [ ] `src/data/projects.ts` (tecnologías de cada proyecto)

### 8. **Colores y Estilo (Opcional)**
Si quieres cambiar el esquema azul/negro:
- [ ] Modificar `tailwind.config.mjs`
- [ ] Actualizar clases de color en componentes

### 9. **SEO y Metadatos**
- [ ] Actualizar título en `src/layouts/Layout.astro`
- [ ] Modificar descripción meta
- [ ] Cambiar favicon si lo deseas

### 10. **Deploy**
- [ ] Elegir plataforma (Vercel, Netlify, GitHub Pages)
- [ ] Configurar deployment automático
- [ ] Probar en producción

## 🔄 Flujo de Trabajo Recomendado

1. **Primero**: Actualiza toda la información personal básica
2. **Segundo**: Agrega tus proyectos reales al archivo `projects.ts`
3. **Tercero**: Sube las imágenes necesarias
4. **Cuarto**: Configura el formulario de contacto
5. **Quinto**: Prueba localmente con `npm run dev`
6. **Sexto**: Deploy a producción

## 📝 Notas Importantes

- **Mantén consistencia** en los enlaces de redes sociales en todos los componentes
- **Optimiza las imágenes** antes de subirlas (tamaño recomendado: máximo 500KB)
- **Prueba el formulario** de contacto después del deploy
- **Revisa el responsive** en diferentes dispositivos
- **Actualiza regularmente** con nuevos proyectos

## 🚀 Comandos Útiles

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Preview del build
npm run preview
```

## ⚡ Tips de Mantenimiento

- Actualiza regularmente con nuevos proyectos
- Mantén las tecnologías listadas actualizadas
- Revisa y mejora el contenido periódicamente
- Considera agregar un blog o sección de artículos
- Implementa analytics para seguimiento de visitas

---

**¡Recuerda que este es TU portafolio! Hazlo único y que refleje tu personalidad profesional.**
