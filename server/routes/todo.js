import { Router } from 'express';
import {
  getTodos,
  postTodo,
  updateTodo,
  deleteTodo,
  deleteFalse,
} from '../controllers/todoController.js';

const router = Router();

router.get('/', getTodos);
router.post('/', postTodo);
router.patch('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.delete('/', deleteFalse);

export default router;
