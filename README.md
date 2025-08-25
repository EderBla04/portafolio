# 🚀 Portafolio Personal

Un portafolio moderno y responsivo construido con **Astro** y **Tailwind CSS**, diseñado con un esquema de colores azul y negro para presentar tu perfil profesional de manera elegante.

## ✨ Características

- 🎨 **Diseño moderno** con esquema de colores azul y negro
- 📱 **Completamente responsivo** para todos los dispositivos
- ⚡ **Optimizado para rendimiento** con Astro
- 🎯 **SEO optimizado** con meta tags apropiados
- � **Componentes modulares** fáciles de personalizar
- 🌙 **Animaciones suaves** y efectos de transición
- 📧 **Formulario de contacto** funcional
- � **Integración con redes sociales**

## 🏗️ Estructura del Proyecto

```
/
├── public/
│   ├── favicon.svg
│   └── projects/          # Imágenes de proyectos
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Navigation.astro
│   │   ├── Hero.astro
│   │   ├── About.astro
│   │   ├── Education.astro
│   │   ├── Projects.astro
│   │   ├── Contact.astro
│   │   └── Footer.astro
│   ├── data/             # Datos del sitio
│   │   └── projects.ts   # Información de proyectos
│   ├── layouts/          # Layouts base
│   │   └── Layout.astro
│   └── pages/            # Páginas del sitio
│       └── index.astro
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## 🚀 Inicio Rápido

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Instalación

1. **Instala las dependencias:**
   ```bash
   npm install
   ```

2. **Inicia el servidor de desarrollo:**
   ```bash
   npm run dev
   ```

3. **Abre tu navegador:**
   Visita [http://localhost:4321](http://localhost:4321)

## ⚙️ Personalización

### 📝 Información Personal

Actualiza la siguiente información en los archivos correspondientes:

#### 1. **Navegación y Hero** (`src/components/Navigation.astro` y `src/components/Hero.astro`)
- Cambia "Tu Nombre" por tu nombre real
- Actualiza tu título profesional
- Modifica la descripción personal
- Agrega tu foto de perfil en `/public/profile-placeholder.jpg`

#### 2. **Sobre Mí** (`src/components/About.astro`)
- Personaliza tu historia y descripción
- Actualiza las tecnologías y habilidades
- Modifica las estadísticas personales

#### 3. **Educación** (`src/components/Education.astro`)
- Agrega tu formación académica real
- Incluye certificaciones y cursos
- Personaliza las fechas y descripciones

#### 4. **Proyectos** (`src/data/projects.ts`)
```typescript
export const projects: Project[] = [
  {
    id: 'mi-proyecto-1',
    title: 'Mi Proyecto Increíble',
    description: 'Descripción breve del proyecto',
    longDescription: 'Descripción detallada...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    githubUrl: 'https://github.com/tu-usuario/proyecto',
    liveUrl: 'https://mi-proyecto.com', // Opcional
    image: '/projects/proyecto-1.jpg',
    featured: true,
    category: 'web',
    status: 'completed'
  },
  // Agrega más proyectos...
];
```

#### 5. **Información de Contacto** (`src/components/Contact.astro`)
- Actualiza tu email, teléfono y ubicación
- Modifica los enlaces de redes sociales
- Personaliza el formulario de contacto

#### 6. **Footer** (`src/components/Footer.astro`)
- Actualiza toda la información personal
- Modifica los enlaces y datos de contacto

### 🎨 Personalización de Colores

Si quieres cambiar el esquema de colores, edita `tailwind.config.mjs`:

```javascript
theme: {
  extend: {
    colors: {
      // Cambia estos colores por los de tu preferencia
      primary: {
        400: '#60a5fa', // Azul claro
        600: '#2563eb', // Azul principal
        700: '#1d4ed8', // Azul oscuro
      }
    }
  }
}
```

### 📷 Imágenes

1. **Foto de perfil:** Agrega tu foto en `/public/profile-placeholder.jpg`
2. **Proyectos:** Agrega imágenes de tus proyectos en `/public/projects/`
3. **CV:** Sube tu CV en `/public/cv.pdf`

### 🔗 Redes Sociales

Actualiza todos los enlaces en los componentes:
- GitHub: `https://github.com/tu-usuario`
- LinkedIn: `https://linkedin.com/in/tu-usuario`  
- Email: `tu-email@ejemplo.com`
- Twitter: `https://twitter.com/tu-usuario`

## 📬 Configuración del Formulario de Contacto

El formulario está preparado para funcionar con servicios como:

### Opción 1: Formspree
1. Crea una cuenta en [Formspree](https://formspree.io/)
2. Actualiza el action del formulario en `Contact.astro`

### Opción 2: Netlify Forms
1. Agrega `netlify` al atributo del form
2. Deploy en Netlify

### Opción 3: EmailJS
1. Configura EmailJS
2. Actualiza el script de envío

## 🚀 Despliegue

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Sube la carpeta 'dist' a Netlify
```

### GitHub Pages
```bash
npm run build
# Configura GitHub Actions para deploy automático
```

## 🛠️ Comandos Disponibles

| Comando                | Acción                                      |
| :--------------------- | :------------------------------------------ |
| `npm install`          | Instala dependencias                        |
| `npm run dev`          | Inicia servidor local en `localhost:4321`  |
| `npm run build`        | Build de producción en `./dist/`           |
| `npm run preview`      | Preview del build local                     |
| `npm run astro ...`    | Ejecuta comandos de Astro CLI              |

## � Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipos
- **[Inter Font](https://fonts.google.com/specimen/Inter)** - Tipografía moderna

## 🤝 Contribuciones

Si encuentras algún bug o tienes sugerencias de mejora, no dudes en abrir un issue o pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

---

**¡Hecho con ❤️ para developers!**
