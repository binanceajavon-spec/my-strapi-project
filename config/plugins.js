module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Pour Strapi 4, on utilise cette syntaxe
    options: {
      expiresIn: '30d',
    },
    // Sessions admin
    sessions: {
      maxSessionLifespan: 2592000000, // 30 jours
      maxRefreshTokenLifespan: 2592000000,
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
  // Désactiver les emails si pas nécessaire
  email: {
    enabled: false,
  },
});