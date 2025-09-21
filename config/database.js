module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
          host: env('PGHOST'),
          port: env('PGPORT'),
          database: env('PGDATABASE'),
          user: env('PGUSER'),
          password: env('PGPASSWORD'),
        },
        pool: { min: 0 }
    }
});
