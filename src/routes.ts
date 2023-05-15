import { Router } from "express";

import RoleController from "./app/controllers/RoleController";

const router = Router();

router.get('/roles', RoleController.index);
router.get('/roles/:id', RoleController.show);
router.delete('/roles/:id', RoleController.delete);
router.post('/roles', RoleController.store);
router.put('/roles/:id', RoleController.update);

export default router;
