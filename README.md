# Portafolio — Alan Zavala (React + Vite + Netlify)

Sitio de portafolio/CV estático, listo para desplegar en Netlify.

## Requisitos
- Node.js 18+
- NPM o PNPM

## Desarrollo local
```bash
npm install
npm run dev
```

## Compilar
```bash
npm run build
npm run preview
```

## Estructura
```
├─ package.json
├─ netlify.toml
├─ index.html
├─ public/
│  └─ alan-zavala-cv.pdf
└─ src/
   ├─ main.jsx
   ├─ App.jsx
   └─ components/Portfolio.jsx
```

## Despliegue en Netlify
- **Build command**: `npm run build`
- **Publish directory**: `dist`
- El archivo `netlify.toml` ya incluye el redirect `/* -> /index.html 200` para SPA.

1. Crea un repo en GitHub y sube este proyecto.
2. En Netlify, **Add new site > Import from Git**, conecta el repo y confirma la configuración.
3. ¡Listo! Cada push hará deploy automático.

## Personalización
- Edita datos de contacto y secciones en `src/components/Portfolio.jsx` (constantes `CONTACT`, `SUMMARY`, `EXPERIENCE`, etc.).
- Reemplaza `public/alan-zavala-cv.pdf` por tu CV real.
- Actualiza enlaces de LinkedIn/GitHub.
