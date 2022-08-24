import { Router } from 'express';
import loginController from '../controllers/loginController';
import validateToken from '../middelware/validateToken';

const router = Router();

router.get('/validate', validateToken.validate);
router.post('/', loginController.login);

export default router;
