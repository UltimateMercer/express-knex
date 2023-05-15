import { development, test, production} from "../../knexfile";
import { knex } from "knex";

const environment = () => {
  switch (process.env.NODE_ENV) {
    case 'production': return production;
    case 'test': return test;

    default: return development;
  }
};

export const Knex = knex(environment());
