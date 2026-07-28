import coreWebVitals from 'eslint-config-next/core-web-vitals';

/**
 * eslint-config-next 16 ya exporta configuración plana, así que se extiende
 * directamente (sin el puente FlatCompat que necesitaban las versiones viejas).
 */
const config = [
  ...coreWebVitals,
  {
    ignores: ['.next/**', 'node_modules/**', 'public/**'],
  },
];

export default config;
