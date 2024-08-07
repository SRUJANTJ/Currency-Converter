// components/CurrencyCalculator.js
import { useState, useEffect } from 'react';
import axios from 'axios';

const CurrencyCalculator = () => {
  const [currencies, setCurrencies] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [amount, setAmount] = useState(0);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        const response = await axios.get(`/api/currencies?base=${baseCurrency}`);
        setCurrencies(response.data.rates);
      } catch (error) {
        console.error('Failed to fetch currencies', error);
      }
    };

    fetchCurrencies();
  }, [baseCurrency]);

  useEffect(() => {
    if (currencies[targetCurrency]) {
      setResult((amount * currencies[targetCurrency]).toFixed(2));
    }
  }, [amount, targetCurrency, currencies]);

  return (
    <div class="container">

<div className=' p-6  shadow-lg rounded-xl flex flex-col items-center space-y-4'>
  <div className='w-full max-w-sm'>
    <label className='block text-lg font-semibold mb-2 text-gray-800'>From:</label>
    <select
      onChange={(e) => setBaseCurrency(e.target.value)}
      value={baseCurrency}
      className='w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out'
    >
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
  <div className='w-full max-w-sm'>
    <label className='block text-lg font-semibold mb-2 text-gray-800'>To:</label>
    <select
      onChange={(e) => setTargetCurrency(e.target.value)}
      value={targetCurrency}
      className='w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out'
    >
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
  <div className='w-full max-w-sm'>
    <label className='block text-lg font-semibold mb-2 text-gray-800'>Amount:</label>
    <input
      type='number'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className='w-full p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-green-400 transition duration-150 ease-in-out'
    />
  </div>
  <div className='w-full max-w-sm result'>
    <h2 className='text-xl font-bold text-gray-800result p-3 rounded-lg shadow-md'>
      Result: {result ? `${amount} ${baseCurrency} = ${result} ${targetCurrency}` : 'Calculating...'}
    </h2>
  </div>
</div>

</div>
  );
};

export default CurrencyCalculator;
