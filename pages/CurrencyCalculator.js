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
<div className='text-black  p-6 m-[15vh] shadow-lg flex flex-col items-center space-y-4  justify-center'>
  <div className='w-full max-w-sm'>
    <span className='block text-lg font-semibold mb-2'>Base Currency:</span>
    <select
      onChange={(e) => setBaseCurrency(e.target.value)}
      value={baseCurrency}
      className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
    >
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
  <div className='w-full max-w-sm'>
    <label className='block text-lg font-semibold mb-2'>Target Currency:</label>
    <select
      onChange={(e) => setTargetCurrency(e.target.value)}
      value={targetCurrency}
      className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
    >
      {Object.keys(currencies).map((currency) => (
        <option key={currency} value={currency}>
          {currency}
        </option>
      ))}
    </select>
  </div>
  <div className='w-full max-w-sm'>
    <label className='block text-lg font-semibold mb-2'>Amount:</label>
    <input
      type='number'
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
      className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500'
    />
  </div>
  <div className='w-full max-w-sm'>
    <h2 className='text-xl font-bold bg-amber-400'>
      Result: {result ? `${amount} ${baseCurrency} = ${result} ${targetCurrency}` : 'Calculating...'}
    </h2>
  </div>
</div>

  );
};

export default CurrencyCalculator;
