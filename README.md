# Portafolio — Alan Zavala (React + Vite + GitHub Pages)

Sitio estático listo para desplegar en **GitHub Pages** usando **GitHub Actions**.

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

## ¿Por qué funciona en GitHub Pages?
- El workflow `.github/workflows/deploy.yml` usa acciones oficiales (`configure-pages`, `upload-pages-artifact`, `deploy-pages`) para publicar `dist/`. 
- En `vite.config.js` el `base` se ajusta automáticamente a `/${REPO}/` cuando se ejecuta en GitHub Actions, lo que reescribe las rutas de assets correctamente para sites de proyecto.
- `404.html` redirige a `index.html` para evitar errores al refrescar rutas (fallback típico en SPAs).
- El enlace del CV usa `import.meta.env.BASE_URL` para apuntar a `public/alan-zavala-cv.pdf` bajo el path correcto.

## Pasos para publicar
1. Crea un repositorio (por ejemplo `alan-portfolio`) y sube estos archivos.
2. En **Settings ▸ Pages**, selecciona **Source: GitHub Actions**.
3. Haz un push a `main`. El workflow construirá y publicará automáticamente en GitHub Pages.
   - La URL quedará como: `https://TU_USUARIO.github.io/REPO/`.

## Personalización
- Edita datos en `src/components/Portfolio.jsx` (constantes `CONTACT`, `SUMMARY`, etc.).
- Reemplaza `public/alan-zavala-cv.pdf` por tu CV real.
- Actualiza tus enlaces de LinkedIn/GitHub.
