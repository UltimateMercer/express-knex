import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.RELEASES, (table) => {
      table.uuid("id").primary().unique().index();
      table.text("name").notNullable().unique().index();
      table
        .uuid("project_id")
        .nullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.RELEASES}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.RELEASES).then(() => {
    console.log(`### Droped table: ${TableNames.RELEASES}`);
  });
}
