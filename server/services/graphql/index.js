import { ApolloClient, InMemoryCache } from '@apollo/client/core';
import { gql } from '@apollo/client/core';
import 'cross-fetch/polyfill';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2',
  cache: new InMemoryCache()
});

export const getTokenInfo = async (token) => {
  const tokenResult = await client.query({
    query: gql`
          {
            token(id: "${token.toLowerCase()}") {
              name
              symbol
              decimals
              totalSupply
              tradeVolume
              derivedETH
              tradeVolumeUSD
              untrackedVolumeUSD
              txCount
              totalLiquidity
            }
          }
        `
  });

  return tokenResult.data.token;
};

export const getPairInfo = async (pairToken) => {
  const pairResult = await client.query({
    query: gql`
      {
        pair(id: "${pairToken.toLowerCase()}"){
          token0 {
            id
            symbol
            name
            derivedETH
          }
          token1 {
            id
            symbol
            name
            derivedETH
          }
          reserve0
          reserve1
          reserveUSD
          trackedReserveETH
          token0Price
          token1Price
          volumeUSD
          txCount
        }
      }
    `
  });

  return pairResult.data.pair;
};
