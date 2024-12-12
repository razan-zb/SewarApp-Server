import Task from '../db/models/tasks.js';

export class TaskDal {
  static async createTask(taskData) {
    const task = new Task(taskData);
    return task.save();
  }

  static async getTasksByUser(userId) {
    return Task.find({ createdBy: userId });
  }

  static async getTaskById(taskId) {
    return Task.findById(taskId);
  }

  static async getTaskByDescription(taskDescription) {
    return Task.findOne({description:taskDescription});
  }
  static async updateTask(taskId, updateData) {
    return Task.findByIdAndUpdate(taskId,updateData, { new: true });
  }

  static async deleteTask(taskId) {
    return Task.findByIdAndDelete(taskId);
  }
}
