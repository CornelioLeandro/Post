import {Router} from 'express';
import userController from '../controller/userController.js';
import {validId,validUser} from '../midlewares/userValided.js';

const router = Router();

router.post('/', userController.create);
router.get('/', userController.findAllUser);
router.get('/:id', validId, validUser, userController.findUserById);
router.patch('/:id', userController.updateUser);


export default router;