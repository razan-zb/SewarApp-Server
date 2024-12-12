import { Router } from 'express';
import { TaskController } from '../controllers/taskController.js';

const router = Router();

router.post('/create', TaskController.createTask);
router.get('/user/:userId', TaskController.getTasksByUser);
router.get('/:taskDescription', TaskController.getTaskByDescription);
router.get('/:taskId', TaskController.getTaskById);
router.put('/:taskId', TaskController.updateTask);
router.delete('/:taskId', TaskController.deleteTask);

export default router;
 