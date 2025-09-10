# 🎨 CMS para Proyectos - Configuración Completa

## 🎯 ¿Qué hemos agregado?

Tu portafolio ahora incluye un **CMS visual y gratuito** con **Sanity** que te permite:

✅ **Agregar proyectos** desde una interfaz gráfica  
✅ **Editar información** sin tocar código  
✅ **Subir imágenes** con arrastrar y soltar  
✅ **Organizar por categorías** automáticamente  
✅ **Marcar proyectos destacados**  
✅ **Gestionar desde cualquier dispositivo**  

---

## 📁 Archivos Nuevos Agregados

```
portafolio/
├── src/
│   ├── lib/
│   │   └── sanity.ts                    # 🔗 Conexión con Sanity
│   ├── data/
│   │   └── projectsManager.ts           # 🔄 Gestor híbrido (Sanity + estático)
│   └── pages/
│       └── admin.astro                  # 📊 Panel de estado del CMS
├── .env.example                         # 🔧 Plantilla de configuración
├── sanity-schema-example.js             # 📋 Esquema para copiar en Sanity
├── migrate-to-sanity.js                 # 🚀 Script de migración
├── GUIA-CMS.md                          # 📖 Guía paso a paso
└── CMS-README.md                        # 📄 Este archivo
```

---

## 🚀 ¿Cómo empezar? - RESUMEN RÁPIDO

### 1️⃣ Configurar Sanity (5 minutos)
```bash
# 1. Ve a https://sanity.io y crea cuenta
# 2. Crea proyecto → Copia el Project ID
# 3. Crea archivo .env con:
PUBLIC_SANITY_PROJECT_ID=tu-project-id
PUBLIC_SANITY_DATASET=production
PUBLIC_SANITY_API_VERSION=2024-01-01
```

### 2️⃣ Configurar Esquema (2 minutos)
```bash
# 1. En Sanity Studio → Schema → Add schema type
# 2. Copia el código de sanity-schema-example.js
# 3. Pega y guarda
```

### 3️⃣ Probar que funciona
```bash
npm run dev
# Ve a http://localhost:4321/admin para ver el estado
```

---

## 📚 Enlaces Útiles

| Qué necesitas | Enlace |
|---------------|--------|
| **Guía completa paso a paso** | [`GUIA-CMS.md`](./GUIA-CMS.md) |
| **Ver estado del CMS** | `http://localhost:4321/admin` |
| **Sanity Studio** | `https://tu-project-id.sanity.studio` |
| **Crear cuenta Sanity** | https://sanity.io |

---

## 🔄 ¿Cómo funciona el sistema híbrido?

El sistema está diseñado para ser **100% seguro**:

1. **Si Sanity está configurado** → Usa los proyectos del CMS
2. **Si Sanity no funciona** → Usa los proyectos estáticos (backup)
3. **Nunca se rompe** → Siempre muestra algo

```javascript
// El código detecta automáticamente qué usar
const projects = await getAllProjects(); // Sanity o estático
```

---

## 🎯 Flujo de Trabajo Recomendado

### Para agregar un proyecto nuevo:
1. **Ve a Sanity Studio** (interfaz gráfica)
2. **Haz clic en "Create" → "Proyecto"**
3. **Llena el formulario** (título, descripción, imagen, etc.)
4. **Haz clic en "Publish"**
5. **¡Listo!** Se actualiza automáticamente

### Para editar un proyecto:
1. **Ve a Sanity Studio**
2. **Busca el proyecto**
3. **Edita lo que necesites**
4. **Haz clic en "Publish"**

### Para eliminar un proyecto:
1. **Ve a Sanity Studio**
2. **Abre el proyecto**
3. **Menú "..." → "Delete"**

---

## 🛠️ Scripts Útiles

```bash
# Desarrollo normal
npm run dev

# Ver panel de administración
npm run admin

# Migrar proyectos estáticos a Sanity (opcional)
npm run migrate
```

---

## ❓ Preguntas Frecuentes

### ¿Es gratis?
**Sí**, Sanity es gratis para proyectos personales (hasta 3 usuarios, 10GB)

### ¿Necesito saber código?
**No**, una vez configurado, todo es visual (formularios, arrastrar imágenes, etc.)

### ¿Funciona en móvil?
**Sí**, puedes gestionar proyectos desde cualquier dispositivo

### ¿Y si Sanity no funciona?
**No problem**, automáticamente usa los proyectos estáticos (backup)

### ¿Puedo volver atrás?
**Sí**, solo elimina los archivos nuevos y todo vuelve como antes

---

## 🔧 Solución de Problemas

### No veo proyectos en el sitio:
1. Verifica el Project ID en `.env`
2. Verifica que tengas proyectos publicados en Sanity
3. Ve a `/admin` para ver el estado

### Error de conexión:
1. Verifica conexión a internet
2. Verifica que el Project ID sea correcto
3. Verifica que el dataset sea 'production'

### Imágenes no cargan:
1. Verifica que subiste la imagen en Sanity
2. Verifica que completaste el campo 'alt text'

---

## 🎉 ¡Ya está todo listo!

Solo necesitas seguir la [**GUIA-CMS.md**](./GUIA-CMS.md) paso a paso y en 10 minutos tendrás tu CMS funcionando.

**¿Alguna duda?** Revisa la guía completa o el panel de admin en `/admin`.
