import { TaskService } from '../services/task.service.js';

export class TaskController {
  static async createTask(req, res) {
    const taskData = req.body;
    const task = await TaskService.createTask(taskData);
    return res.status(201).json(task);
  }

  static async getTasksByUser(req, res) {
    const userId = req.params.userId;
    const tasks = await TaskService.getTasksByUser(userId);
    return res.json(tasks);
  }

  static async getTaskById(req, res) {
    const taskId = req.params.taskId;
    const task = await TaskService.getTasksById(taskId);
    return res.json(task);
  }

  static async getTaskByDescription(req, res) {
    const taskDescription = req.params.taskDescription;
    const task = await TaskService.getTaskByDescription(taskDescription);
    return res.json(task);
  }
 
  static async updateTask(req, res) {
    const taskId = req.params.taskId;
    const updateData = req.body;
    const updatedTask = await TaskService.updateTask(taskId, updateData);
    return res.json(updatedTask);
  }

  static async deleteTask(req, res) {
    const taskId = req.params.taskId;
    await TaskService.deleteTask(taskId);
    return res.status(204).send();
  }   
}
