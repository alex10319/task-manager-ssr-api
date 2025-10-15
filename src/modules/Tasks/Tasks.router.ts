import { Router } from "express";
import * as TasksController from "./Tasks.Controller";

const TasksRouter = Router();

TasksRouter.get("/", ...TasksController.getTasks);
TasksRouter.post("/", ...TasksController.createTask);
TasksRouter.patch("/:id", ...TasksController.updateTask);
TasksRouter.delete("/:id", ...TasksController.deleteTask);

export default TasksRouter;
