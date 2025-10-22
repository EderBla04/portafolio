# Etapa de construcción
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm ci

# Copiar el resto del código
COPY . .

# Construir la aplicación
RUN npm run build

# Etapa de producción
FROM nginx:alpine

# Copiar los archivos estáticos construidos
COPY --from=builder /app/dist /usr/share/nginx/html

# Copiar configuración de nginx personalizada (opcional)
# COPY nginx.conf /etc/nginx/nginx.conf

# Exponer el puerto 80
EXPOSE 80

# Comando para iniciar nginx
CMD ["nginx", "-g", "daemon off;"]
