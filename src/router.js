import express from 'express';

const router = express.Router();

import tasksController from './controllers/tasksController.js';
import tasksMiddlewares from './middlewares/tasksMiddlewares.js';

router.get('/tasks', tasksController.getAll);
router.post(
  '/tasks',
  tasksMiddlewares.validateFieldTitle,
  tasksController.createTask
);
router.delete('/tasks/:id', tasksController.deleteTask);
router.put(
  '/tasks/:id',
  tasksMiddlewares.validateFieldTitle,
  tasksMiddlewares.validateFieldStatus,
  tasksController.updateTask
);
export default router;
