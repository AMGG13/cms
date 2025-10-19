# Despliegue en Render - Tier Gratuito

Esta guía te ayudará a desplegar tu aplicación Strapi CMS en Render utilizando el tier gratuito.

## Prerrequisitos

- Cuenta en [Render](https://render.com)
- Repositorio de código en GitHub, GitLab o Bitbucket
- Aplicación Strapi configurada (este proyecto)

## Configuración Previa

### 1. Dependencias de Producción

El proyecto ya incluye las dependencias necesarias:
- `pg`: Driver de PostgreSQL para producción
- Configuración de base de datos que soporta PostgreSQL

### 2. Archivos de Configuración

- `render.yaml`: Configuración de servicios para Render
- `.env.example`: Variables de entorno actualizadas

## Pasos para el Despliegue

### 1. Preparar el Repositorio

1. Asegúrate de que todos los cambios estén commitados:
   ```bash
   git add .
   git commit -m "Preparar para despliegue en Render"
   git push origin main
   ```

### 2. Crear Servicios en Render

#### Opción A: Usando render.yaml (Recomendado)

1. Ve a [Render Dashboard](https://dashboard.render.com)
2. Haz clic en "New +" → "Blueprint"
3. Conecta tu repositorio
4. Render detectará automáticamente el archivo `render.yaml`
5. Revisa la configuración y haz clic en "Apply"

#### Opción B: Configuración Manual

1. **Crear Base de Datos PostgreSQL:**
   - Ve a "New +" → "PostgreSQL"
   - Nombre: `strapi-db`
   - Plan: Free
   - Haz clic en "Create Database"

2. **Crear Web Service:**
   - Ve a "New +" → "Web Service"
   - Conecta tu repositorio
   - Configuración:
     - **Name:** `strapi-cms`
     - **Environment:** Node
     - **Build Command:** `npm install && npm run build`
     - **Start Command:** `npm start`

### 3. Configurar Variables de Entorno

En la configuración del Web Service, añade las siguientes variables:

```
NODE_ENV=production
DATABASE_CLIENT=postgres
DATABASE_URL=[URL de tu base de datos PostgreSQL]
APP_KEYS=[genera claves aleatorias]
API_TOKEN_SALT=[genera salt aleatorio]
ADMIN_JWT_SECRET=[genera secret aleatorio]
TRANSFER_TOKEN_SALT=[genera salt aleatorio]
JWT_SECRET=[genera secret aleatorio]
ENCRYPTION_KEY=[genera clave de encriptación aleatoria]
```

**Nota:** Render puede generar automáticamente valores seguros para las claves si usas el archivo `render.yaml`.

### 4. Obtener la URL de la Base de Datos

1. Ve a tu base de datos PostgreSQL en Render
2. En la pestaña "Connect", copia la "External Database URL"
3. Úsala como valor para `DATABASE_URL`

### 5. Desplegar

1. Haz clic en "Create Web Service" o "Apply" si usas Blueprint
2. Render comenzará el proceso de build y despliegue
3. El proceso puede tomar varios minutos

## Post-Despliegue

### 1. Configurar Admin

1. Una vez desplegado, visita tu URL de Render
2. Completa la configuración inicial del admin de Strapi
3. Crea tu cuenta de administrador

### 2. Verificar Funcionamiento

- Accede al panel de administración: `https://tu-app.onrender.com/admin`
- Verifica que la base de datos esté funcionando correctamente
- Prueba crear contenido de ejemplo

## Limitaciones del Tier Gratuito

- **Web Service:** Se suspende después de 15 minutos de inactividad
- **Base de Datos:** 1GB de almacenamiento, conexiones limitadas
- **Ancho de banda:** 100GB/mes
- **Build time:** 500 horas/mes

## Solución de Problemas

### Error de Conexión a Base de Datos

1. Verifica que `DATABASE_URL` esté correctamente configurada
2. Asegúrate de que `DATABASE_CLIENT=postgres`
3. Revisa los logs del servicio en Render

### Error de Build

1. Verifica que todas las dependencias estén en `package.json`
2. Revisa los logs de build en Render
3. Asegúrate de que el comando de build sea correcto

### Servicio Suspendido

- Los servicios gratuitos se suspenden tras 15 minutos de inactividad
- Se reactivan automáticamente con la primera petición (puede tomar 30-60 segundos)

## Comandos Útiles

```bash
# Instalar dependencias localmente
npm install

# Ejecutar en desarrollo
npm run develop

# Build para producción
npm run build

# Iniciar en producción
npm start
```

## Recursos Adicionales

- [Documentación de Render](https://render.com/docs)
- [Documentación de Strapi](https://docs.strapi.io)
- [Guía de Despliegue de Strapi](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html)