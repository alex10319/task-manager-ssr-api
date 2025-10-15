import { Router } from "express";

import {
  TasksRouter,
} from "../modules";

const router = Router();

//Tasks
router.use("/tasks", TasksRouter);

export default router;