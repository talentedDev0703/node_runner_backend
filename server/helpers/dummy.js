import { CARD_RARITY, CARD_SERIES, CARD_SUB_SERIES } from './constants';
import { env, port, ip } from '../config';

export const cardPath =
  env === 'development'
    ? `http://${ip}:${port}/images/cards`
    : `https://api.noderunners.io/public/images/cards`;

export const project = {
  description: 'Join the resistance and fight for the decentralised tomorrow.',
  external_link: 'https://www.noderunners.io/',
  name: 'NodeRunners',
  image: 'https://api.noderunners.io/public/NDR.png'
};

export const cards = [
  {
    id: 1,
    name: 'Michael Egorov',
    description:
      'His unforgiving katana cuts through tracking, fees and slippage. Need to move your stable under the radar? He is your guy.',
    strength: 4,
    defense: 4,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/hero/Michael_Egorov_1609861668.jpg`
  },
  {
    id: 2,
    name: 'Rune Christensen',
    description:
      'Rune keeps our army’s reserves safe and stable. He is also always eager to lend some cash to fund our movement!',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 125,
    image: `${cardPath}/hero/RUNE_1609861668.png`
  },
  {
    id: 3,
    name: 'Bitcoin Pizza Purchase',
    description:
      'Great changes require great sacrifices. On May 22, 2010 Laszlo Hanyech made the first commercial BTC transaction, purchasing 2 pizzas for 10,000 BTC.',
    strength: 4,
    defense: 4,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WISDOM,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/support/Bitcoin_Pizza_1609861668.png`
  },
  {
    id: 4,
    name: 'HODL',
    description:
      'HODL your bags with strong hands and great fortune shall come your way.',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WISDOM,
    is_foil: false,
    total_minted: 125,
    image: `${cardPath}/support/HODL_1609861668.png`
  },
  {
    id: 5,
    name: 'PSYOPS',
    description:
      'Influence your enemies’s information and strike when they least expect it.',
    strength: 4,
    defense: 4,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.ATTACK,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/support/psyops_1609861668.png`
  },
  {
    id: 6,
    name: '51% Attack',
    description: 'Take over 51% of their blockchain and show no mercy.',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.ATTACK,
    is_foil: false,
    total_minted: 125,
    image: `${cardPath}/support/51attack_1609861668.png`
  },
  {
    id: 7,
    name: 'Stani Kulechov',
    description:
      'His resources are vast and he can assist us in a flash. Stani helps our squad operate in the most efficient way possible.',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 125,
    image: `${cardPath}/hero/Stani_Kulechov_1609861668.jpg`
  },
  {
    id: 8,
    name: 'Kain Warwick',
    description:
      'Feared by banks and praised by traders. Kain is the mastermind of synthetic assets that fuel our movement.',
    strength: 4,
    defense: 4,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/hero/Kain_Warwick_1609861668.jpg`
  },
  {
    id: 9,
    name: 'Badge of Honour',
    description:
      'Thank you for being with Node Runners from the start and contributing to our movement.',
    strength: 0,
    defense: 0,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.BADGE,
    sub_series: CARD_SUB_SERIES.GENERIC,
    is_foil: false,
    total_minted: 191,
    image: `${cardPath}/badge/badge_of_honour_892323.jpg`,
    opensea: true
  },
  {
    id: 10,
    name: 'Hayden Adams',
    description:
      'Hayden made our transactions unstoppable, our movement - invincible.',
    strength: 40,
    defense: 40,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 60,
    image: `${cardPath}/hero/Hayden_Adams_1609861668.jpg`
  },
  {
    id: 11,
    name: 'Vitalik Buterin',
    description:
      'Vitalik leads our liberation through decentralisation. Our movement is unbreakable and collapse of the oppressive regime is inevitable.',
    strength: 95,
    defense: 95,
    rarity: CARD_RARITY.LEGENDARY,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 15,
    image: `${cardPath}/hero/Vitalik_Buterin_1609861668.jpg`
  },
  {
    id: 12,
    name: 'Andre Cronje',
    description:
      'The man behind the DeFi powerhouse. Andre’s far reaching influence and unlimited resources help us to achieve the unimaginable.',
    strength: 45,
    defense: 45,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 60,
    image: `${cardPath}/hero/Andre_Cronje_1609861668.jpg`
  },
  {
    id: 13,
    name: 'Keanu Titanhand',
    description:
      'Wake the fuck up Samurai, we have a city to burn.',
    strength: 76,
    defense: 40,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.LIMITED,
    is_foil: false,
    total_minted: 15,
    hash: 9999,
    image: `${cardPath}/hero/Keanu_Titanhand_1609861668.jpg`
  },
  {
    id: 14,
    name: 'Robert Leshner',
    description:
      'Whether you want to put your assets to work, or borrow some cash, Robert will make sure your needs are met.',
    strength: 4,
    defense: 4,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 125,
    image: `${cardPath}/hero/Robert_Leshner_1609861668.jpg`
  },
  {
    id: 15,
    name: 'Bitcoin ATH 2017',
    description:
      'If you rode this wave from bottom to top, then you’ve seen it all. With this card your experience is incomparable and your wisdom is priceless.',
    strength: 38,
    defense: 38,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WISDOM,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/support/Bitcoin_ATH_2017_1609861668.jpg`
  },
  {
    id: 16,
    name: 'Elizabeth Stark',
    description:
      'Fierce figher for the decentralised tomorrow. Elizabeth ensures that you Bitcoin gets sent at the speed of light.',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 60,
    image: `${cardPath}/hero/Elizabeth_Stark_1609861668.jpg`
  },
  {
    id: 17,
    name: 'Badge of Friendship',
    description:
      'Trust, respect, and friendship is what glues us together. Thank you for your support fren.',
    strength: 0,
    defense: 0,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.BADGE,
    sub_series: CARD_SUB_SERIES.GENERIC,
    is_foil: false,
    total_minted: 116,
    image: `${cardPath}/badge/badge_of_friendship_2972372.jpg`,
    opensea: true
  },
  {
    id: 18,
    name: 'Sergey Nazarov',
    description:
      'Whenever in doubt we seek Sergey’s advice. His indispensable knowledge guides us in uncertain times.',
    strength: 40,
    defense: 40,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/hero/Sergey_Nazarov_1609861668.jpg`
  },
  {
    id: 19,
    name: 'Hotlava Revolver',
    description: '',
    strength: 1,
    defense: 1,
    rarity: CARD_RARITY.BASIC,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WEAPONS,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/support/Hotlava_Revolver.jpg`
  },
  {
    id: 20,
    name: 'Shockwave Handgun',
    description: '',
    strength: 1,
    defense: 1,
    rarity: CARD_RARITY.BASIC,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WEAPONS,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/support/Shockwave_Handgun.jpg`
  },
  {
    id: 21,
    name: 'Thunderbolt Handgun',
    description: '',
    strength: 1,
    defense: 1,
    rarity: CARD_RARITY.BASIC,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WEAPONS,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/support/Thunderbolt_Handgun.jpg`
  },
  {
    id: 22,
    name: 'Wrath Handgun',
    description: '',
    strength: 1,
    defense: 1,
    rarity: CARD_RARITY.BASIC,
    series: CARD_SERIES.SUPPORT,
    sub_series: CARD_SUB_SERIES.WEAPONS,
    is_foil: false,
    total_minted: 250,
    image: `${cardPath}/support/Wrath_handgun.jpg`
  },
  {
    id: 23,
    name: 'Satoshi Nakamoto',
    description:
      'With the divine spirit of Satoshi on our side, there is no power that can’t be overthrown.',
    strength: 99,
    defense: 99,
    rarity: CARD_RARITY.LEGENDARY,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 7,
    image: `${cardPath}/hero/Satoshi_Nakamoto.jpg`
  },
  {
    id: 24,
    name: 'Gavin Wood',
    description:
      'Gavin’s democratized blockchain empowers anyone to change the world.',
    strength: 95,
    defense: 95,
    rarity: CARD_RARITY.LEGENDARY,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 7,
    image: `${cardPath}/hero/Gavin_Wood_908343.jpg`
  },
  {
    id: 25,
    name: 'Azuki & Doki',
    description:
      'Don’t get fooled by their cuteness, Azuki and Doki have the sharpest katanas in town.',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.LIMITED,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/hero/Azuki_Doki_89682742.jpg`
  },
  {
    id: 26,
    name: 'Ghouls',
    description:
      'If you know, you know',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.LIMITED,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/hero/Ghouls_Moonbase_9973492.jpg`
  },
  {
    id: 27,
    name: 'Charles Hoskinson',
    description:
      'Charles is our ally who supports good deeds and offers a helping hand at the speed of light.',
    strength: 95,
    defense: 95,
    rarity: CARD_RARITY.LEGENDARY,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 7,
    image: `${cardPath}/hero/Charles_Hoskinson_89282.jpg`
  },
  {
    id: 28,
    name: 'CZ',
    description:
      'CZ is the only ally in the centralized world whom we can trust. With him your funds are SAFU.',
    strength: 40,
    defense: 40,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/hero/CZ_24084759349.jpg`
  },
  {
    id: 29,
    name: 'Lord Zieg',
    description:
      'Behold and fear the Lord of Url. The weaver of conquest and mayhem!',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.LIMITED,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/hero/Lord_Zieg_9278982325.jpg`
  },
  {
    id: 30,
    name: 'Doge',
    description:
      'Much savage',
    strength: 4,
    defense: 4,
    rarity: CARD_RARITY.COMMON,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 125,
    image: `${cardPath}/hero/Doge_092234.jpg`
  },
  {
    id: 31,
    name: 'SBF',
    description:
      'Sam is the master of opportunities, you don\'t want to miss his calls.',
    strength: 18,
    defense: 18,
    rarity: CARD_RARITY.RARE,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 30,
    image: `${cardPath}/hero/SBF_902734.jpg`
  },
  {
    id: 32,
    name: 'Elon Musk',
    description:
      'Mars will be decentralised',
    strength: 96,
    defense: 96,
    rarity: CARD_RARITY.LEGENDARY,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 7,
    image: `${cardPath}/hero/Elon_Musk_92738240.jpg`
  },
  {
    id: 33,
    name: '0xMaki',
    description:
      'His DeFi leadership leaves no doubt, while his katana leaves no witnesses',
    strength: 40,
    defense: 40,
    rarity: CARD_RARITY.EPIC,
    series: CARD_SERIES.PEOPLE,
    sub_series: CARD_SUB_SERIES.DEVS,
    is_foil: false,
    total_minted: 20,
    image: `${cardPath}/hero/EPIC_SUSHICHEF_04302021.jpg`
  }
];
