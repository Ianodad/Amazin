import React from 'react';
import Select from 'react-select';

const CurrencySelect = ({ changeCurrency, currency }) => {
  const options = [
    { value: 0, label: 'EUR' },
    { value: 1, label: 'KES' },
    { value: 2, label: 'NGN' },
    { value: 3, label: 'USD' },
  ];
  return (
    <div className="block text-left" style={{ maxWidth: '400px' }}>
      <Select defaultValue={options[currency]} options={options} onChange={changeCurrency} />
    </div>
  );
};

export default CurrencySelect;
