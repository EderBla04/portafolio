# Flujo de trabajo para desarrollo y despliegue

Este documento explica cómo utilizar correctamente el flujo de git para el desarrollo y despliegue de tu portafolio.

## Estructura de ramas

- **`main`**: Rama de producción. Los cambios aquí se despliegan automáticamente a GitHub Pages.
- **`feat/cms`**: Rama de desarrollo para nuevas características (u otras ramas de características).

## Flujo de trabajo recomendado

### 1. Desarrollo de nuevas características

1. **Trabaja siempre en una rama de desarrollo**:
   ```bash
   # Asegúrate de estar en la rama correcta
   git checkout feat/cms
   
   # O crea una nueva rama para una característica específica
   git checkout -b feature/nueva-caracteristica
   ```

2. **Realiza tus cambios y haz commits frecuentes**:
   ```bash
   git add .
   git commit -m "Descripción clara del cambio"
   ```

3. **Sube tus cambios a la rama de desarrollo**:
   ```bash
   git push origin feat/cms
   ```

### 2. Despliegue a producción

Cuando estés listo para desplegar tus cambios a producción:

1. **Asegúrate de que tu rama de desarrollo está actualizada**:
   ```bash
   git checkout feat/cms
   git pull origin feat/cms
   ```

2. **Fusiona los cambios en la rama principal**:
   ```bash
   # Cambia a la rama principal
   git checkout main
   
   # Asegúrate de que está actualizada
   git pull origin main
   
   # Fusiona los cambios de tu rama de desarrollo
   git merge feat/cms
   
   # Sube los cambios a la rama principal
   git push origin main
   ```

3. **Espera a que se complete el despliegue**:
   - GitHub Actions ejecutará automáticamente el flujo de trabajo de despliegue
   - Puedes seguir el progreso en la pestaña "Actions" de tu repositorio de GitHub

4. **Vuelve a tu rama de desarrollo**:
   ```bash
   git checkout feat/cms
   ```

### 3. Obtener cambios de producción en tu rama de desarrollo

Si se han realizado cambios directamente en la rama `main` (por ejemplo, por otro colaborador):

```bash
# Cambia a tu rama de desarrollo
git checkout feat/cms

# Obtén los cambios más recientes de la rama principal
git pull origin main

# Si hay conflictos, resuélvelos y luego haz commit
git add .
git commit -m "Resuelve conflictos con main"

# Sube los cambios a tu rama de desarrollo
git push origin feat/cms
```

## Comprobación del estado de despliegue

Puedes verificar el estado de despliegue de tu sitio:

1. Ve a la pestaña "Actions" en tu repositorio de GitHub
2. Busca el flujo de trabajo "Deploy to GitHub Pages"
3. Verifica que se haya completado correctamente (marca verde)

Si hay errores en el despliegue, revisa los logs para identificar y solucionar el problema.

## Resumen

- ✅ Desarrolla en `feat/cms` u otras ramas de características
- ✅ Cuando estés listo, fusiona en `main` para desplegar
- ✅ El despliegue es automático solo cuando hay cambios en `main`
- ✅ Siempre vuelve a tu rama de desarrollo después de desplegar
