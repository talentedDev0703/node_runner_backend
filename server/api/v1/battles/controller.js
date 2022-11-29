import BigNumber from 'bignumber.js';

import { ndrAddress } from '../../../config';

import { handleError, handleSuccess } from '../../../services/response';
import { battles, currentRound } from '../../../helpers/battles';

import { lookUpPrices } from '../../../services/web3';
import { getTokenInfo } from '../../../services/graphql';

export const getBattles = async (req, res, next) => {
  try {
    const ethPrice = (await lookUpPrices(['ethereum'])).ethereum.usd;

    const ndrTokenInfo = await getTokenInfo(ndrAddress);
    const ndrPrice = ndrTokenInfo.derivedETH * ethPrice;

    const data = {
      battles,
      currentRound,
      price: {
        eth: ethPrice,
        ndr: ndrPrice
      }
    };

    handleSuccess(res, data);
  } catch (err) {
    handleError(res, err);
  }
};
