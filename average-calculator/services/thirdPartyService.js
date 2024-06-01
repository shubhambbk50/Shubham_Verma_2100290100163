const axios = require('axios');
const { THIRD_PARTY_API_URLS } = require('../utils/constants');

exports.fetchNumbers = async (type) => {
  try {
    const response = await axios.get(`${THIRD_PARTY_API_URLS[type]}`);
    return response.data.numbers;
  } catch (error) {
    throw new Error('Error fetching numbers');
  }
};
