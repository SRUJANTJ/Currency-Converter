// pages/api/currencies.js
import axios from 'axios';

export default async function handler(req, res) {
  const { base = 'USD' } = req.query; // Default base currency is USD
  try {
    const response = await axios.get(`https://api.exchangerate-api.com/v4/latest/${base}`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch currency data' });
  }
}
