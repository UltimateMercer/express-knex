import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.COMMENTS, (table) => {
      table.uuid("id").primary().unique().index();
      table.text("content").notNullable();
      table
        .uuid("user_id")
        .notNullable()
        .references("users.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("task_id")
        .notNullable()
        .references("tasks.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.COMMENTS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.COMMENTS).then(() => {
    console.log(`### Droped table: ${TableNames.COMMENTS}`);
  });
}
