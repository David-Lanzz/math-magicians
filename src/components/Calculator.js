import React, { useState } from 'react';
import keys from './keys';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, changeObj] = useState({ total: 0, next: 0, operation: null });
  const handleClickEvent = (e) => {
    const result = calculate(obj, e.target.name);
    changeObj(result);
  };
  return (
    <div className="container">
      <input type="text" readOnly placeholder={`${obj.total || ''} ${obj.operation || ''} ${obj.next || ''}`} />
      <div className="keys">
        {keys().map((element, index) => <button id={index} name={element.btn} key={element.btn} type="button" onClick={handleClickEvent}>{element.btn}</button>)}
      </div>
    </div>
  );
};
export default Calculator;
