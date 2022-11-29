/* eslint-disable no-return-await */
import { getGasPrice } from '../web3';

export const getEarningAsync = async (instance, address) => {
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

export const getRewardAsync = async (instance, address) => {
  return await instance.methods
    .rewards(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getBalanceAsync = async (instance, address) => {
  return await instance.methods
    .balanceOf(address)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getAllowanceAsync = async (instance, owner, sender) => {
  return await instance.methods
    .allowance(owner, sender)
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const getTotalSupply = async (instance) => {
  return await instance.methods
    .totalSupply()
    .call()
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const depositAsync = async (instance, web3, amount, address) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .stake(amount.toString())
    .estimateGas({ from: address });

  return await instance.methods
    .stake(amount.toString())
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const withdrawAsync = async (instance, web3, amount, address) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .withdraw(amount.toString())
    .estimateGas({ from: address });

  return await instance.methods
    .withdraw(amount.toString())
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};

export const approveAsync = async (
  instance,
  web3,
  amount,
  address,
  spender
) => {
  const prices = await getGasPrice();

  // Get gas limit
  const gasLimit = await instance.methods
    .approve(
      spender,
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    )
    .estimateGas({ from: address });

  return await instance.methods
    .approve(
      spender,
      '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff'
    )
    .send({
      from: address,
      gasPrice: web3.utils.toWei(prices.medium.toString(), 'gwei'),
      gas: gasLimit * 2
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    });
};
