export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  // On force les headers ici car le middleware CORS semble défaillant
  settings: {
    cors: {
      enabled: true,
      origin: ['https://binanceajavon-spec.github.io', 'http://localhost:1337'],
      headers: ['*'],
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
    },
  },
});