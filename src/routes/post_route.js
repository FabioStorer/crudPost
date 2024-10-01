import { Router } from "express";
import post_controller from "../controllers/post_controller.js";
import authenticator from '../middlewares/authenticator.js';

const router = Router();

router.post('/', authenticator, post_controller.store);
router.get('/', post_controller.index);
router.get('/:id', post_controller.show);
router.put('/:id', authenticator, post_controller.update);
router.delete('/:id', authenticator, post_controller.destroy);

export default router;