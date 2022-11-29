import { Router } from 'express';
import { getBattles } from './controller';

const router = new Router();

/**
 * @api {get} /api/v1/battles
 * @apiName Get all Battles
 * @apiGroup /v1/contract/battles
 * @apiParam { }
 */
router.get('/all', getBattles);

export default router;
