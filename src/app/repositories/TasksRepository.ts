import { TableNames } from "../../database/eTableNames";
import { Knex } from "../../database/knex";
import { ITask } from "@/src/database/models";

// import { OrderBy } from "@/src/types";
class TasksRepository {
  async findAll(orderBy: any = "ASC") {
    const direction = orderBy?.toUpperCase() === "DESC" ? "DESC" : "ASC";
    const rows = await Knex<ITask[]>(TableNames.TASKS)
      .select(`${TableNames.TASKS}.*`)
      .select(
        `${TableNames.PROJECTS}.name as project_name`,
        `${TableNames.PROJECTS}.logo as project_logo`
      )
      .leftJoin(
        TableNames.PROJECTS,
        `${TableNames.PROJECTS}.id`,
        `${TableNames.TASKS}.project_id`
      )
      .orderBy(`${TableNames.TASKS}.title`, direction);
    return rows;
  }
}

export default new TasksRepository();
