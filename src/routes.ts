import { Router } from "express";

import RoleController from "./app/controllers/RoleController";
import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import OrganizationController from "./app/controllers/OrganizationController";
import ProjectController from "./app/controllers/ProjectController";

const router = Router();

router.get("/roles", RoleController.index);
router.get("/roles/:id", RoleController.show);
router.delete("/roles/:id", RoleController.delete);
router.post("/roles", RoleController.store);
router.put("/roles/:id", RoleController.update);

router.get("/users", UserController.index);

router.get("/organizations", OrganizationController.index);

router.get("/projects", ProjectController.index);

router.post("/login", AuthController.login);

export default router;
