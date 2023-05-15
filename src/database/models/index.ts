import { StatusField, PriorityField, LabelField } from "@/src/types";

export interface IRole {
  id: string;
  title: string;
}

export interface IUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  avatar?: string;
  description: string;
  role_id: string;
}

export interface IOrgarnization {
  id: string;
  name: string;
  logo?: string;
  description: string;
  manager_id: string;
}

export interface IProject {
  id: string;
  name: string;
  description: string;
  logo?: string;
  leader_id?: string;
  organization_id: string;
}

export interface ITeam {
  id: string;
  name: string;
  description: string;
  leader_id: string;
  organization_id: string;
  project_id: string;
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: StatusField;
  label: LabelField;
  priority: PriorityField;
  project_id: string;
}

export interface IComment {
  id: string;
  task_id: string;
  user_id: string;
  content: string;
}
