export default ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL'),
    },
    pool: { min: 2, max: 10 },
  },
});