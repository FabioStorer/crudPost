import { Router } from "express";
import { signup, login, store, index, show, update, destroy, followUnfollow } from '../controllers/user_controller.js';
import authenticator from '../middlewares/authenticator.js';
import authorization from '../middlewares/authorization.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);

router.put('/followers/:id', authenticator, followUnfollow);

router.post('/', authenticator, authorization, store);
router.get('/', index);
router.get('/:id', show);
router.put('/:id', authenticator, authorization, update);
router.delete('/:id', authenticator, authorization, destroy);

export default router;