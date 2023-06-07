export type StatusField =
  | "backlog"
  | "todo"
  | "in progress"
  | "done"
  | "canceled";

export type PriorityField =
  | "heavy low"
  | "low"
  | "medium"
  | "high"
  | "heavy high";

export type LabelField =
  | "feature"
  | "bug"
  | "enhancement"
  | "documentation"
  | "design"
  | "question"
  | "maintenance";

export type OrderBy =
  | "ASC"
  | "DESC"
  | "Asc"
  | "Desc"
  | "asc"
  | "desc"
  | undefined;
