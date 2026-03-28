export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Ajoutez cette configuration pour les sessions admin
    sessions: {
      maxSessionLifespan: 2592000000, // 30 jours en millisecondes
      maxRefreshTokenLifespan: 2592000000,
    },
    options: {
      // Désactiver le cookie sécurisé pour Railway (car il utilise HTTP en interne)
      secure: false,
    },
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});