import { Knex } from "knex";
import { TableNames } from "../eTableNames";

export async function up(knex: Knex): Promise<void> {
  return knex.schema
    .createTableIfNotExists(TableNames.TASKS, (table) => {
      table.uuid("id").primary().unique().index();
      table.text("title").notNullable().index();
      table.text("description").notNullable().defaultTo("");
      table
        .enum("label", [
          "feature",
          "bug",
          "enhancement",
          "documentation",
          "design",
          "question",
          "maintenance",
        ])
        .notNullable()
        .defaultTo("feature");
      table
        .enum("status", ["backlog", "todo", "in progress", "done", "canceled"])
        .notNullable()
        .defaultTo("backlog");
      table
        .enum("priority", ["heavy low", "low", "medium", "high", "heavy high"])
        .notNullable()
        .defaultTo("medium");
      table
        .uuid("project_id")
        .notNullable()
        .references("projects.id")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamps();
    })
    .then(() => {
      console.log(`### Created table: ${TableNames.TASKS}`);
    });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists(TableNames.TASKS).then(() => {
    console.log(`### Droped table: ${TableNames.TASKS}`);
  });
}
