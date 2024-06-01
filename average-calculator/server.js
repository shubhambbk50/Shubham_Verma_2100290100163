const express = require('express');
const app = express();
const dotenv = require('dotenv');
const numbersRoute = require('./routes/numbers');

dotenv.config();

app.use(express.json());
app.use('/numbers', numbersRoute);

const PORT = process.env.PORT || 9876;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
