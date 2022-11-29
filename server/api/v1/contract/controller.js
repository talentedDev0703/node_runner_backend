import BigNumber from 'bignumber.js';

import { handleError, handleSuccess } from '../../../services/response';

import { getWeb3 } from '../../../services/web3';
import {
  getNDRInstance,
  getDOPInstance,
  getNFTStakingInstance,
  getVillainStakingInstance
} from '../../../services/web3/instance';

import { getBalanceAsync, getTotalSupply } from '../../../services/web3/lpStaking';

export const getNDRSupply = async (req, res, next) => {
  try {
    const web3 = getWeb3();

    const ndr = getNDRInstance(web3);
    const nftStaking = getNFTStakingInstance(web3);
    const villainStaking = getVillainStakingInstance(web3);

    const ndrTotalSupply = await getTotalSupply(ndr.instance);
    const ndrNFTStaking = await getBalanceAsync(ndr.instance, nftStaking.address);
    const ndrVillainStaking = await getBalanceAsync(ndr.instance, villainStaking.address);

    const ndrSupply = (Number(ndrTotalSupply) - Number(ndrNFTStaking) - Number(ndrVillainStaking)) / Math.pow(10, 18);

    res.send(ndrSupply.toString());
  } catch (err) {
    handleError(res, err);
  }
};

export const getDOPSupply = async (req, res, next) => {
  try {
    const web3 = getWeb3();

    const drop = getDOPInstance(web3);

    const dropTotalSupply = await getTotalSupply(drop.instance);
    const drop1Staking = await getBalanceAsync(drop.instance, '0x93068cCFb7F4E49326DDE5E038415F569074fDD7');
    const drop2Staking = await getBalanceAsync(drop.instance, '0xe5f10e1ab6c2cdc37476ec6c7460976c67c4d7bb');
    const drop3Staking = await getBalanceAsync(drop.instance, '0x93532bbda855716c2c16e77695589d78ffe94085');
    const drop4Staking = await getBalanceAsync(drop.instance, '0x3bfbfbb9de8ec3ea621a965ceb68779320391355');
    const drop5Staking = await getBalanceAsync(drop.instance, '0xab60612d4a9ed569e4ce8d9e5f2e4fed9faf87d3');
    const drop6Staking = await getBalanceAsync(drop.instance, '0x5b13929da9fae9929aba25fc14014305f6e5da89');

    const dropSupply = (
      Number(dropTotalSupply) -
      Number(drop1Staking) -
      Number(drop2Staking) -
      Number(drop3Staking) -
      // Number(drop4Staking) -
      // Number(drop5Staking) -
      Number(drop6Staking)
    ) / Math.pow(10, 18);

    res.send(dropSupply.toString());
  } catch (err) {
    handleError(res, err);
  }
};
