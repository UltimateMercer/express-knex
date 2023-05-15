import { Knex } from "knex";
import { TableNames } from "../eTableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.PROJECTS, (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .index()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.text("name").notNullable().index();
      table.text("description").notNullable().defaultTo("");
      table.text("logo").nullable();
      table
        .uuid("leader_id")
        .nullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("organization_id")
        .notNullable()
        .references("organizations.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.PROJECTS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.PROJECTS).then(() => {
    console.log(`### Droped table: ${TableNames.PROJECTS}`);
  });
}
