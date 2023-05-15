import { Knex } from "knex";
import { TableNames } from "../eTableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.USERS, (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .index()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.text("name").notNullable().index();
      table.text("username").notNullable().unique().index();
      table.text("email").notNullable().unique().index();
      table.text("password").notNullable();
      table.text("avatar").nullable();
      table.text("description").notNullable().defaultTo("");
      table
        .uuid("role_id")
        .notNullable()
        .references("roles.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.USERS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.USERS).then(() => {
    console.log(`### Droped table: ${TableNames.USERS}`);
  });
}
