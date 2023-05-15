import type { Knex } from "knex";

// Update with your config settings.

// const config: { [key: string]: Knex.Config } = {
//   development: {
//     client: "pg",
//     connection: {
//       database: process.env.DATABASE_NAME || "management",
//       user: process.env.POSTGRES_USER || "root",
//       password: process.env.POSTGRES_PASSWORD || "senha5",
//       port: 5432,
//       host: process.env.POSTGRES_HOST || "localhost",
//     },
//     migrations: {
//       directory: "./src/database/migrations",
//     },
//     seeds: {
//       directory: "./src/database/seeds",
//     },
//   },

//   staging: {
//     client: "pg",
//     connection: {
//       database: process.env.DATABASE_NAME || "management",
//       user: process.env.POSTGRES_USER || "root",
//       password: process.env.POSTGRES_PASSWORD || "senha5",
//       port: 5432,
//       host: process.env.POSTGRES_HOST || "localhost",
//     },
//     migrations: {
//       directory: "./src/database/migrations",
//     },
//     seeds: {
//       directory: "./src/database/seeds",
//     },
//   },

//   production: {
//     client: "pg",
//     connection: {
//       database: process.env.DATABASE_NAME || "management",
//       user: process.env.POSTGRES_USER || "root",
//       password: process.env.POSTGRES_PASSWORD || "senha5",
//       port: 5432,
//       host: process.env.POSTGRES_HOST || "localhost",
//     },
//     migrations: {
//       directory: "./src/database/migrations",
//     },
//     seeds: {
//       directory: "./src/database/seeds",
//     },
//   },
// };
// export default config;

export const development: Knex.Config ={
  client: "pg",
    connection: {
      database: process.env.DATABASE_NAME || "management",
      user: process.env.POSTGRES_USER || "root",
      password: process.env.POSTGRES_PASSWORD || "senha5",
      port: 5432,
      host: process.env.POSTGRES_HOST || "localhost",
    },
    migrations: {
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
    },
}

export const test: Knex.Config = {
  ...development,
  connection: ':memory:',
};

export const production: Knex.Config = {
  ...development,
};

