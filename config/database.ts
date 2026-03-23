import path from 'path';

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  // Si on est sur Railway (DATABASE_URL existe)
  if (databaseUrl) {
    return {
      connection: {
        client: 'postgres',
        connection: {
          connectionString: databaseUrl,
          ssl: { rejectUnauthorized: false },
        },
        pool: { min: 2, max: 10 },
      },
    };
  }

  // Si on est en local sur ton Windows (DATABASE_URL n'existe pas)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: path.join(__dirname, '..', '..', env('DATABASE_FILENAME', '.tmp/data.db')),
      },
      useNullAsDefault: true,
    },
  };
};