import { Router } from 'express';
import { createBusService, deleteBusService, getBusServiceById, getBusServices, updateBusService } from "../controllers/bus.service.controller.js";

const router = Router();

router.get('/', getBusServices);
router.get('/:id', getBusServiceById);
router.post('/', createBusService);
router.patch('/:id', updateBusService);
router.delete('/:id', deleteBusService);

export default router;
