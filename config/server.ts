export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // URL publique de votre Strapi
  url: env('STRAPI_URL', 'https://my-strapi-project-production-d4d2.up.railway.app'),

  app: {
    keys: env.array('APP_KEYS'),
  },

  proxy: true, // Important pour Railway

  // Supprimez la section "settings.cors" ici car elle est gérée par middlewares.ts
  // pour éviter les conflits
});