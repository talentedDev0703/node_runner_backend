import { Router } from 'express';
import { project } from '../helpers/dummy';

// Cards
import cards from './v1/cards';
import contract from './v1/contract';
import battles from './v1/battles';

const router = new Router();

// Cards
router.use('/v1/cards', cards);

// Web3 Contract
router.use('/v1/contract', contract);

// Battle
router.use('/v1/battles', battles);

router.get('/nft.json', (req, res) => {
  res.json(project);
});

export default router;
