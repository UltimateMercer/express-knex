import { Router } from "express";

import RoleController from "./app/controllers/RoleController";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import OrganizationController from "./app/controllers/OrganizationController";
import ProjectController from "./app/controllers/ProjectController";
import TaskController from "./app/controllers/TaskController";

const router = Router();

router.post("/login", AuthController.login);

router.get("/roles", RoleController.index);
router.get("/roles/:id", RoleController.show);
router.delete("/roles/:id", RoleController.delete);
router.post("/roles", RoleController.store);
router.put("/roles/:id", RoleController.update);

router.get("/users", UserController.index);

router.get("/organizations", OrganizationController.index);
router.get(
  "/organizations/:id",
  OrganizationController.showOrganizationsByUser
);

router.get("/projects", ProjectController.index);
router.get("/projects/:id", ProjectController.showProjectsByUser);

router.get("/tasks", TaskController.index);

export default router;
