import { Router } from 'express';
import { getNDRSupply, getDOPSupply } from './controller';

const router = new Router();

/**
 * @api {get} /api/v1/contract
 * @apiName Get NDR total supply
 * @apiGroup /v1/contract/ndr/supply
 * @apiParam { }
 */
router.get('/ndr/supply', getNDRSupply);
router.get('/dop/supply', getDOPSupply);

export default router;
