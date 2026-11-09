# Regando la Historia — Sitio de patrocinios

Página comercial del canal de YouTube **Regando la Historia** (@regandolahistoria).
Todos los botones de contacto abren WhatsApp al 614 173 1455.

## Cómo verlo en tu computadora

1. Instala Node.js 20 o más reciente: https://nodejs.org
2. Abre una terminal dentro de esta carpeta y ejecuta:

   ```sh
   npm install
   npm run dev
   ```

3. Abre en tu navegador la dirección que aparece (normalmente http://localhost:8080).

## Generar la versión para publicar

```sh
npm run build
```

## Dónde cambiar cosas

- Textos e imágenes de la página: `src/routes/index.tsx`
- Número de WhatsApp: `src/lib/whatsapp.ts`
- Colores y tipografías: `src/styles.css`
- Imágenes del canal: `src/assets/canal/`
