import { Router } from 'express';
import { getCards, getPartnerCards, getCardById } from './controller';

const router = new Router();

/**
 * @api {get} /api/v1/cards
 * @apiName Get Cards
 * @apiGroup /v1/cards
 * @apiParam {}
 */
router.get('/', getCards);

/**
 * @api {get} /api/v1/cards
 * @apiName Get Cards By Id
 * @apiGroup /v1/cards/token/:cardId
 * @apiParam { cardId }
 */
router.get('/token/:cardId', getCardById);

/**
 * @api {get} /api/v1/cards/partners
 * @apiName Get Partner Cards
 * @apiGroup /v1/cards/partners
 * @apiParam {}
 */
router.get('/partners', getPartnerCards);

export default router;
