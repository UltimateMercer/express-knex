import { TableNames } from "../eTableNames";
import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.TASKS_RELEASE, (table) => {
      table
        .uuid("task_id")
        .notNullable()
        .references("tasks.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table
        .uuid("release_id")
        .notNullable()
        .references("releases.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps(true, true);
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.TASKS_RELEASE}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.TASKS_RELEASE).then(() => {
    console.log(`### Droped table: ${TableNames.TASKS_RELEASE}`);
  });
}
