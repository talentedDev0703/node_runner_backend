/* eslint-disable no-return-await */
import { getGasPrice } from '../web3';

export const getHeroPriceAsync = async (instance, rarity) => {
  return await instance.methods
    .getPriceHero(rarity)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getSupportPriceAsync = async (instance, rarity) => {
  return await instance.methods
    .getPriceSupport(rarity)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getCirculatingSupplyAsync = async (instance, tokenId) => {
  return await instance.methods
    .circulatingSupply(tokenId)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getOwnedCardsCountAsync = async (instance, address, tokenId) => {
  return await instance.methods
    .balanceOf(address, tokenId)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getStakedStrengthByAddressAsync = async (instance, address) => {
  return await instance.methods
    .strengthWeight(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getTotalStakedStrengthAsync = async (instance) => {
  return await instance.methods
    ._totalStrength()
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getClaimableNDRAsync = async (instance, address) => {
  return await instance.methods
    .earned(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getRewardRateAsync = async (instance, address) => {
  return await instance.methods
    .rewardRate()
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getStakedCardsAsync = async (instance, address) => {
  return await instance.methods
    .stakedOf(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const isApprovedAllAsync = async (instance, address, spenderAddress) => {
  return await instance.methods
    .isApprovedForAll(address, spenderAddress)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// Unstake Card
export const unStakeCardAsync = async (instance, web3, tokenId, address) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .withdrawNFT(tokenId)
    .estimateGas({ from: address });

  return await instance.methods
    .withdrawNFT(tokenId)
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// Unstake All Cards
export const unStakeAllCardsAsync = async (instance, web3, address) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .withdraw()
    .estimateGas({ from: address });

  return await instance.methods
    .withdraw()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// Claim NDR
export const claimNDRAsync = async (instance, web3, address) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .getReward()
    .estimateGas({ from: address });

  return await instance.methods
    .getReward()
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// Stake Card
export const stakeCardAsync = async (instance, web3, tokenId, address) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .stake(tokenId)
    .estimateGas({ from: address });

  return await instance.methods
    .stake(tokenId)
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

// Approve All Card
export const approveAllCardsAsync = async (
  instance,
  web3,
  spenderAddress,
  approved,
  address
) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .setApprovalForAll(spenderAddress, approved)
    .estimateGas({ from: address });

  return await instance.methods
    .setApprovalForAll(spenderAddress, approved)
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), "gwei"),
      gas: gasLimit * 2,
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
