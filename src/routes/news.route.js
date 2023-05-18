import { Router } from 'express';
import newsController from '../controller/newsController.js';
import authTokenSession from '../midlewares/authToken.js';


const route = Router();
route.post('/', authTokenSession ,  newsController.create);
route.get('/', newsController.getAll);

export default route;