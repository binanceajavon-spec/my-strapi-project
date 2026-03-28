export default [
  'strapi::errors',
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'connect-src': ["'self'", 'https:'],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: 'strapi::cors',
    config: {
      // Suppression de "enabled: true" car Strapi 5 ne le supporte plus ici
      origin: [
        'https://binanceajavon-spec.github.io',
        'https://binanceajavon-spec.github.io/loji-premiere',
        'https://binanceajavon-spec.github.io/loji-premiere/',
        'http://localhost:1337',
        'http://localhost:3000'
      ],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
      headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
      keepHeaderOnError: true,
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];