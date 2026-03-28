import path from 'path';

export default ({ env }) => {
  const client = env('DATABASE_CLIENT', 'postgres');

  return {
    connection: {
      client,
      connection: {
        connectionString: env('DATABASE_URL'), // Utilise l'URL complète fournie par Railway
        ssl: env.bool('DATABASE_SSL', true) && {
          rejectUnauthorized: false, // Garde cette ligne, elle est vitale sur Railway
        },
      },
      pool: { min: env.int('DATABASE_POOL_MIN', 2), max: env.int('DATABASE_POOL_MAX', 10) },
      acquireConnectionTimeout: env.int('DATABASE_CONNECTION_TIMEOUT', 60000),
    },
  };
};