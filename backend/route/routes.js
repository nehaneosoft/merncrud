import express,{Router} from 'express';
import { getUsers,addUser } from '../controller/userController.js'

const route = express.Router();
route.get('/',getUsers);
route.post('/add', addUser);

export default route;