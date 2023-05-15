import { Knex } from "knex";
import { TableNames } from "../eTableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.TEAMS, (table) => {
      table
        .uuid("id")
        .primary()
        .unique()
        .index()
        .defaultTo(knex.raw("uuid_generate_v4()"));
      table.text("name").notNullable().index();
      table.text("description").notNullable().defaultTo("");
      table
        .uuid("leader_id")
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("organization_id")
        .notNullable()
        .references("organizations.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("project_id")
        .nullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.TEAMS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.TEAMS).then(() => {
    console.log(`### Droped table: ${TableNames.TEAMS}`);
  });
}
