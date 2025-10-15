import { Request, Response } from "express";
import { type Task } from "./interfaces/Tasks.interfaces";

let tasks: Task[] = [
  { id: 1, title: "Comprar leche", completed: false, priority: "medium" },
  { id: 2, title: "Pasear al perro", completed: true, priority: "high" },
];

// --- GET /tasks ---
const getTasksRoute = async (req: Request, res: Response) => {
  try {
    res.json(tasks);
  } catch (err: unknown) {
    console.error("[TasksController -> getTasks] Error: ", err);
    res.status(500).json({
      message: "Internal server error",
      key: "tasks.internal-error",
    });
  }
};

// --- POST /tasks ---
const createTaskRoute = async (req: Request, res: Response) => {
  try {
    const { title, description, priority } = req.body;
    if (!title || !priority) {
      return res.status(400).json({ message: "Title and priority are required" });
    }

    const newTask: Task = {
      id: tasks.length ? Math.max(...tasks.map(t => t.id)) + 1 : 1,
      title,
      description,
      completed: false,
      priority,
    };

    tasks.push(newTask);
    res.status(201).json(newTask);
  } catch (err: unknown) {
    console.error("[TasksController -> createTask] Error: ", err);
    res.status(500).json({
      message: "Internal server error",
      key: "tasks.internal-error",
    });
  }
};

// --- PATCH /tasks/:id ---
const updateTaskRoute = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (!task) return res.status(404).json({ message: "Task not found" });

    const { title, description, completed, priority } = req.body;

    if (title !== undefined) task.title = title;
    if (description !== undefined) task.description = description;
    if (completed !== undefined) task.completed = completed;
    if (priority !== undefined) task.priority = priority;

    res.json(task);
  } catch (err: unknown) {
    console.error("[TasksController -> updateTask] Error: ", err);
    res.status(500).json({
      message: "Internal server error",
      key: "tasks.internal-error",
    });
  }
};

// --- DELETE /tasks/:id ---
const deleteTaskRoute = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const index = tasks.findIndex(t => t.id === id);
    if (index === -1) return res.status(404).json({ message: "Task not found" });

    tasks.splice(index, 1);
    res.status(204).send();
  } catch (err: unknown) {
    console.error("[TasksController -> deleteTask] Error: ", err);
    res.status(500).json({
      message: "Internal server error",
      key: "tasks.internal-error",
    });
  }
};

export const getTasks = [getTasksRoute];
export const createTask = [createTaskRoute];
export const updateTask = [updateTaskRoute];
export const deleteTask = [deleteTaskRoute];
