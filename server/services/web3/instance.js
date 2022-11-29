import {
  DEV_LPSTAKING_ADDRESS,
  PROD_LPSTAKING_ADDRESS,
  DEV_LPSTAKING_ABI,
  PROD_LPSTAKING_ABI,
  DEV_NFT_ADDRESS,
  PROD_NFT_ADDRESS,
  DEV_NFT_ABI,
  PROD_NFT_ABI,
  DEV_NFT_STAKING_ADDRESS,
  PROD_NFT_STAKING_ADDRESS,
  DEV_NFT_STAKING_ABI,
  PROD_NFT_STAKING_ABI,
  DEV_NDR_ABI,
  PROD_NDR_ABI,
  DEV_NDR_ADDRESS,
  PROD_NDR_ADDRESS,
  DEV_UNISWAPV2PAIR_ABI,
  PROD_UNISWAPV2PAIR_ABI,
  DEV_UNISWAPV2PAIR_ADDRESS,
  PROD_UNISWAPV2PAIR_ADDRESS,
  DEV_LPSTAKING_OLD_ABI,
  PROD_LPSTAKING_OLD_ABI,
  DEV_LPSTAKING_OLD_ADDRESS,
  PROD_LPSTAKING_OLD_ADDRESS,
  DEV_VILLAIN_STAKING_ABI,
  PROD_VILLAIN_STAKING_ABI,
  DEV_VILLAIN_STAKING_ADDRESS,
  PROD_VILLAIN_STAKING_ADDRESS,
  DEV_DOP_ABI,
  PROD_DOP_ABI,
  DEV_DOP_ADDRESS,
  PROD_DOP_ADDRESS,
  DEV_DOP_1_ABI,
  PROD_DOP_1_ABI,
  DEV_DOP_1_ADDRESS,
  PROD_DOP_1_ADDRESS,
  DEV_DOP_2_ABI,
  PROD_DOP_2_ABI,
  DEV_DOP_2_ADDRESS,
  PROD_DOP_2_ADDRESS,
} from '../../helpers/contract';

// const { REACT_APP_BUILD_MODE } = process.env;
const REACT_APP_BUILD_MODE = 'production';

export const getLPStakingInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_LPSTAKING_ABI;
    address = DEV_LPSTAKING_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_LPSTAKING_ABI;
    address = PROD_LPSTAKING_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getOldLPStakingInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_LPSTAKING_OLD_ABI;
    address = DEV_LPSTAKING_OLD_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_LPSTAKING_OLD_ABI;
    address = PROD_LPSTAKING_OLD_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getNFTInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_NFT_ABI;
    address = DEV_NFT_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_NFT_ABI;
    address = PROD_NFT_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getNFTStakingInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_NFT_STAKING_ABI;
    address = DEV_NFT_STAKING_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_NFT_STAKING_ABI;
    address = PROD_NFT_STAKING_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getNDRInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_NDR_ABI;
    address = DEV_NDR_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_NDR_ABI;
    address = PROD_NDR_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getUniInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_UNISWAPV2PAIR_ABI;
    address = DEV_UNISWAPV2PAIR_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_UNISWAPV2PAIR_ABI;
    address = PROD_UNISWAPV2PAIR_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getVillainStakingInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_VILLAIN_STAKING_ABI;
    address = DEV_VILLAIN_STAKING_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_VILLAIN_STAKING_ABI;
    address = PROD_VILLAIN_STAKING_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};

export const getDOPInstance = (web3) => {
  let abi;
  let instance;
  let address;

  if (REACT_APP_BUILD_MODE === 'development') {
    abi = DEV_DOP_ABI;
    address = DEV_DOP_ADDRESS;
  } else if (REACT_APP_BUILD_MODE === 'production') {
    abi = PROD_DOP_ABI;
    address = PROD_DOP_ADDRESS;
  }

  instance = new web3.eth.Contract(abi, address);

  return {
    address,
    abi,
    instance
  };
};
