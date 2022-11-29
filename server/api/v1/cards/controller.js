import { handleError, handleSuccess } from '../../../services/response';
import { MAX_VALUE } from '../../../helpers/constants';
import { cards } from '../../../helpers/dummy';
import { partnerCards } from '../../../helpers/partner';

export const getCards = async (req, res, next) => {
  try {
    handleSuccess(res, { cards });
  } catch (err) {
    handleError(res, err);
  }
};

export const getPartnerCards = async (req, res, next) => {
  try {
    handleSuccess(res, { cards: partnerCards });
  } catch (err) {
    handleError(res, err);
  }
};

export const getCardById = async (req, res, next) => {
  const { cardId } = req.params;

  const idx = cards.findIndex((c) => Number(cardId) === c.id);

  let data = {
    attributes: [],
    description: '',
    image: '',
    name: '',
    external_url: '',
    background_color: ''
  };

  if (idx >= 0) {
    const card = cards[idx];

    data = {
      attributes: [
        {
          trait_type: 'Strength',
          value: card.strength,
          max_value: MAX_VALUE
        },
        {
          trait_type: 'Defense',
          value: card.defense,
          max_value: MAX_VALUE
        },
        {
          trait_type: 'Rarity',
          value: card.rarity.text
        },
        {
          trait_type: 'Series',
          value: card.series
        },
        {
          trait_type: 'Sub-series',
          value: card.sub_series
        },
        {
          trait_type: 'isFoil',
          value: card.is_foil ? 'True' : 'False'
        }
      ],
      description: card.description,
      image: card.image,
      name: card.name,
      external_url: `https://docs.opensea.io/docs/3-viewing-your-items-on-opensea/${cardId}`,
      background_color: '000000'
    };
  }

  res.send(data);
};
