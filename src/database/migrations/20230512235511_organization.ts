import { Knex } from "knex";
import { TableNames } from "../eTableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.ORGANIZATIONS, (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .index()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.text("name").notNullable().unique().index();
      table.text("logo").nullable();
      table.text("description").notNullable().defaultTo("");
      table
        .uuid("manager_id")
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.ORGANIZATIONS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.ORGANIZATIONS).then(() => {
    console.log(`### Droped table: ${TableNames.ORGANIZATIONS}`);
  });
}
