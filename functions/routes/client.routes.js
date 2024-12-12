import { Router } from 'express';
import { ClientController } from '../controllers/clientController.js';

const router = Router();

router.post('/create', ClientController.createClient);
router.get('/', ClientController.getClients);
router.get('/:clientPhone', ClientController.getClientByEmail);
router.put('/:clientPhone', ClientController.updateClient);
router.delete('/:clientPhone', ClientController.deleteClient);
router.post('/send-email', ClientController.sendEmail);

export default router;
  