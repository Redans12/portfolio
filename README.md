# Portfolio - Andrés

Portfolio personal bilingüe (español / inglés) hecho con Nuxt, Vue 3 y TypeScript como prueba técnica de residencias. Incluye una página de inicio animada, una sección "Sobre mí" alimentada por la API pública de GitHub, un listado de proyectos con página de detalle y un formulario de contacto accesible.

- **Sitio publicado:** _pendiente: agregar la URL de despliegue_
- **Diseño en Figma:** https://www.figma.com/design/mNyQK1KjPqXLIhzuSgl817 (pantallas de Inicio y Sobre mí; el resto de páginas se construyó directamente en código)

## Tecnologías

Nuxt 4, Vue 3 (Composition API + `<script setup>`), TypeScript estricto, Tailwind CSS v4, `@nuxtjs/i18n`, Pinia (instalado, sin stores por ahora), anime.js, ESLint + Prettier, Husky, lint-staged y commitlint.

## Cómo ejecutarlo

Requisitos: Node 20 o superior y npm.

```bash
npm install
cp .env.example .env   # opcional en local
npm run dev            # http://localhost:3000
```

Scripts útiles:

| Comando                | Qué hace                               |
| ---------------------- | -------------------------------------- |
| `npm run dev`          | Servidor de desarrollo                 |
| `npm run build`        | Build de producción                    |
| `npm run preview`      | Previsualiza el build                  |
| `npm run lint`         | ESLint (incluye reglas de i18n)        |
| `npm run format:check` | Verifica el formato con Prettier       |
| `npm run typecheck`    | Revisión de tipos con `nuxt typecheck` |

No se necesita ningún token: los datos de GitHub son públicos. La variable `NUXT_PUBLIC_SITE_URL` solo define la URL canónica y los `hreflang`.

## Estructura

```
app/
  components/   Componentes con una sola responsabilidad (Home*, About*, Project*, ...)
  composables/  Lógica reutilizable (useGithubProfile, useProjects, useContactForm, ...)
  data/         Datos estáticos (redes sociales, tecnologías, íconos pixelados)
  layouts/      Layout común: sidebar, selector de idioma, footer, botón de contacto
  pages/        Rutas (index, about, projects, projects/[slug], contact)
  types/        Interfaces de GitHub y de proyectos
  utils/        Helpers sin estado (prefersReducedMotion)
i18n/locales/   es.json y en.json con claves organizadas por página y componente
public/data/    projects.json (fuente de datos del listado)
```

## Decisiones de diseño

- **Un solo tema oscuro.** Se descartó el tema claro para mantener una identidad visual coherente y reducir superficie de pruebas. La paleta vive como tokens en `@theme` de Tailwind (`page`, `surface`, `brand`, `accent`, ...), sin colores sueltos en los componentes.
- **i18n sin textos fijos.** Todo el texto visible sale de `es.json` / `en.json`, con interpolación (`{count}`, `{name}`) y plurales. Las rutas están traducidas (`/sobre-mi` y `/en/about`) y el selector de idioma conserva la página actual. Una regla de ESLint (`vue-i18n/no-raw-text`) impide dejar texto fijo en las plantillas.
- **Datos con estados.** El listado de proyectos y el perfil de GitHub usan `useFetch`, con estados de carga (esqueleto), error (con botón de reintento) y vacío. En GitHub se filtran los forks, se ordena por actividad reciente y se distinguen los errores 404, límite de solicitudes y red.
- **404 real.** La página de detalle lanza `createError({ statusCode: 404 })` cuando el proyecto no existe y `error.vue` muestra el mensaje traducido; el servidor responde con código 404.
- **Accesibilidad.** HTML semántico, un `<h1>` por página, enlace "saltar al contenido", foco visible, etiquetas y `aria-describedby` en el formulario, texto alternativo en imágenes y contraste revisado (el morado de marca se usa en botones, no en texto pequeño).
- **Movimiento responsable.** La animación del nombre, el texto en japonés, los íconos flotantes y el cursor circular se desactivan con `prefers-reduced-motion`; el cursor además solo se muestra con puntero de precisión (mouse).
- **Formulario de contacto sin backend.** El sitio no tiene servidor de correo: tras validar, abre el cliente de correo del visitante con el mensaje listo (`mailto:`). Es una limitación asumida a propósito para no simular un envío que no existe.
- **Pinia.** Se dejó instalado pero sin stores: por ahora no hay estado global que lo justifique, y las dependencias entre componentes se resuelven con props y composables.
- **Calidad automatizada.** Husky ejecuta lint-staged (ESLint + Prettier) antes de cada commit y commitlint valida que los mensajes sigan Conventional Commits.

## Flujo de trabajo

Cada tarea tiene su Issue, una rama creada desde ese Issue y un Pull Request con `Closes #<n>`; no se hacen commits directos a `main`.

## Despliegue

El proyecto se despliega en Vercel (Nuxt se detecta automáticamente). Configuración: framework Nuxt, comando de build `npm run build` y la variable `NUXT_PUBLIC_SITE_URL` con la URL pública final.
