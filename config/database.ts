import { parse } from 'pg-connection-string';

export default ({ env }) => {
  const databaseUrl = env('DATABASE_URL');

  if (databaseUrl) {
    const config = parse(databaseUrl);
    return {
      connection: {
        client: 'postgres',
        connection: {
          host: config.host,
          port: config.port,
          database: config.database,
          user: config.user,
          password: config.password,
          ssl: false, // CRUCIAL pour éviter le ECONNRESET sur le réseau interne
        },
        pool: { min: 0, max: 10 },
      },
    };
  }

  // Reste du code (sqlite pour le local si besoin)
  return {
    connection: {
      client: 'sqlite',
      connection: {
        filename: '.tmp/data.db',
      },
      useNullAsDefault: true,
    },
  };
};