import { Router } from 'express';
import newsController from '../controller/newsController.js';
<<<<<<< HEAD
const route = Router();

route.post('/', newsController.create);
=======
import authTokenSession from '../midlewares/authToken.js';
const route = Router();

route.post('/',authTokenSession,  newsController.create);
>>>>>>> 5ea173e (Feito em casa)
route.get('/', newsController.getAll);

export default route;