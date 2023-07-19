import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.ORGANIZATION_MEMBERS, (table) => {
      table
        .uuid("organization_id")
        .notNullable()
        .references("organizations.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("roles_organization_id")
        .notNullable()
        .references("roles_organization.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("user_id")
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.ORGANIZATION_MEMBERS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema
    .dropTableIfExists(TableNames.ORGANIZATION_MEMBERS)
    .then(() => {
      console.log(`### Droped table: ${TableNames.ORGANIZATION_MEMBERS}`);
    });
}
