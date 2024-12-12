import { Router } from 'express';
import { UserController } from '../controllers/userController.js';
import { UploadVideosController } from '../controllers/uploadVideosController.js';
import multer from 'multer';
const upload = multer({ storage: multer.memoryStorage() }); // Store video in memory temporarily

const router = Router();

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/:userEmail', UserController.getUser);
router.put('/:userEmail', UserController.updateUser);
router.delete('/:userEmail', UserController.deleteUser);
//post video to the firebase
router.post('/uploudVideo',upload.single('file'), UploadVideosController.uploadToFirebase);
router.post('/uploudImage',upload.single('file'), UploadVideosController.uploadImageToFirebase);

router.get('/', UserController.getAllUsers);

export default router;
