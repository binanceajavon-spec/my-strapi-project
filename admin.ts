module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
    // Configuration des options d'authentification
    options: {
      expiresIn: '30d',           // Durée de validité du token
      secure: false,              // IMPORTANT: désactive le cookie sécurisé pour Railway
    },
    // Configuration des sessions admin
    sessions: {
      maxSessionLifespan: 2592000000,        // 30 jours en millisecondes
      maxRefreshTokenLifespan: 2592000000,   // 30 jours
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
  // Désactiver les emails (évite l'erreur SMTP)
  email: {
    enabled: false,
  },
  // Secrets pour le chiffrement
  secrets: {
    encryptionKey: env('ENCRYPTION_KEY'),
  },
  // Flags de fonctionnalités
  flags: {
    nps: env.bool('FLAG_NPS', true),
    promoteEE: env.bool('FLAG_PROMOTE_EE', true),
  },
});