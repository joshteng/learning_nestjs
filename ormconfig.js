module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'joshteng',
  database: 'coffees',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
