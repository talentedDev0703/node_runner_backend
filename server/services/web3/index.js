import Web3 from 'web3';
import axios from 'axios';

import { PROD_WEB3_WEBSOCKET_PROVIDER } from '../../helpers/contract';

export const getWeb3 = () => {
  const options = {
    timeout: 30000, // ms

    clientConfig: {
      maxReceivedFrameSize: 100000000,
      maxReceivedMessageSize: 100000000
    },

    reconnect: {
      auto: true,
      delay: 5000, // ms
      maxAttempts: 5,
      onTimeout: false
    }
  };

  const web3 = new Web3(
    new Web3.providers.WebsocketProvider(PROD_WEB3_WEBSOCKET_PROVIDER, options)
  );

  return web3;
};

export const getGasPrice = async () => {
  const response = await axios.get(
    'https://ethgasstation.info/json/ethgasAPI.json'
  );
  let prices = {
    low: response.data.safeLow / 10,
    medium: response.data.average / 10,
    high: response.data.fast / 10,
    fastest: Math.round(response.data.fastest / 10)
  };
  return prices;
};

export const lookUpPrices = async function (idArray) {
  let ids = idArray.join('%2C');
  let res = await axios.get(
    'https://api.coingecko.com/api/v3/simple/price?ids=' +
      ids +
      '&vs_currencies=usd'
  );
  return res.data;
};
