const thirdPartyService = require('../services/thirdPartyService');
const NumberModel = require('../models/numberModel');

exports.getNumbers = async (req, res) => {
  try {
    const numberid = req.params.numberid;
    const numbers = await thirdPartyService.fetchNumbers(numberid);
    const updatedNumbers = NumberModel.updateNumbers(numbers);
    const average = NumberModel.calculateAverage(updatedNumbers);
    
    res.status(200).json({
      windowPrevState: NumberModel.getPreviousState(),
      windowCurrState: updatedNumbers,
      numbers,
      avg: average
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
