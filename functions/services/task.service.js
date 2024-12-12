import { TaskDal } from '../dal/task.dal.js';

export class TaskService {
  static async createTask(taskData) {
    return TaskDal.createTask(taskData);
  }

  static async getTasksByUser(userId) {
    return TaskDal.getTasksByUser(userId);
  }
  static async getTasksById(taslId) {
    return TaskDal.getTaskById(taslId);
  }

  static async getTaskByDescription(taskDescription) {
    return TaskDal.getTaskByDescription(taskDescription);
  }

  static async updateTask(taskId, updateData) {
    return TaskDal.updateTask(taskId, updateData);
  }

  static async deleteTask(taskId) {
    return TaskDal.deleteTask(taskId);
  }
}
